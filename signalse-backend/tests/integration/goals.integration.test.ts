import request from "supertest";
import { connectTestDB, clearTestDB, closeTestDB } from "./helpers/db";
import { createTestApp } from "./helpers/test-app";
import { TEST_UID, seedUser, seedGoals } from "./helpers/seed";

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

describe("Goals – GET /api/v1/getAuthUserDailyGoals", () => {
  test("PIMT1 – metas con progreso parcial devuelve 200 con lista de metas no completadas", async () => {
    await seedUser();
    await seedGoals();

    const res = await request(app)
      .get("/api/v1/getAuthUserDailyGoals")
      .set("Authorization", `Bearer ${TEST_UID}`);

    expect(res.status).toBe(200);
    expect(res.body.goals).toBeDefined();
    expect(Array.isArray(res.body.goals)).toBe(true);
    expect(res.body.goals.length).toBeGreaterThan(0);
    res.body.goals.forEach((goal: any) => {
      expect(goal.completed).toBe(false);
      expect(goal.current).toBe(0);
    });
  });

  test("PIMT2 – usuario con estadísticas que superan objetivos devuelve metas completadas", async () => {
    await seedGoals();
    await seedUser({
      stats: {
        totalPoints: 0,
        xp: { total: 200, level: 3, toNextLvl: 100, today: 600 },
        streak: { current: 0 },
        challengesToday: 1,
        trainingToday: 5,
        signsLearnedToday: 10,
        totalSignsLearned: 0,
        challenges: {
          totalCompleted: 0,
          totalHits: 0,
          totalMisses: 0,
          hitsPercentage: 0,
          missPercentage: 0,
        },
        trainings: { totalCompleted: 0 },
        goalsAwardedToday: [],
      },
    });

    const res = await request(app)
      .get("/api/v1/getAuthUserDailyGoals")
      .set("Authorization", `Bearer ${TEST_UID}`);

    expect(res.status).toBe(200);
    expect(res.body.goals).toBeDefined();
    const completedGoals = res.body.goals.filter((g: any) => g.completed);
    expect(completedGoals.length).toBe(res.body.goals.length);
  });

  test("PIMT3 – token inválido devuelve 401", async () => {
    const res = await request(app)
      .get("/api/v1/getAuthUserDailyGoals")
      .set("Authorization", "Bearer tokenInvalid");

    expect(res.status).toBe(401);
    expect(res.body.error).toBeDefined();
  });
});
