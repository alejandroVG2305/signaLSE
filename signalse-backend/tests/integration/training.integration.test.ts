import request from "supertest";
import { connectTestDB, clearTestDB, closeTestDB } from "./helpers/db";
import { createTestApp } from "./helpers/test-app";
import {
  TEST_UID,
  TEST_SIGN_ID,
  seedUser,
  seedSigns,
  seedSingleTrainingSign,
  seedGoals,
} from "./helpers/seed";

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

// Prediction token mock: the predictionToken value IS the recognized category letter
jest.mock("../../middlewares/verify-prediction.middleware", () => ({
  verifyPredictionToken: (req: any, res: any, next: any) => {
    const { predictionToken } = req.body;
    if (!predictionToken) {
      return res.status(400).json({ error: "Missing prediction token" });
    }
    if (predictionToken === "invalidPredictionToken") {
      return res.status(401).json({ error: "Invalid prediction token" });
    }
    req.prediction = { category: predictionToken, score: 0.99 };
    next();
  },
}));

const app = createTestApp();

beforeAll(async () => {
  await connectTestDB();
});

afterEach(async () => {
  await clearTestDB();
});

afterAll(async () => {
  await closeTestDB();
});

// NORMAL TRAINING
describe("Training – POST /api/v1/training/startSpellingSession", () => {
  test("PITR1 – iniciar sesión de entrenamiento devuelve 200 con lista de palabras", async () => {
    await seedUser();
    await seedSigns();
    await seedGoals();

    const res = await request(app)
      .post("/api/v1/training/startSpellingSession")
      .set("Authorization", `Bearer ${TEST_UID}`)
      .send({});

    expect(res.status).toBe(200);
    expect(res.body.words).toBeDefined();
    expect(Array.isArray(res.body.words)).toBe(true);
    expect(res.body.words.length).toBeGreaterThan(0);
  });

  test("PITR2 – token inválido devuelve 401", async () => {
    const res = await request(app)
      .post("/api/v1/training/startSpellingSession")
      .set("Authorization", "Bearer tokenInvalid")
      .send({});

    expect(res.status).toBe(401);
    expect(res.body.error).toBeDefined();
  });
});

describe("Training – POST /api/v1/training/evaluate (normal)", () => {
  // Solo se siembra un signo apto para IA ("HOLA"); así $sample siempre lo
  // devuelve como única palabra de la sesión normal, permitiendo aserciones
  // deterministas sobre las letras esperadas.
  async function startNormalSession(uid = TEST_UID) {
    return request(app)
      .post("/api/v1/training/startSpellingSession")
      .set("Authorization", `Bearer ${uid}`)
      .send({});
  }

  test("PITR3 – letra correcta devuelve 200 con correcto: true e índices actualizados", async () => {
    await seedUser();
    await seedSingleTrainingSign();
    await seedGoals();
    await startNormalSession();

    // HOLA: primera letra es H
    const res = await request(app)
      .post("/api/v1/training/evaluate")
      .set("Authorization", `Bearer ${TEST_UID}`)
      .send({ predictionToken: "H" });

    expect(res.status).toBe(200);
    expect(res.body.result.correct).toBe(true);
    expect(res.body.result.currentLetterIndex).toBe(1);
    expect(res.body.result.currentWordIndex).toBe(0);
    expect(res.body.result.finished).toBe(false);
  });

  test("PITR4 – letra incorrecta devuelve 200 con correcto: false e índices sin cambiar", async () => {
    await seedUser();
    await seedSingleTrainingSign();
    await seedGoals();
    await startNormalSession();

    // HOLA: primera letra esperada es H → enviamos A (incorrecta)
    const res = await request(app)
      .post("/api/v1/training/evaluate")
      .set("Authorization", `Bearer ${TEST_UID}`)
      .send({ predictionToken: "A" });

    expect(res.status).toBe(200);
    expect(res.body.result.correct).toBe(false);
    expect(res.body.result.currentLetterIndex).toBe(0);
  });

  test("PITR5 – última letra de última palabra devuelve finished: true con puntos totales", async () => {
    await seedUser();
    await seedSingleTrainingSign();
    await seedGoals();
    await startNormalSession();

    // Deletreamos H, O, L (no son la última letra de la única/última palabra "HOLA")
    for (const letter of ["H", "O", "L"]) {
      await request(app)
        .post("/api/v1/training/evaluate")
        .set("Authorization", `Bearer ${TEST_UID}`)
        .send({ predictionToken: letter });
    }

    // Letra final "A": última letra de la última (y única) palabra
    const res = await request(app)
      .post("/api/v1/training/evaluate")
      .set("Authorization", `Bearer ${TEST_UID}`)
      .send({ predictionToken: "A" });

    expect(res.status).toBe(200);
    expect(res.body.result.correct).toBe(true);
    expect(res.body.result.finished).toBe(true);
    expect(res.body.result.points).toBeGreaterThan(0);

    await new Promise((r) => setTimeout(r, 50));
  });

  test("PITR6 – sin token de predicción devuelve 400", async () => {
    await seedUser();
    await seedSingleTrainingSign();
    await seedGoals();
    await startNormalSession();

    const res = await request(app)
      .post("/api/v1/training/evaluate")
      .set("Authorization", `Bearer ${TEST_UID}`)
      .send({});

    expect(res.status).toBe(400);
    expect(res.body.error).toBeDefined();
  });

  test("PITR7 – token de predicción inválido devuelve 401", async () => {
    await seedUser();
    await seedSingleTrainingSign();
    await seedGoals();
    await startNormalSession();

    const res = await request(app)
      .post("/api/v1/training/evaluate")
      .set("Authorization", `Bearer ${TEST_UID}`)
      .send({ predictionToken: "invalidPredictionToken" });

    expect(res.status).toBe(401);
    expect(res.body.error).toBeDefined();
  });

  test("PITR8 – evaluar sin sesión activa devuelve 500", async () => {
    // Use a UID that has never started a session in this process
    const noSessionUID = "uid-no-session-pitr8";

    const res = await request(app)
      .post("/api/v1/training/evaluate")
      .set("Authorization", `Bearer ${noSessionUID}`)
      .send({ predictionToken: "H" });

    expect(res.status).toBe(500);
    expect(res.body.message).toBeDefined();
  });

  test("PITR9 – token Firebase inválido en evaluación normal devuelve 401", async () => {
    const res = await request(app)
      .post("/api/v1/training/evaluate")
      .set("Authorization", "Bearer tokenInvalid")
      .send({ predictionToken: "H" });

    expect(res.status).toBe(401);
    expect(res.body.error).toBeDefined();
  });
});

