import { xpService } from "../services/xp.service";
import { userRepository } from "../repositories/user.repository";
import { signRepository } from "../repositories/sign.repository";

jest.mock("../repositories/user.repository");
jest.mock("../repositories/sign.repository");

const mockedUserRepo = userRepository as jest.Mocked<typeof userRepository>;
const mockedSignRepo = signRepository as jest.Mocked<typeof signRepository>;

const makeUser = (total: number, level: number, today: number) => ({
  profile: { uid: "usr-001", email: "ana@correo.com", status: "ACTIVE" },
  preferences: { pushNotifications: true, soundEffects: true },
  stats: {
    totalPoints: 0,
    xp: { total, toNextLvl: 100, level, today },
    streak: { current: 0, lastChallengeDate: new Date() },
    dailyStatsDate: new Date(),
    challengesToday: 0,
    signsLearnedToday: 0,
    totalSignsLearned: 0,
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

beforeEach(() => {
  mockedUserRepo.updateXpStats.mockResolvedValue(undefined as any);
  mockedUserRepo.incrementSignsLearned.mockResolvedValue(undefined as any);
  mockedSignRepo.countSignsByMinLevel.mockResolvedValue(0);
});

describe("XpService – addXp", () => {
  test("PUXP01 – añadir XP sin cambio de nivel actualiza total y XP ganado hoy", async () => {
    mockedUserRepo.findUserByUID.mockResolvedValue(makeUser(50, 1, 0) as any);

    await xpService.addXp("usr-001", 30);

    expect(mockedUserRepo.updateXpStats).toHaveBeenCalledWith(
      "usr-001",
      80,
      100,
      1,
      30,
    );
    expect(mockedSignRepo.countSignsByMinLevel).not.toHaveBeenCalled();
  });

  test("PUXP02 – añadir XP que provoca subida de nivel actualiza nivel y signos disponibles", async () => {
    mockedUserRepo.findUserByUID.mockResolvedValue(makeUser(90, 1, 0) as any);
    mockedSignRepo.countSignsByMinLevel.mockResolvedValue(3);

    await xpService.addXp("usr-001", 20); // 90 + 20 = 110 >= 100 → nivel 2

    expect(mockedUserRepo.updateXpStats).toHaveBeenCalledWith(
      "usr-001",
      110,
      expect.any(Number),
      2,
      20,
    );
    expect(mockedUserRepo.incrementSignsLearned).toHaveBeenCalledWith(
      "usr-001",
      3,
    );
  });

  test("PUXP03 – añadir XP que provoca múltiples subidas de nivel consecutivas", async () => {
    mockedUserRepo.findUserByUID.mockResolvedValue(makeUser(90, 1, 0) as any);
    mockedSignRepo.countSignsByMinLevel.mockResolvedValue(5);

    await xpService.addXp("usr-001", 500); // 590 total >> nivel 1 (100), 2 (120), 3 (144)...

    const call = mockedUserRepo.updateXpStats.mock.calls[0];
    expect(call[3]).toBeGreaterThan(2); // nivel final > 2
    expect(mockedUserRepo.incrementSignsLearned).toHaveBeenCalledWith(
      "usr-001",
      5,
    );
  });

  test("PUXP04 – subida de nivel sin signos nuevos desbloqueados no incrementa signos", async () => {
    mockedUserRepo.findUserByUID.mockResolvedValue(makeUser(90, 1, 0) as any);
    mockedSignRepo.countSignsByMinLevel.mockResolvedValue(0);

    await xpService.addXp("usr-001", 20);

    expect(mockedUserRepo.updateXpStats).toHaveBeenCalledWith(
      "usr-001",
      110,
      expect.any(Number),
      2,
      20,
    );
    expect(mockedUserRepo.incrementSignsLearned).not.toHaveBeenCalled();
  });

  test("PUXP05 – usuario inexistente lanza error", async () => {
    mockedUserRepo.findUserByUID.mockResolvedValue(null);

    await expect(xpService.addXp("uid-inexistente", 50)).rejects.toThrow(
      "User not found",
    );
  });

  test("PUXP06 – añadir XP acumula correctamente el XP ganado hoy", async () => {
    mockedUserRepo.findUserByUID.mockResolvedValue(makeUser(0, 1, 200) as any);

    await xpService.addXp("usr-001", 25);

    expect(mockedUserRepo.updateXpStats).toHaveBeenCalledWith(
      "usr-001",
      25,
      100,
      1,
      225, // today: 200 + 25
    );
  });
});
