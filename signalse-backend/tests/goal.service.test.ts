import { goalService } from "../services/goal.service";
import { goalRepository } from "../repositories/goal.repository";
import { userRepository } from "../repositories/user.repository";
import { userService } from "../services/user.service";
import { xpService } from "../services/xp.service";

jest.mock("../repositories/goal.repository");
jest.mock("../repositories/user.repository");
jest.mock("../services/user.service");
jest.mock("../services/xp.service");

const mockedGoalRepo = goalRepository as jest.Mocked<typeof goalRepository>;
const mockedUserRepo = userRepository as jest.Mocked<typeof userRepository>;
const mockedUserService = userService as jest.Mocked<typeof userService>;
const mockedXpService = xpService as jest.Mocked<typeof xpService>;

const goals = [
  { key: "Desafío diario", target: 1, statKey: "challengesToday" },
  { key: "Signos nuevos", target: 10, statKey: "signsLearnedToday" },
  { key: "Entrenamiento", target: 5, statKey: "trainingToday" },
  { key: "XP diario", target: 500, statKey: "xp.today" },
];

const makeUser = (statsOverrides: Record<string, any> = {}) => ({
  profile: { uid: "usr-001", email: "ana@correo.com", status: "ACTIVE" },
  preferences: { pushNotifications: true, soundEffects: true },
  stats: {
    totalPoints: 0,
    xp: { total: 0, toNextLvl: 100, level: 1, today: 0 },
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
    ...statsOverrides,
  },
});

describe("GoalService – checkAndAwardGoalXp", () => {
  beforeEach(() => {
    mockedGoalRepo.findAll.mockResolvedValue(goals as any);
    mockedUserRepo.addGoalAwardedKey.mockResolvedValue(undefined as any);
    mockedXpService.addXp.mockResolvedValue(undefined);
  });

  test("PUGOAL01 – objetivo recién completado otorga 50 XP y registra clave", async () => {
    mockedUserService.getUserByUID.mockResolvedValue(
      makeUser({ challengesToday: 1 }) as any,
    );
    await goalService.checkAndAwardGoalXp("usr-001");
    expect(mockedXpService.addXp).toHaveBeenCalledWith("usr-001", 50);
    expect(mockedUserRepo.addGoalAwardedKey).toHaveBeenCalledWith(
      "usr-001",
      "Desafío diario",
    );
  });

  test("PUGOAL02 – todos los objetivos ya premiados hoy: no se otorga XP", async () => {
    mockedUserService.getUserByUID.mockResolvedValue(
      makeUser({
        challengesToday: 1,
        signsLearnedToday: 10,
        trainingToday: 5,
        xp: { total: 0, toNextLvl: 100, level: 1, today: 500 },
        goalsAwardedToday: [
          "Desafío diario",
          "Signos nuevos",
          "Entrenamiento",
          "XP diario",
        ],
      }) as any,
    );
    await goalService.checkAndAwardGoalXp("usr-001");
    expect(mockedXpService.addXp).not.toHaveBeenCalled();
    expect(mockedUserRepo.addGoalAwardedKey).not.toHaveBeenCalled();
  });

  test("PUGOAL03 – usuario no alcanza ningún objetivo: no se otorga XP", async () => {
    mockedUserService.getUserByUID.mockResolvedValue(
      makeUser({
        challengesToday: 0,
        signsLearnedToday: 3,
        trainingToday: 1,
        xp: { total: 0, toNextLvl: 100, level: 1, today: 100 },
      }) as any,
    );
    await goalService.checkAndAwardGoalXp("usr-001");
    expect(mockedXpService.addXp).not.toHaveBeenCalled();
    expect(mockedUserRepo.addGoalAwardedKey).not.toHaveBeenCalled();
  });

  test("PUGOAL04 – múltiples objetivos cumplidos simultáneamente: 100 XP y registra ambos", async () => {
    mockedUserService.getUserByUID.mockResolvedValue(
      makeUser({ signsLearnedToday: 10, trainingToday: 5 }) as any,
    );
    await goalService.checkAndAwardGoalXp("usr-001");
    expect(mockedXpService.addXp).toHaveBeenCalledWith("usr-001", 100);
    expect(mockedUserRepo.addGoalAwardedKey).toHaveBeenCalledTimes(2);
    expect(mockedUserRepo.addGoalAwardedKey).toHaveBeenCalledWith(
      "usr-001",
      "Signos nuevos",
    );
    expect(mockedUserRepo.addGoalAwardedKey).toHaveBeenCalledWith(
      "usr-001",
      "Entrenamiento",
    );
  });

  test("PUGOAL05 – usuario inexistente lanza error", async () => {
    mockedUserService.getUserByUID.mockRejectedValue(
      new Error("errors.userNotFound"),
    );
    await expect(
      goalService.checkAndAwardGoalXp("uid-inexistente"),
    ).rejects.toThrow("errors.userNotFound");
  });

  test("PUGOAL06 – objetivo XP diario recién cumplido otorga 50 XP", async () => {
    mockedUserService.getUserByUID.mockResolvedValue(
      makeUser({
        xp: { total: 0, toNextLvl: 100, level: 1, today: 500 },
      }) as any,
    );
    await goalService.checkAndAwardGoalXp("usr-001");
    expect(mockedXpService.addXp).toHaveBeenCalledWith("usr-001", 50);
    expect(mockedUserRepo.addGoalAwardedKey).toHaveBeenCalledWith(
      "usr-001",
      "XP diario",
    );
  });
});