// FREE TRAINING
describe("Training – POST /api/v1/training/startFreeSpellingSession", () => {
  test("PITR10 – signo válido devuelve 200 con la palabra a deletrear", async () => {
    await seedUser();
    await seedSigns();
    await seedGoals();

    const res = await request(app)
      .post("/api/v1/training/startFreeSpellingSession")
      .set("Authorization", `Bearer ${TEST_UID}`)
      .send({ signId: TEST_SIGN_ID });

    expect(res.status).toBe(200);
    expect(res.body.words).toBeDefined();
    expect(res.body.words[0].term).toBe("HOLA");
  });

  test("PITR11 – sin indicar signo devuelve 400", async () => {
    await seedUser();
    await seedSigns();
    await seedGoals();

    const res = await request(app)
      .post("/api/v1/training/startFreeSpellingSession")
      .set("Authorization", `Bearer ${TEST_UID}`)
      .send({});

    expect(res.status).toBe(400);
    expect(res.body.message).toBeDefined();
  });

  test("PITR12 – signo inexistente devuelve 500", async () => {
    await seedUser();
    await seedSigns();
    await seedGoals();

    const res = await request(app)
      .post("/api/v1/training/startFreeSpellingSession")
      .set("Authorization", `Bearer ${TEST_UID}`)
      .send({ signId: "nonExistentSignId" });

    expect(res.status).toBe(500);
    expect(res.body.message).toBeDefined();
  });

  test("PITR13 – token inválido devuelve 401", async () => {
    const res = await request(app)
      .post("/api/v1/training/startFreeSpellingSession")
      .set("Authorization", "Bearer tokenInvalid")
      .send({ signId: TEST_SIGN_ID });

    expect(res.status).toBe(401);
    expect(res.body.error).toBeDefined();
  });
});

describe("Training – POST /api/v1/training/evaluateFree", () => {
  async function startFreeSession() {
    return request(app)
      .post("/api/v1/training/startFreeSpellingSession")
      .set("Authorization", `Bearer ${TEST_UID}`)
      .send({ signId: TEST_SIGN_ID });
  }

  test("PITR14 – letra correcta en libre devuelve 200 con correcto: true e índice actualizado", async () => {
    await seedUser();
    await seedSigns();
    await seedGoals();
    await startFreeSession();

    const res = await request(app)
      .post("/api/v1/training/evaluateFree")
      .set("Authorization", `Bearer ${TEST_UID}`)
      .send({ predictionToken: "H" }); // H is first letter of HOLA

    expect(res.status).toBe(200);
    expect(res.body.result.correct).toBe(true);
    expect(res.body.result.currentLetterIndex).toBe(1);
  });

  test("PITR15 – letra incorrecta en libre devuelve 200 con correcto: false e índice sin cambiar", async () => {
    await seedUser();
    await seedSigns();
    await seedGoals();
    await startFreeSession();

    const res = await request(app)
      .post("/api/v1/training/evaluateFree")
      .set("Authorization", `Bearer ${TEST_UID}`)
      .send({ predictionToken: "B" });

    expect(res.status).toBe(200);
    expect(res.body.result.correct).toBe(false);
    expect(res.body.result.currentLetterIndex).toBe(0);
  });

  test("PITR16 – sin token de predicción en libre devuelve 400", async () => {
    await seedUser();
    await seedSigns();
    await seedGoals();
    await startFreeSession();

    const res = await request(app)
      .post("/api/v1/training/evaluateFree")
      .set("Authorization", `Bearer ${TEST_UID}`)
      .send({});

    expect(res.status).toBe(400);
    expect(res.body.error).toBeDefined();
  });

  test("PITR17 – token Firebase inválido en libre devuelve 401", async () => {
    const res = await request(app)
      .post("/api/v1/training/evaluateFree")
      .set("Authorization", "Bearer tokenInvalid")
      .send({ predictionToken: "H" });

    expect(res.status).toBe(401);
    expect(res.body.error).toBeDefined();
  });
});
