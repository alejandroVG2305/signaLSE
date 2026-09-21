import request from "supertest";
import { connectTestDB, clearTestDB, closeTestDB } from "./helpers/db";
import { createTestApp } from "./helpers/test-app";
import {
  TEST_UID,
  TEST_SIGN_ID,
  HIGH_LEVEL_SIGN_ID,
  seedUser,
  seedSigns,
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

describe("Signs – GET /api/v1/getSigns", () => {
  test("PISE1 – sin filtros devuelve 200 con lista de signos y campo de acceso", async () => {
    await seedUser();
    await seedSigns();

    const res = await request(app)
      .get("/api/v1/getSigns")
      .set("Authorization", `Bearer ${TEST_UID}`);

    expect(res.status).toBe(200);
    expect(res.body.signs).toBeDefined();
    expect(Array.isArray(res.body.signs)).toBe(true);
    expect(res.body.signs.length).toBeGreaterThan(0);
    res.body.signs.forEach((s: any) => {
      expect(s.canUserAccess).toBe(s.minLevel <= 3);
    });
  });

  test("PISE2 – filtrar por categoría Alfabeto devuelve signos de esa categoría", async () => {
    await seedUser();
    await seedSigns();

    const res = await request(app)
      .get("/api/v1/getSigns?categories=Alfabeto")
      .set("Authorization", `Bearer ${TEST_UID}`);

    expect(res.status).toBe(200);
    expect(res.body.signs).toBeDefined();
    expect(res.body.signs.length).toBeGreaterThan(0);
    res.body.signs.forEach((s: any) => {
      expect(s.category).toBe("Alfabeto");
    });
  });

  test("PISE3 – filtrar por letra inicial A devuelve signos que empiezan por A", async () => {
    await seedUser();
    await seedSigns();

    const res = await request(app)
      .get("/api/v1/getSigns?initialLetters=A")
      .set("Authorization", `Bearer ${TEST_UID}`);

    expect(res.status).toBe(200);
    expect(res.body.signs).toBeDefined();
    expect(res.body.signs.length).toBeGreaterThan(0);
    res.body.signs.forEach((s: any) => {
      expect(s.term[0].toUpperCase()).toBe("A");
    });
  });

  test("PISE4 – token inválido devuelve 401", async () => {
    const res = await request(app)
      .get("/api/v1/getSigns")
      .set("Authorization", "Bearer tokenInvalid");

    expect(res.status).toBe(401);
    expect(res.body.error).toBeDefined();
  });
});

describe("Signs – GET /api/v1/getSignCategories", () => {
  test("PISE5 – obtener categorías devuelve 200 con lista de categorías", async () => {
    await seedUser();
    await seedSigns();

    const res = await request(app)
      .get("/api/v1/getSignCategories")
      .set("Authorization", `Bearer ${TEST_UID}`);

    expect(res.status).toBe(200);
    expect(res.body.categories).toBeDefined();
    expect(Array.isArray(res.body.categories)).toBe(true);
    expect(res.body.categories.length).toBeGreaterThan(0);
  });

  test("PISE6 – token inválido devuelve 401", async () => {
    const res = await request(app)
      .get("/api/v1/getSignCategories")
      .set("Authorization", "Bearer tokenInvalid");

    expect(res.status).toBe(401);
    expect(res.body.error).toBeDefined();
  });
});

describe("Signs – GET /api/v1/getRelatedSigns", () => {
  test("PISE7 – categoría válida devuelve 200 con signos accesibles de esa categoría", async () => {
    await seedUser();
    await seedSigns();

    const res = await request(app)
      .get("/api/v1/getRelatedSigns?category=Deportes")
      .set("Authorization", `Bearer ${TEST_UID}`);

    expect(res.status).toBe(200);
    expect(res.body.signs).toBeDefined();
    expect(Array.isArray(res.body.signs)).toBe(true);
    // sign-deportes-1 (minLevel 4) queda excluido por nivel insuficiente (usuario nivel 3);
    // solo sign-deportes-2 (minLevel 2) es accesible.
    expect(res.body.signs).toHaveLength(1);
    res.body.signs.forEach((s: any) => {
      expect(s.category).toBe("Deportes");
    });
  });

  test("PISE8 – sin indicar categoría devuelve 400", async () => {
    await seedUser();
    await seedSigns();

    const res = await request(app)
      .get("/api/v1/getRelatedSigns")
      .set("Authorization", `Bearer ${TEST_UID}`);

    expect(res.status).toBe(400);
    expect(res.body.message).toBeDefined();
  });

  test("PISE9 – token inválido devuelve 401", async () => {
    const res = await request(app)
      .get("/api/v1/getRelatedSigns?category=Saludos")
      .set("Authorization", "Bearer tokenInvalid");

    expect(res.status).toBe(401);
    expect(res.body.error).toBeDefined();
  });
});

describe("Signs – GET /api/v1/getRemainingSignsToLearn", () => {
  test("PISE10 – devuelve 200 con número de signos restantes", async () => {
    await seedUser();
    await seedSigns();

    const res = await request(app)
      .get("/api/v1/getRemainingSignsToLearn")
      .set("Authorization", `Bearer ${TEST_UID}`);

    expect(res.status).toBe(200);
    // 7 signos sembrados, usuario con 45 aprendidos → Math.max(0, 7-45) = 0
    expect(res.body.remainingSigns).toBe(0);
  });

  test("PISE11 – token inválido devuelve 401", async () => {
    const res = await request(app)
      .get("/api/v1/getRemainingSignsToLearn")
      .set("Authorization", "Bearer tokenInvalid");

    expect(res.status).toBe(401);
    expect(res.body.error).toBeDefined();
  });
});

describe("Signs – GET /api/v1/getSignDetails/:signId", () => {
  test("PISE12 – signo existente y accesible devuelve 200 con detalles del signo", async () => {
    await seedUser();
    await seedSigns();

    const res = await request(app)
      .get(`/api/v1/getSignDetails/${TEST_SIGN_ID}`)
      .set("Authorization", `Bearer ${TEST_UID}`);

    expect(res.status).toBe(200);
    expect(res.body.sign).toBeDefined();
    expect(res.body.sign.signId).toBe(TEST_SIGN_ID);
  });

  test("PISE13 – signo inexistente devuelve 404", async () => {
    await seedUser();
    await seedSigns();

    const res = await request(app)
      .get("/api/v1/getSignDetails/nonExistentSignId")
      .set("Authorization", `Bearer ${TEST_UID}`);

    expect(res.status).toBe(404);
    expect(res.body.message).toBeDefined();
  });

  test("PISE14 – signo con nivel requerido superior al del usuario devuelve 403", async () => {
    await seedUser();
    await seedSigns();

    const res = await request(app)
      .get(`/api/v1/getSignDetails/${HIGH_LEVEL_SIGN_ID}`)
      .set("Authorization", `Bearer ${TEST_UID}`);

    expect(res.status).toBe(403);
    expect(res.body.message).toBeDefined();
  });

  test("PISE15 – token inválido devuelve 401", async () => {
    const res = await request(app)
      .get(`/api/v1/getSignDetails/${TEST_SIGN_ID}`)
      .set("Authorization", "Bearer tokenInvalid");

    expect(res.status).toBe(401);
    expect(res.body.error).toBeDefined();
  });
});
