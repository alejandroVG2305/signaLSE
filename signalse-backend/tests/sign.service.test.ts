import { signService } from "../services/sign.service";
import { signRepository } from "../repositories/sign.repository";
import { userService } from "../services/user.service";
import { AppError } from "../errors/app-error";
import { toSignedSign } from "../domain/sign";

jest.mock("../repositories/sign.repository");
jest.mock("../services/user.service");

const mockedSignRepo = signRepository as jest.Mocked<typeof signRepository>;
const mockedUserService = userService as jest.Mocked<typeof userService>;

const makeSign = (id: string, minLevel: number, category = "Colores") => ({
  signId: id,
  term: "HOLA",
  category,
  complexity: "easy",
  minLevel,
  videoUrl: `https://example.com/${id}.mp4`,
  meaning: "Saludo",
  keySteps: [],
  supportsAITraining: true,
  createdAt: new Date(),
});

describe("SignService – getSigns", () => {
  test("PUSIGN01 – obtener signos sin filtros calcula accesibilidad correctamente", async () => {
    const signs = [makeSign("s1", 1), makeSign("s2", 3), makeSign("s3", 5)];
    mockedSignRepo.findSigns.mockResolvedValue(signs as any);
    mockedUserService.getXpLevelByUID.mockResolvedValue(3);

    const result = await signService.getSigns("usr-001");

    expect(result).toHaveLength(3);
    expect(result.find((s) => s.signId === "s1")?.canUserAccess).toBe(true);
    expect(result.find((s) => s.signId === "s2")?.canUserAccess).toBe(true);
    expect(result.find((s) => s.signId === "s3")?.canUserAccess).toBe(false);
  });

  test("PUSIGN02 – obtener signos filtrados por categoría", async () => {
    const signs = [
      makeSign("s1", 1, "Colores"),
      makeSign("s2", 2, "Colores"),
      makeSign("s3", 5, "Colores"),
    ];
    mockedSignRepo.findSigns.mockResolvedValue(signs as any);
    mockedUserService.getXpLevelByUID.mockResolvedValue(2);

    const result = await signService.getSigns("usr-001", ["Colores"]);

    expect(mockedSignRepo.findSigns).toHaveBeenCalledWith(
      expect.objectContaining({ categories: ["Colores"] }),
    );
    expect(result).toHaveLength(3);
    expect(result.find((s) => s.signId === "s1")?.canUserAccess).toBe(true);
    expect(result.find((s) => s.signId === "s2")?.canUserAccess).toBe(true);
    expect(result.find((s) => s.signId === "s3")?.canUserAccess).toBe(false);
  });

  test("PUSIGN03 – obtener signos filtrados por letra inicial", async () => {
    const signs = [makeSign("s1", 1), makeSign("s2", 5)];
    mockedSignRepo.findSigns.mockResolvedValue(signs as any);
    mockedUserService.getXpLevelByUID.mockResolvedValue(2);

    const result = await signService.getSigns("usr-001", undefined, ["A"]);

    expect(mockedSignRepo.findSigns).toHaveBeenCalledWith(
      expect.objectContaining({ initialLetters: ["A"] }),
    );
    expect(result).toHaveLength(2);
    expect(result.find((s) => s.signId === "s1")?.canUserAccess).toBe(true);
    expect(result.find((s) => s.signId === "s2")?.canUserAccess).toBe(false);
  });

  test("PUSIGN04 – obtener signos con categoría y letra inicial combinadas", async () => {
    mockedSignRepo.findSigns.mockResolvedValue([
      makeSign("s1", 1, "Familia"),
      makeSign("s2", 4, "Familia"),
    ] as any);
    mockedUserService.getXpLevelByUID.mockResolvedValue(2);

    const result = await signService.getSigns("usr-001", ["Familia"], ["M"]);

    expect(mockedSignRepo.findSigns).toHaveBeenCalledWith(
      expect.objectContaining({
        categories: ["Familia"],
        initialLetters: ["M"],
      }),
    );
    expect(result.find((s) => s.signId === "s1")?.canUserAccess).toBe(true);
    expect(result.find((s) => s.signId === "s2")?.canUserAccess).toBe(false);
  });

  test("PUSIGN05 – usuario inexistente lanza error", async () => {
    mockedUserService.getXpLevelByUID.mockRejectedValue(
      new Error("errors.userNotFound"),
    );
    await expect(signService.getSigns("uid-inexistente")).rejects.toThrow(
      "errors.userNotFound",
    );
  });
});