describe("GoalService – getDailyGoals", () => {
  test("PUGOAL07 – obtener objetivos sin ninguno completado", async () => {
    mockedUserService.getUserByUID.mockResolvedValue(
      makeUser({
        challengesToday: 0,
        signsLearnedToday: 3,
        trainingToday: 1,
        xp: { total: 0, toNextLvl: 100, level: 1, today: 100 },
      }) as any,
    );
    mockedGoalRepo.findAll.mockResolvedValue(goals as any);
    const result = await goalService.getDailyGoals("usr-001");
    expect(result).toHaveLength(4);
    result.forEach((g) => expect(g.completed).toBe(false));
    expect(result.find((g) => g.goal.key === "Desafío diario")?.current).toBe(
      0,
    );
    expect(result.find((g) => g.goal.key === "Signos nuevos")?.current).toBe(
      3,
    );
    expect(result.find((g) => g.goal.key === "Entrenamiento")?.current).toBe(
      1,
    );
    expect(result.find((g) => g.goal.key === "XP diario")?.current).toBe(100);
  });

  test("PUGOAL08 – obtener objetivos con todos completados", async () => {
    mockedUserService.getUserByUID.mockResolvedValue(
      makeUser({
        challengesToday: 1,
        signsLearnedToday: 10,
        trainingToday: 5,
        xp: { total: 0, toNextLvl: 100, level: 1, today: 500 },
      }) as any,
    );
    mockedGoalRepo.findAll.mockResolvedValue(goals as any);
    const result = await goalService.getDailyGoals("usr-001");
    expect(result).toHaveLength(4);
    result.forEach((g) => expect(g.completed).toBe(true));
    expect(result.find((g) => g.goal.key === "Desafío diario")?.current).toBe(
      1,
    );
    expect(result.find((g) => g.goal.key === "Signos nuevos")?.current).toBe(
      10,
    );
    expect(result.find((g) => g.goal.key === "Entrenamiento")?.current).toBe(
      5,
    );
    expect(result.find((g) => g.goal.key === "XP diario")?.current).toBe(500);
  });

  test("PUGOAL09 – objetivos parcialmente completados", async () => {
    mockedUserService.getUserByUID.mockResolvedValue(
      makeUser({
        challengesToday: 1,
        signsLearnedToday: 3,
        trainingToday: 5,
        xp: { total: 0, toNextLvl: 100, level: 1, today: 100 },
      }) as any,
    );
    mockedGoalRepo.findAll.mockResolvedValue(goals as any);
    const result = await goalService.getDailyGoals("usr-001");
    const completed = result.filter((g) => g.completed).map((g) => g.goal.key);
    const notCompleted = result
      .filter((g) => !g.completed)
      .map((g) => g.goal.key);
    expect(completed).toContain("Desafío diario");
    expect(completed).toContain("Entrenamiento");
    expect(notCompleted).toContain("Signos nuevos");
    expect(notCompleted).toContain("XP diario");
  });

  test("PUGOAL10 – usuario inexistente lanza error", async () => {
    mockedUserService.getUserByUID.mockRejectedValue(
      new Error("errors.userNotFound"),
    );
    await expect(goalService.getDailyGoals("uid-inexistente")).rejects.toThrow(
      "errors.userNotFound",
    );
  });

  test("PUGOAL11 – sin objetivos definidos devuelve lista vacía", async () => {
    mockedUserService.getUserByUID.mockResolvedValue(makeUser() as any);
    mockedGoalRepo.findAll.mockResolvedValue([]);
    const result = await goalService.getDailyGoals("usr-001");
    expect(result).toHaveLength(0);
  });
});
