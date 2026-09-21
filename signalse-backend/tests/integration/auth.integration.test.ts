import request from "supertest";
import { connectTestDB, clearTestDB, closeTestDB } from "./helpers/db";
import { createTestApp } from "./helpers/test-app";
import { UserModel } from "../../models/user.model";
import { TEST_UID, TEST_EMAIL, TEST_USERNAME, seedUser } from "./helpers/seed";

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

const VALID_REGISTER_BODY = {
  name: "Test",
  surname: "User",
  username: TEST_USERNAME,
  email: TEST_EMAIL,
  password: "Password1",
  confirmPassword: "Password1",
  acceptTerms: true,
  acceptPrivacy: true,
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

describe("Auth – POST /api/v1/register", () => {
  test("PIA1 – registrar usuario con datos válidos devuelve 201", async () => {
    const res = await request(app)
      .post("/api/v1/register")
      .set("Authorization", `Bearer ${TEST_UID}`)
      .send(VALID_REGISTER_BODY);

    expect(res.status).toBe(201);
    expect(res.body.user).toBeDefined();
    expect(res.body.user.profile.uid).toBe(TEST_UID);
  });

  test("PIA2 – campos vacíos devuelve 400", async () => {
    const res = await request(app)
      .post("/api/v1/register")
      .set("Authorization", `Bearer ${TEST_UID}`)
      .send({ ...VALID_REGISTER_BODY, name: "" });

    expect(res.status).toBe(400);
    expect(res.body.message).toBeDefined();
  });

  test("PIA3 – sin aceptar términos devuelve 400", async () => {
    const res = await request(app)
      .post("/api/v1/register")
      .set("Authorization", `Bearer ${TEST_UID}`)
      .send({
        ...VALID_REGISTER_BODY,
        acceptTerms: false,
        acceptPrivacy: false,
      });

    expect(res.status).toBe(400);
    expect(res.body.message).toBeDefined();
  });

  test("PIA4 – contraseñas que no coinciden devuelve 400", async () => {
    const res = await request(app)
      .post("/api/v1/register")
      .set("Authorization", `Bearer ${TEST_UID}`)
      .send({ ...VALID_REGISTER_BODY, confirmPassword: "Password2" });

    expect(res.status).toBe(400);
    expect(res.body.message).toBeDefined();
  });

  test("PIA5 – contraseña débil devuelve 400", async () => {
    const res = await request(app)
      .post("/api/v1/register")
      .set("Authorization", `Bearer ${TEST_UID}`)
      .send({
        ...VALID_REGISTER_BODY,
        password: "weak",
        confirmPassword: "weak",
      });

    expect(res.status).toBe(400);
    expect(res.body.message).toBeDefined();
  });

  test("PIA6 – email ya existente devuelve 400", async () => {
    await seedUser();

    const res = await request(app)
      .post("/api/v1/register")
      .set("Authorization", `Bearer another-uid`)
      .send({ ...VALID_REGISTER_BODY, username: "newuser123" });

    expect(res.status).toBe(400);
    expect(res.body.message).toBeDefined();
  });

  test("PIA7 – nombre de usuario ya existente devuelve 400", async () => {
    await seedUser();

    const res = await request(app)
      .post("/api/v1/register")
      .set("Authorization", `Bearer another-uid`)
      .send({ ...VALID_REGISTER_BODY, email: "new@example.com" });

    expect(res.status).toBe(400);
    expect(res.body.message).toBeDefined();
  });

  test("PIA8 – token Firebase inválido devuelve 401", async () => {
    const res = await request(app)
      .post("/api/v1/register")
      .set("Authorization", "Bearer tokenInvalid")
      .send(VALID_REGISTER_BODY);

    expect(res.status).toBe(401);
    expect(res.body.error).toBeDefined();
  });
});

describe("Auth – POST /api/v1/login", () => {
  test("PIA9 – iniciar sesión con usuario ya registrado devuelve 200", async () => {
    await seedUser();

    const res = await request(app)
      .post("/api/v1/login")
      .set("Authorization", `Bearer ${TEST_UID}`)
      .send({ email: TEST_EMAIL, password: "Password1" });

    expect(res.status).toBe(200);
    expect(res.body.user).toBeDefined();
    expect(res.body.user.profile.uid).toBe(TEST_UID);
  });

  test("PIA10 – campos vacíos devuelve 400", async () => {
    const res = await request(app)
      .post("/api/v1/login")
      .set("Authorization", `Bearer ${TEST_UID}`)
      .send({ email: "", password: "" });

    expect(res.status).toBe(400);
    expect(res.body.message).toBeDefined();
  });

  test("PIA11 – token inválido devuelve 401", async () => {
    const res = await request(app)
      .post("/api/v1/login")
      .set("Authorization", "Bearer tokenInvalid")
      .send({ email: TEST_EMAIL, password: "Password1" });

    expect(res.status).toBe(401);
    expect(res.body.error).toBeDefined();
  });
});
