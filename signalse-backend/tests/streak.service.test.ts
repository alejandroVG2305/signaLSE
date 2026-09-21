import { streakService } from "../services/streak.service";
import { userRepository } from "../repositories/user.repository";
import { User } from "../domain/user";

jest.mock("../repositories/user.repository");

const mockedRepo = userRepository as jest.Mocked<typeof userRepository>;

const daysAgo = (n: number): Date => {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d;
};

const makeUser = (streak: number, lastDate: Date | null): User =>
  ({
    profile: { uid: "usr-001", email: "ana@correo.com", status: "ACTIVE" },
    preferences: { pushNotifications: true, soundEffects: true },
    stats: {
      totalPoints: 0,
      xp: { total: 0, toNextLvl: 100, level: 1, today: 0 },
      streak: { current: streak, lastChallengeDate: lastDate as Date },
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
  }) as User;

describe("StreakService – updateStreak", () => {
  beforeEach(() => {
    mockedRepo.updateStreakStats.mockResolvedValue(undefined as any);
  });

  test("PUSTREAK01 – primer desafío establece la racha en 1", async () => {
    const user = makeUser(0, null);
    await streakService.updateStreak(user);
    expect(mockedRepo.updateStreakStats).toHaveBeenCalledWith("usr-001", 1);
  });

  test("PUSTREAK02 – último desafío fue ayer incrementa la racha", async () => {
    const user = makeUser(5, daysAgo(1));
    await streakService.updateStreak(user);
    expect(mockedRepo.updateStreakStats).toHaveBeenCalledWith("usr-001", 6);
  });

  test("PUSTREAK03 – último desafío fue hoy mantiene la racha", async () => {
    const user = makeUser(5, new Date());
    await streakService.updateStreak(user);
    expect(mockedRepo.updateStreakStats).toHaveBeenCalledWith("usr-001", 5);
  });

  test("PUSTREAK04 – último desafío fue hace más de un día reinicia la racha a 1", async () => {
    const user = makeUser(5, daysAgo(3));
    await streakService.updateStreak(user);
    expect(mockedRepo.updateStreakStats).toHaveBeenCalledWith("usr-001", 1);
  });

  test("PUSTREAK05 – último desafío fue exactamente hace 2 días reinicia la racha a 1", async () => {
    const user = makeUser(10, daysAgo(2));
    await streakService.updateStreak(user);
    expect(mockedRepo.updateStreakStats).toHaveBeenCalledWith("usr-001", 1);
  });
});
