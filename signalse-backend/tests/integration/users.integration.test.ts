import request from "supertest";
import { connectTestDB, clearTestDB, closeTestDB } from "./helpers/db";
import { createTestApp } from "./helpers/test-app";
import {
  TEST_UID,
  seedUser,
  seedSecondUser,
  seedRankingUsers,
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

// GET /api/v1/getAuthUserData
describe("Users – GET /api/v1/getAuthUserData", () => {
  test("PIU1 – usuario existente devuelve 200 con datos del perfil", async () => {
    await seedUser();

    const res = await request(app)
      .get("/api/v1/getAuthUserData")
      .set("Authorization", `Bearer ${TEST_UID}`);

    expect(res.status).toBe(200);
    expect(res.body.profile).toBeDefined();
    expect(res.body.profile.uid).toBe(TEST_UID);
  });

  test("PIU2 – token inválido devuelve 401", async () => {
    const res = await request(app)
      .get("/api/v1/getAuthUserData")
      .set("Authorization", "Bearer tokenInvalid");

    expect(res.status).toBe(401);
    expect(res.body.error).toBeDefined();
  });
});

// GET /api/v1/getAuthUserStats
describe("Users – GET /api/v1/getAuthUserStats", () => {
  test("PIU3 – usuario existente devuelve 200 con estadísticas", async () => {
    await seedUser();

    const res = await request(app)
      .get("/api/v1/getAuthUserStats")
      .set("Authorization", `Bearer ${TEST_UID}`);

    expect(res.status).toBe(200);
    expect(res.body.xp).toBeDefined();
    expect(res.body.totalPoints).toBeDefined();
  });

  test("PIU4 – token inválido devuelve 401", async () => {
    const res = await request(app)
      .get("/api/v1/getAuthUserStats")
      .set("Authorization", "Bearer tokenInvalid");

    expect(res.status).toBe(401);
    expect(res.body.error).toBeDefined();
  });
});

// POST /api/v1/updateUserAvatar
describe("Users – POST /api/v1/updateUserAvatar", () => {
  test("PIU5 – avatar válido devuelve 200 con confirmación", async () => {
    await seedUser();

    const res = await request(app)
      .post("/api/v1/updateUserAvatar")
      .set("Authorization", `Bearer ${TEST_UID}`)
      .send({ avatar: "avatar_1" });

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
  });

  test("PIU6 – sin indicar campo de avatar devuelve 400", async () => {
    await seedUser();

    const res = await request(app)
      .post("/api/v1/updateUserAvatar")
      .set("Authorization", `Bearer ${TEST_UID}`)
      .send({});

    expect(res.status).toBe(400);
    expect(res.body.message).toBeDefined();
  });

  test("PIU7 – token inválido devuelve 401", async () => {
    const res = await request(app)
      .post("/api/v1/updateUserAvatar")
      .set("Authorization", "Bearer tokenInvalid")
      .send({ avatar: "avatar_1" });

    expect(res.status).toBe(401);
    expect(res.body.error).toBeDefined();
  });
});

// POST /api/v1/updateUsername
describe("Users – POST /api/v1/updateUsername", () => {
  test("PIU8 – nombre de usuario válido y disponible devuelve 200", async () => {
    await seedUser();

    const res = await request(app)
      .post("/api/v1/updateUsername")
      .set("Authorization", `Bearer ${TEST_UID}`)
      .send({ username: "newUsername" });

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
  });

  test("PIU9 – nombre de usuario ya en uso devuelve 409", async () => {
    await seedUser();
    await seedSecondUser();

    const res = await request(app)
      .post("/api/v1/updateUsername")
      .set("Authorization", `Bearer ${TEST_UID}`)
      .send({ username: "existingUsername" });

    expect(res.status).toBe(409);
    expect(res.body.message).toBeDefined();
  });

  test("PIU10 – sin indicar valor de nombre de usuario devuelve 400", async () => {
    await seedUser();

    const res = await request(app)
      .post("/api/v1/updateUsername")
      .set("Authorization", `Bearer ${TEST_UID}`)
      .send({});

    expect(res.status).toBe(400);
    expect(res.body.message).toBeDefined();
  });

  test("PIU11 – token inválido devuelve 401", async () => {
    const res = await request(app)
      .post("/api/v1/updateUsername")
      .set("Authorization", "Bearer tokenInvalid")
      .send({ username: "newUsername" });

    expect(res.status).toBe(401);
    expect(res.body.error).toBeDefined();
  });
});

// POST /api/v1/updateUserNameSurname
describe("Users – POST /api/v1/updateUserNameSurname", () => {
  test("PIU12 – nombre y apellido válidos devuelve 200", async () => {
    await seedUser();

    const res = await request(app)
      .post("/api/v1/updateUserNameSurname")
      .set("Authorization", `Bearer ${TEST_UID}`)
      .send({ name: "NewName", surname: "NewSurname" });

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
  });

  test("PIU13 – nombre vacío devuelve 400", async () => {
    await seedUser();

    const res = await request(app)
      .post("/api/v1/updateUserNameSurname")
      .set("Authorization", `Bearer ${TEST_UID}`)
      .send({ name: "", surname: "NewSurname" });

    expect(res.status).toBe(400);
    expect(res.body.message).toBeDefined();
  });

  test("PIU14 – token inválido devuelve 401", async () => {
    const res = await request(app)
      .post("/api/v1/updateUserNameSurname")
      .set("Authorization", "Bearer tokenInvalid")
      .send({ name: "NewName", surname: "NewSurname" });

    expect(res.status).toBe(401);
    expect(res.body.error).toBeDefined();
  });
});

// POST /api/v1/updateUserPreferences
describe("Users – POST /api/v1/updateUserPreferences", () => {
  test("PIU15 – preferencias válidas devuelven 200", async () => {
    await seedUser();

    const res = await request(app)
      .post("/api/v1/updateUserPreferences")
      .set("Authorization", `Bearer ${TEST_UID}`)
      .send({ pushNotifications: true, soundEffects: false });

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
  });

  test("PIU16 – campo de preferencia ausente devuelve 400", async () => {
    await seedUser();

    const res = await request(app)
      .post("/api/v1/updateUserPreferences")
      .set("Authorization", `Bearer ${TEST_UID}`)
      .send({});

    expect(res.status).toBe(400);
    expect(res.body.message).toBeDefined();
  });

  test("PIU17 – token inválido devuelve 401", async () => {
    const res = await request(app)
      .post("/api/v1/updateUserPreferences")
      .set("Authorization", "Bearer tokenInvalid")
      .send({ pushNotifications: true, soundEffects: false });

    expect(res.status).toBe(401);
    expect(res.body.error).toBeDefined();
  });
});

// GET /api/v1/getRanking
describe("Users – GET /api/v1/getRanking", () => {
  test("PIU18 – criterio válido devuelve 200 con ranking ordenado según el criterio", async () => {
    // 10 personas usuarias con totalPoints distintos: 100, 200, ..., 1000
    await seedRankingUsers(10);

    const res = await request(app)
      .get("/api/v1/getRanking?criterium=totalPoints&count=10")
      .set("Authorization", `Bearer ${TEST_UID}`);

    expect(res.status).toBe(200);
    expect(res.body.users).toBeDefined();
    expect(res.body.users).toHaveLength(10);
    const points = res.body.users.map((u: any) => u.stats.totalPoints);
    expect(points).toEqual([1000, 900, 800, 700, 600, 500, 400, 300, 200, 100]);
  });

  test("PIU19 – sin criterio devuelve 200 con ranking ordenado por puntos totales por defecto", async () => {
    await seedRankingUsers(10);

    const res = await request(app)
      .get("/api/v1/getRanking?count=10")
      .set("Authorization", `Bearer ${TEST_UID}`);

    expect(res.status).toBe(200);
    expect(res.body.users).toBeDefined();
    expect(Array.isArray(res.body.users)).toBe(true);
    expect(res.body.users).toHaveLength(10);
    const points = res.body.users.map((u: any) => u.stats.totalPoints);
    expect(points).toEqual([1000, 900, 800, 700, 600, 500, 400, 300, 200, 100]);
  });
});
