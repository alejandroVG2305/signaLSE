import { userService } from "../services/user.service";
import { userRepository } from "../repositories/user.repository";
import { AppError } from "../errors/app-error";

jest.mock("../repositories/user.repository");

const mockedRepo = userRepository as jest.Mocked<typeof userRepository>;

const makeUser = (uid = "usr-001", overrides: Record<string, any> = {}) => ({
  profile: {
    uid,
    name: "Ana",
    surname: "García",
    username: "usuario123",
    email: "ana@correo.com",
    status: "ACTIVE",
  },
  preferences: { pushNotifications: true, soundEffects: true },
  stats: {
    totalPoints: 100,
    xp: { total: 50, toNextLvl: 100, level: 5, today: 0 },
    streak: { current: 3, lastChallengeDate: new Date() },
    dailyStatsDate: new Date(),
    challengesToday: 0,
    signsLearnedToday: 0,
    totalSignsLearned: 45,
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
  ...overrides,
});

describe("UserService – getUserByUID", () => {
  test("PUUSER01 – obtener usuario existente devuelve el objeto", async () => {
    const user = makeUser();
    mockedRepo.findUserByUID.mockResolvedValue(user as any);
    const result = await userService.getUserByUID("usr-001");
    expect(result.profile.uid).toBe("usr-001");
  });

  test("PUUSER02 – UID inexistente lanza error de usuario no encontrado", async () => {
    mockedRepo.findUserByUID.mockResolvedValue(null);
    await expect(userService.getUserByUID("uid-inexistente")).rejects.toThrow(
      "errors.userNotFound",
    );
  });
});

describe("UserService – getXpLevelByUID", () => {
  test("PUUSER03 – obtener nivel XP de usuario existente devuelve el nivel", async () => {
    mockedRepo.findUserByUID.mockResolvedValue(makeUser() as any);
    const level = await userService.getXpLevelByUID("usr-001");
    expect(level).toBe(5);
  });

  test("PUUSER04 – UID inexistente lanza error de usuario no encontrado", async () => {
    mockedRepo.findUserByUID.mockResolvedValue(null);
    await expect(
      userService.getXpLevelByUID("uid-inexistente"),
    ).rejects.toThrow("errors.userNotFound");
  });
});

describe("UserService – updateAvatar", () => {
  test("PUUSER05 – actualizar avatar con valor válido", async () => {
    mockedRepo.findUserByUID.mockResolvedValue(makeUser() as any);
    mockedRepo.updateAvatarByUID.mockResolvedValue(true);
    await expect(
      userService.updateAvatar("usr-001", "AVATAR_003"),
    ).resolves.toBeUndefined();
    expect(mockedRepo.updateAvatarByUID).toHaveBeenCalledWith(
      "usr-001",
      "AVATAR_003",
    );
  });

  test("PUUSER06 – actualizar avatar con campo vacío lanza error", async () => {
    await expect(userService.updateAvatar("usr-001", "")).rejects.toThrow(
      AppError,
    );
  });
});

describe("UserService – updateUsername", () => {
  test("PUUSER07 – actualizar nombre de usuario con valor válido y disponible", async () => {
    mockedRepo.findUserByUID.mockResolvedValue(makeUser() as any);
    mockedRepo.findUserByUsername.mockResolvedValue(null);
    mockedRepo.updateUsernameByUID.mockResolvedValue(true);
    await expect(
      userService.updateUsername("usr-001", "usuario123"),
    ).resolves.toBeUndefined();
  });

  test("PUUSER08 – actualizar nombre de usuario vacío lanza error", async () => {
    await expect(userService.updateUsername("usr-001", "")).rejects.toThrow(
      AppError,
    );
  });

  test("PUUSER09 – nombre de usuario ya en uso por otra cuenta lanza error 409", async () => {
    mockedRepo.findUserByUID.mockResolvedValue(makeUser("usr-001") as any);
    mockedRepo.findUserByUsername.mockResolvedValue(makeUser("usr-002") as any);
    await expect(
      userService.updateUsername("usr-001", "usuario456"),
    ).rejects.toThrow(AppError);
  });

  test("PUUSER10 – actualizar con el mismo nombre de usuario propio no lanza error", async () => {
    const user = makeUser("usr-001");
    mockedRepo.findUserByUID.mockResolvedValue(user as any);
    mockedRepo.findUserByUsername.mockResolvedValue(user as any);
    mockedRepo.updateUsernameByUID.mockResolvedValue(true);
    await expect(
      userService.updateUsername("usr-001", "usuario123"),
    ).resolves.toBeUndefined();
  });
});

describe("UserService – updateProfileName", () => {
  test("PUUSER11 – actualizar nombre y apellido con valores válidos", async () => {
    mockedRepo.findUserByUID.mockResolvedValue(makeUser() as any);
    mockedRepo.updateProfileNameByUID.mockResolvedValue(true);
    await expect(
      userService.updateProfileName("usr-001", "Carlos", "García"),
    ).resolves.toBeUndefined();
  });

  test("PUUSER12 – nombre vacío lanza error de campo requerido", async () => {
    await expect(
      userService.updateProfileName("usr-001", "", "García"),
    ).rejects.toThrow(AppError);
  });

  test("PUUSER13 – apellido vacío lanza error de campo requerido", async () => {
    await expect(
      userService.updateProfileName("usr-001", "Carlos", ""),
    ).rejects.toThrow(AppError);
  });
});

describe("UserService – updatePreferences", () => {
  test("PUUSER14 – actualizar preferencias con valores válidos", async () => {
    mockedRepo.findUserByUID.mockResolvedValue(makeUser() as any);
    mockedRepo.updatePreferencesByUID.mockResolvedValue(true);
    await expect(
      userService.updatePreferences("usr-001", {
        pushNotifications: true, // TODO: eliminate push notifications
        soundEffects: false,
      }),
    ).resolves.toBeUndefined();
  });

  test("PUUSER15 – efectos de sonido undefined lanza error de campo requerido", async () => {
    await expect(
      userService.updatePreferences("usr-001", {
        pushNotifications: true,
        soundEffects: undefined as any,
      }),
    ).rejects.toThrow(AppError);
  });
});

describe("UserService – getRanking", () => {
  const rankingResult = [makeUser(), makeUser("usr-002")] as any[];

  beforeEach(() => {
    mockedRepo.getRanking.mockResolvedValue(rankingResult);
  });

  test("PUUSER16 – ranking sin criterio aplica totalPoints por defecto", async () => {
    await userService.getRanking(undefined, 15);
    expect(mockedRepo.getRanking).toHaveBeenCalledWith(
      expect.objectContaining({ criterium: "totalPoints", limit: 15 }),
    );
  });

  test("PUUSER17 – ranking por XP", async () => {
    await userService.getRanking("xpLevel", 15);
    expect(mockedRepo.getRanking).toHaveBeenCalledWith(
      expect.objectContaining({ criterium: "xpLevel", limit: 15 }),
    );
  });

  test("PUUSER18 – ranking por porcentaje de aciertos", async () => {
    await userService.getRanking("hitsPercentage", 15);
    expect(mockedRepo.getRanking).toHaveBeenCalledWith(
      expect.objectContaining({ criterium: "hitsPercentage", limit: 15 }),
    );
  });

  test("PUUSER19 – ranking por racha", async () => {
    await userService.getRanking("streak", 15);
    expect(mockedRepo.getRanking).toHaveBeenCalledWith(
      expect.objectContaining({ criterium: "streak", limit: 15 }),
    );
  });

  test("PUUSER20 – límite no numérico aplica límite por defecto de 15", async () => {
    await userService.getRanking("totalPoints", NaN);
    expect(mockedRepo.getRanking).toHaveBeenCalledWith(
      expect.objectContaining({ criterium: "totalPoints", limit: 15 }),
    );
  });
});