describe("SignService – getSignsByCategory", () => {
  test("PUSIGN06 – obtener signos de categoría válida con nivel suficiente solo devuelve accesibles", async () => {
    const signs = [
      makeSign("s1", 1, "Deportes"),
      makeSign("s2", 3, "Deportes"),
    ];
    mockedSignRepo.findSigns.mockResolvedValue(signs as any);
    mockedUserService.getXpLevelByUID.mockResolvedValue(3);

    const result = await signService.getSignsByCategory("usr-001", "Deportes");

    expect(result.every((s) => s.canUserAccess)).toBe(true);
    expect(result).toHaveLength(2);
  });

  test("PUSIGN07 – categoría vacía lanza error de campo requerido", async () => {
    await expect(
      signService.getSignsByCategory("usr-001", ""),
    ).rejects.toThrow(AppError);
    await expect(
      signService.getSignsByCategory("usr-001", ""),
    ).rejects.toMatchObject({ statusCode: 400 });
  });

  test("PUSIGN08 – nivel insuficiente devuelve lista vacía para esa categoría", async () => {
    const signs = [
      makeSign("s1", 3, "Deportes"),
      makeSign("s2", 3, "Deportes"),
    ];
    mockedSignRepo.findSigns.mockResolvedValue(signs as any);
    mockedUserService.getXpLevelByUID.mockResolvedValue(1);

    const result = await signService.getSignsByCategory("usr-001", "Deportes");

    expect(result).toHaveLength(0);
  });
});

describe("SignService – getCategories", () => {
  test("PUSIGN09 – obtener listado de categorías disponibles", async () => {
    mockedSignRepo.findCategories.mockResolvedValue([
      "Colores",
      "Familia",
      "Deportes",
    ]);
    const result = await signService.getCategories();
    expect(result).toEqual(["Colores", "Familia", "Deportes"]);
  });
});

describe("SignService – getRemainingSignsToLearn", () => {
  const makeFullUser = (learned: number) => ({
    profile: { uid: "usr-001", email: "a@b.com", status: "ACTIVE" },
    preferences: { pushNotifications: true, soundEffects: true },
    stats: {
      totalPoints: 0,
      xp: { total: 0, toNextLvl: 100, level: 1, today: 0 },
      streak: { current: 0, lastChallengeDate: new Date() },
      dailyStatsDate: new Date(),
      challengesToday: 0,
      signsLearnedToday: 0,
      totalSignsLearned: learned,
      trainingToday: 0,
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

  test("PUSIGN10 – obtener signos restantes por aprender devuelve diferencia correcta", async () => {
    mockedSignRepo.countTotalSigns.mockResolvedValue(120);
    mockedUserService.getUserByUID.mockResolvedValue(makeFullUser(45) as any);
    const result = await signService.getRemainingSignsToLearn("usr-001");
    expect(result).toBe(75);
  });

  test("PUSIGN11 – usuario aprendió todos los signos devuelve 0", async () => {
    mockedSignRepo.countTotalSigns.mockResolvedValue(120);
    mockedUserService.getUserByUID.mockResolvedValue(makeFullUser(120) as any);
    const result = await signService.getRemainingSignsToLearn("usr-001");
    expect(result).toBe(0);
  });
});

describe("SignService – getSignDetails", () => {
  test("PUSIGN12 – obtener detalle de signo accesible devuelve el signo completo", async () => {
    const sign = makeSign("sign-001", 2);
    mockedSignRepo.findSignById.mockResolvedValue(sign as any);
    mockedUserService.getXpLevelByUID.mockResolvedValue(3);

    const result = await signService.getSignDetails("sign-001", "usr-001");

    expect(result).toEqual(toSignedSign(sign));
  });

  test("PUSIGN13 – identificador de signo inexistente lanza error 404", async () => {
    mockedSignRepo.findSignById.mockResolvedValue(null);

    await expect(
      signService.getSignDetails("sign-inexistente", "usr-001"),
    ).rejects.toThrow(AppError);
    await expect(
      signService.getSignDetails("sign-inexistente", "usr-001"),
    ).rejects.toMatchObject({
      statusCode: 404,
    });
  });

  test("PUSIGN14 – nivel mínimo del signo supera nivel del usuario lanza error 403", async () => {
    mockedSignRepo.findSignById.mockResolvedValue(
      makeSign("sign-001", 5) as any,
    );
    mockedUserService.getXpLevelByUID.mockResolvedValue(1);

    await expect(
      signService.getSignDetails("sign-001", "usr-001"),
    ).rejects.toThrow(AppError);
    await expect(
      signService.getSignDetails("sign-001", "usr-001"),
    ).rejects.toMatchObject({
      statusCode: 403,
    });
  });
});
