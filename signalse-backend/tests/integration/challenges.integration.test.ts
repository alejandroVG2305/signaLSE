import request from "supertest";
import { connectTestDB, clearTestDB, closeTestDB } from "./helpers/db";
import { createTestApp } from "./helpers/test-app";
import { TEST_UID, seedUser, seedQuestions, seedSigns } from "./helpers/seed";
import { QuestionModel } from "../../models/question.model";

jest.mock("../../middlewares/auth.middleware", () => ({
  verifyFirebaseToken: (req: any, res: any, next: any) => {
    const authHeader = req.headers.authorization;
    if (!authHeader?.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Unauthorized. Token is missing." });
    }
    const token = authHeader.split(" ")[1];
    if (token === "tokenInvalid") {
      return res.status(401).json({ error: "Invalid or expired token." });
    }
    req.uid = token;
    next();
  },
  requireAuth: (req: any, res: any, next: any) => {
    if (!req.uid) {
      return res.status(401).json({ error: "errors.userNotAuthenticated" });
    }
    next();
  },
}));

const app = createTestApp();

const VALID_START_BODY = {
  categories: [],
  questionType: "WORD_CHOICE",
  numberOfOptions: 4,
  timePerQuestion: 30,
  totalQuestions: 5,
};

beforeAll(async () => {
  await connectTestDB();
});

afterEach(async () => {
  await clearTestDB();
});

afterAll(async () => {
  await closeTestDB();
});

describe("Challenges – POST /api/v1/challenges/startSession", () => {
  test("PIRC1 – iniciar sesión con datos válidos devuelve 200 con primera pregunta", async () => {
    await seedUser();
    await seedSigns();
    await seedQuestions();

    const res = await request(app)
      .post("/api/v1/challenges/startSession")
      .set("Authorization", `Bearer ${TEST_UID}`)
      .send(VALID_START_BODY);

    expect(res.status).toBe(200);
    expect(res.body.question).toBeDefined();
    expect(res.body.totalQuestions).toBe(5);
  });

  test("PIRC2 – filtro por categoría Alfabeto devuelve 200 con preguntas de esa categoría", async () => {
    await seedUser();
    await seedSigns();
    await seedQuestions();

    const res = await request(app)
      .post("/api/v1/challenges/startSession")
      .set("Authorization", `Bearer ${TEST_UID}`)
      .send({ ...VALID_START_BODY, categories: ["Alfabeto"] });

    expect(res.status).toBe(200);
    expect(res.body.question).toBeDefined();
    expect(res.body.totalQuestions).toBeLessThanOrEqual(5);

    const question = await QuestionModel.findOne({
      questionId: res.body.question.questionId,
    });
    expect(question?.category).toBe("Alfabeto");
  });

  test("PIRC3 – sin preguntas disponibles para los filtros devuelve 404", async () => {
    await seedUser();
    await seedSigns();
    await seedQuestions();

    const res = await request(app)
      .post("/api/v1/challenges/startSession")
      .set("Authorization", `Bearer ${TEST_UID}`)
      .send({
        ...VALID_START_BODY,
        questionType: "MATCH_CHOICE",
        categories: ["INVÁLIDA"],
      });

    expect(res.status).toBe(404);
    expect(res.body.message).toBeDefined();
  });

  test("PIRC4 – token inválido devuelve 401", async () => {
    const res = await request(app)
      .post("/api/v1/challenges/startSession")
      .set("Authorization", "Bearer tokenInvalid")
      .send(VALID_START_BODY);

    expect(res.status).toBe(401);
    expect(res.body.error).toBeDefined();
  });
});

describe("Challenges – POST /api/v1/challenges/evaluate", () => {
  async function startChallengeSession() {
    await seedUser();
    await seedSigns();
    await seedQuestions();
    const startRes = await request(app)
      .post("/api/v1/challenges/startSession")
      .set("Authorization", `Bearer ${TEST_UID}`)
      .send({ ...VALID_START_BODY, totalQuestions: 2 });
    return startRes.body;
  }

  test("PIRC5 – respuesta correcta en pregunta intermedia devuelve 200 con correcto: true", async () => {
    const session = await startChallengeSession();
    expect(session.question).toBeDefined();

    const res = await request(app)
      .post("/api/v1/challenges/evaluate")
      .set("Authorization", `Bearer ${TEST_UID}`)
      .send({ answer: "opt-001" });

    expect(res.status).toBe(200);
    expect(res.body.correct).toBe(true);
    expect(res.body.pointsEarned).toBe(100);
    expect(res.body.nextQuestion).toBeDefined();
  });

  test("PIRC6 – respuesta incorrecta en pregunta intermedia devuelve 200 con correcto: false", async () => {
    await startChallengeSession();

    const res = await request(app)
      .post("/api/v1/challenges/evaluate")
      .set("Authorization", `Bearer ${TEST_UID}`)
      .send({ answer: "opt-002" });

    expect(res.status).toBe(200);
    expect(res.body.correct).toBe(false);
    expect(res.body.pointsEarned).toBe(0);
    expect(res.body.nextQuestion).toBeDefined();
  });

  test("PIRC7 – respuesta en la última pregunta devuelve finished: true con estadísticas", async () => {
    await startChallengeSession();

    await request(app)
      .post("/api/v1/challenges/evaluate")
      .set("Authorization", `Bearer ${TEST_UID}`)
      .send({ answer: "opt-001" });

    const res = await request(app)
      .post("/api/v1/challenges/evaluate")
      .set("Authorization", `Bearer ${TEST_UID}`)
      .send({ answer: "opt-001" });

    expect(res.status).toBe(200);
    expect(res.body.finished).toBe(true);
    expect(res.body.hits).toBeDefined();
    expect(res.body.misses).toBeDefined();
  });

  test("PIRC8 – tiempo agotado devuelve timeExpired: true y puntos: 0", async () => {
    await seedUser();
    await seedSigns();
    await seedQuestions();

    await request(app)
      .post("/api/v1/challenges/startSession")
      .set("Authorization", `Bearer ${TEST_UID}`)
      .send({ ...VALID_START_BODY, totalQuestions: 2, timePerQuestion: 0 });

    await new Promise((r) => setTimeout(r, 10));

    const res = await request(app)
      .post("/api/v1/challenges/evaluate")
      .set("Authorization", `Bearer ${TEST_UID}`)
      .send({ answer: "opt-001" });

    expect(res.status).toBe(200);
    expect(res.body.timeExpired).toBe(true);
    expect(res.body.pointsEarned).toBe(0);
  });

  test("PIRC9 – responder sin sesión activa devuelve 500", async () => {
    // Use a UID with no prior session to avoid persistence from other tests
    const noSessionUID = "uid-no-session-pirc9";

    const res = await request(app)
      .post("/api/v1/challenges/evaluate")
      .set("Authorization", `Bearer ${noSessionUID}`)
      .send({ answer: "opt-001" });

    expect(res.status).toBe(500);
    expect(res.body.message).toBeDefined();
  });

  test("PIRC10 – token inválido devuelve 401", async () => {
    const res = await request(app)
      .post("/api/v1/challenges/evaluate")
      .set("Authorization", "Bearer tokenInvalid")
      .send({ answer: "opt-001" });

    expect(res.status).toBe(401);
    expect(res.body.error).toBeDefined();
  });
});
