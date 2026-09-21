import { challengeService } from "../services/challenge.service";
import { questionRepository } from "../repositories/question.repository";
import { userRepository } from "../repositories/user.repository";
import { xpService } from "../services/xp.service";
import { goalService } from "../services/goal.service";
import { streakService } from "../services/streak.service";
import { ChallengeConfig } from "../domain/challenge-session";

jest.mock("../repositories/question.repository");
jest.mock("../repositories/user.repository");
jest.mock("../services/xp.service");
jest.mock("../services/goal.service");
jest.mock("../services/streak.service");

const mockedQuestionRepo = questionRepository as jest.Mocked<
  typeof questionRepository
>;
const mockedUserRepo = userRepository as jest.Mocked<typeof userRepository>;
const mockedXpService = xpService as jest.Mocked<typeof xpService>;
const mockedGoalService = goalService as jest.Mocked<typeof goalService>;
const mockedStreakService = streakService as jest.Mocked<typeof streakService>;

const makeUser = (overrides: Record<string, any> = {}) => ({
  profile: { uid: "usr-001", email: "ana@correo.com", status: "ACTIVE" },
  preferences: { pushNotifications: true, soundEffects: true },
  stats: {
    totalPoints: 0,
    xp: { total: 0, toNextLvl: 100, level: 3, today: 0 },
    streak: { current: 0, lastChallengeDate: new Date() },
    dailyStatsDate: new Date(),
    challengesToday: 0,
    signsLearnedToday: 0,
    totalSignsLearned: 0,
    trainingToday: 0,
    challenges: {
      totalCompleted: 0,
      totalHits: 80,
      totalMisses: 20,
      hitsPercentage: 80,
      missPercentage: 20,
    },
    trainings: { totalCompleted: 0 },
    goalsAwardedToday: [],
    ...overrides,
  },
});

const makeWordChoiceQuestion = (id: string, correctId = "opt-001") => ({
  questionId: id,
  signIds: ["sign-001"],
  category: "Colores",
  type: "WORD_CHOICE" as const,
  minLevel: 1,
  content: {
    question: "¿Qué signo es este?",
    data: {
      options: [
        { id: "opt-001", text: "HOLA" },
        { id: "opt-002", text: "ADIOS" },
      ],
      correctOptionId: correctId,
    },
  },
});

const makeMatchQuestion = (correctMatches: Record<string, string>) => ({
  questionId: "q-match",
  signIds: ["sign-001", "sign-002"],
  category: "Colores",
  type: "MATCH_CHOICE" as const,
  minLevel: 1,
  content: {
    question: "Empareja los signos",
    data: {
      options: {
        mediaItems: [
          { id: "media-1", mediaUrl: "url1" },
          { id: "media-2", mediaUrl: "url2" },
        ],
        textItems: [
          { id: "term-1", text: "HOLA" },
          { id: "term-2", text: "ADIOS" },
        ],
      },
      correctMatches,
    },
  },
});

const config: ChallengeConfig = {
  categories: ["Colores"],
  questionType: "WORD_CHOICE",
  numberOfOptions: 2,
  timePerQuestion: 30,
  totalQuestions: 5,
};

beforeEach(() => {
  mockedXpService.addXp.mockResolvedValue(undefined);
  mockedGoalService.checkAndAwardGoalXp.mockResolvedValue(undefined);
  mockedStreakService.updateStreak.mockResolvedValue(undefined);
  mockedUserRepo.updateChallengeStats.mockResolvedValue(undefined as any);
});

describe("ChallengeService – startChallenge", () => {
  test("PUCHAL01 – iniciar desafío con configuración válida devuelve primera pregunta y total", async () => {
    const questions = [
      makeWordChoiceQuestion("q1"),
      makeWordChoiceQuestion("q2"),
      makeWordChoiceQuestion("q3"),
      makeWordChoiceQuestion("q4"),
      makeWordChoiceQuestion("q5"),
    ];
    mockedUserRepo.findUserByUID.mockResolvedValue(makeUser() as any);
    mockedQuestionRepo.findQuestions.mockResolvedValue(questions as any);

    const result = await challengeService.startChallenge("usr-001", config);

    expect(result.question).toBeDefined();
    expect(result.totalQuestions).toBe(5);
    await expect(
      challengeService.submitAnswer("usr-001", "opt-001"),
    ).resolves.toBeDefined(); // confirma que la sesión quedó creada en el almacén
  });

  test("PUCHAL02 – usuario inexistente lanza error 404", async () => {
    mockedUserRepo.findUserByUID.mockResolvedValue(null);

    await expect(
      challengeService.startChallenge("uid-inexistente", config),
    ).rejects.toMatchObject({
      statusCode: 404,
    });
  });

  test("PUCHAL03 – sin preguntas disponibles para los filtros lanza error 404", async () => {
    mockedUserRepo.findUserByUID.mockResolvedValue(
      makeUser({ xp: { total: 0, toNextLvl: 100, level: 1, today: 0 } }) as any,
    );
    mockedQuestionRepo.findQuestions.mockResolvedValue([]);

    await expect(
      challengeService.startChallenge("usr-001", {
        ...config,
        categories: ["Deportes"],
      }),
    ).rejects.toMatchObject({
      statusCode: 404,
    });
  });

  test("PUCHAL04 – nuevo desafío descarta la sesión activa anterior", async () => {
    const questions = [
      makeWordChoiceQuestion("q1"),
      makeWordChoiceQuestion("q2"),
    ];
    mockedUserRepo.findUserByUID.mockResolvedValue(makeUser() as any);
    mockedQuestionRepo.findQuestions.mockResolvedValue(questions as any);

    await challengeService.startChallenge("usr-001", config);
    await challengeService.submitAnswer("usr-001", "opt-001"); // sesión previa con progreso en curso, 100 puntos

    const result = await challengeService.startChallenge("usr-001", config);

    expect(result.question).toBeDefined();
    expect(result.totalQuestions).toBe(2);

    const answer = await challengeService.submitAnswer("usr-001", "opt-001");
    expect(answer.totalPoints).toBe(100);
  });
});

describe("ChallengeService – submitAnswer (WORD_CHOICE)", () => {
  beforeEach(async () => {
    const questions = [
      makeWordChoiceQuestion("q1", "opt-001"),
      makeWordChoiceQuestion("q2", "opt-001"),
      makeWordChoiceQuestion("q3", "opt-001"),
    ];
    mockedUserRepo.findUserByUID.mockResolvedValue(makeUser() as any);
    mockedQuestionRepo.findQuestions.mockResolvedValue(questions as any);
    await challengeService.startChallenge("usr-001", config);
  });

  test("PUCHAL05 – respuesta correcta en pregunta intermedia suma 100 puntos y devuelve siguiente", async () => {
    const result = await challengeService.submitAnswer("usr-001", "opt-001");

    expect(result.correct).toBe(true);
    expect(result.pointsEarned).toBe(100);
    expect(result.finished).toBe(false);
    expect(result.nextQuestion).toBeDefined();

    // Confirma que quedan exactamente 2 preguntas restantes (3 totales, 1 respondida)
    const second = await challengeService.submitAnswer("usr-001", "opt-001");
    expect(second.finished).toBe(false);
    const third = await challengeService.submitAnswer("usr-001", "opt-001");
    expect(third.finished).toBe(true);
  });

  test("PUCHAL06 – respuesta incorrecta no suma puntos y devuelve siguiente pregunta", async () => {
    const result = await challengeService.submitAnswer("usr-001", "opt-002");

    expect(result.correct).toBe(false);
    expect(result.pointsEarned).toBe(0);
    expect(result.finished).toBe(false);
    expect(result.nextQuestion).toBeDefined();
  });
});

describe("ChallengeService – submitAnswer con tiempo agotado (PUCHAL07)", () => {
  afterEach(() => {
    jest.clearAllTimers();
    jest.useRealTimers();
  });

  test("PUCHAL07 – respuesta con tiempo agotado devuelve timeExpired: true y 0 puntos", async () => {
    jest.useFakeTimers();

    const questions = [
      makeWordChoiceQuestion("q1"),
      makeWordChoiceQuestion("q2"),
    ];
    mockedUserRepo.findUserByUID.mockResolvedValue(makeUser() as any);
    mockedQuestionRepo.findQuestions.mockResolvedValue(questions as any);

    await challengeService.startChallenge("usr-001", config); // tiempo límite: 30s

    jest.advanceTimersByTime(35000); // 35s transcurridos, límite: 30s

    const result = await challengeService.submitAnswer("usr-001", "opt-001");

    expect(result.timeExpired).toBe(true);
    expect(result.pointsEarned).toBe(0);
    expect(result.correct).toBe(false);
    expect(result.misses).toBe(1); // se contabiliza como fallo
  });
});

describe("ChallengeService – submitAnswer última pregunta (PUCHAL08)", () => {
  test("PUCHAL08 – responder la última pregunta devuelve finished: true y actualiza stats", async () => {
    const questions = [makeWordChoiceQuestion("q1", "opt-001")];
    mockedUserRepo.findUserByUID.mockResolvedValue(makeUser() as any);
    mockedQuestionRepo.findQuestions.mockResolvedValue(questions as any);

    await challengeService.startChallenge("usr-001", config);
    const result = await challengeService.submitAnswer("usr-001", "opt-001");

    expect(result.finished).toBe(true);
    expect(mockedUserRepo.updateChallengeStats).toHaveBeenCalled();
    expect(mockedStreakService.updateStreak).toHaveBeenCalled();
    expect(mockedXpService.addXp).toHaveBeenCalled();
  });
});

describe("ChallengeService – MATCH_CHOICE", () => {
  const correctMatches = { "media-1": "term-1", "media-2": "term-2" };

  beforeEach(async () => {
    mockedUserRepo.findUserByUID.mockResolvedValue(makeUser() as any);
    mockedQuestionRepo.findQuestions.mockResolvedValue([
      makeMatchQuestion(correctMatches),
      makeMatchQuestion(correctMatches),
    ] as any);
    await challengeService.startChallenge("usr-001", {
      ...config,
      questionType: "MATCH_CHOICE",
    });
  });

  test("PUCHAL09 – todos los pares correctos suman 100 puntos", async () => {
    const result = await challengeService.submitAnswer(
      "usr-001",
      correctMatches,
    );

    expect(result.correct).toBe(true);
    expect(result.pointsEarned).toBe(100);
  });

  test("PUCHAL10 – solo algunos pares correctos devuelve puntos proporcionales", async () => {
    const partialAnswer = { "media-1": "term-1", "media-2": "term-X" };
    const result = await challengeService.submitAnswer(
      "usr-001",
      partialAnswer,
    );

    expect(result.pointsEarned).toBe(50);
    expect(result.correct).toBe(false);
  });
});

describe("ChallengeService – sin sesión activa (PUCHAL11)", () => {
  test("PUCHAL11 – responder sin sesión activa lanza error de sesión inválida", async () => {
    await expect(
      challengeService.submitAnswer("usr-sin-sesion", "opt-001"),
    ).rejects.toThrow("No active challenge session");
  });
});

describe("ChallengeService – recálculo de porcentaje de aciertos (PUCHAL12)", () => {
  test("PUCHAL12 – al finalizar el desafío recalcula el porcentaje de aciertos correctamente al 84%", async () => {
    const user = makeUser({
      challenges: {
        totalCompleted: 0,
        totalHits: 80,
        totalMisses: 15,
        hitsPercentage: 84,
        missPercentage: 16,
      },
    });
    mockedUserRepo.findUserByUID.mockResolvedValue(user as any);
    mockedQuestionRepo.findQuestions.mockResolvedValue([
      makeWordChoiceQuestion("q1", "opt-001"),
      makeWordChoiceQuestion("q2", "opt-001"),
      makeWordChoiceQuestion("q3", "opt-001"),
      makeWordChoiceQuestion("q4", "opt-001"),
      makeWordChoiceQuestion("q5", "opt-001"),
    ] as any);

    await challengeService.startChallenge("usr-001", config);
    await challengeService.submitAnswer("usr-001", "opt-001"); // hit
    await challengeService.submitAnswer("usr-001", "opt-001"); // hit
    await challengeService.submitAnswer("usr-001", "opt-001"); // hit
    await challengeService.submitAnswer("usr-001", "opt-001"); // hit
    await challengeService.submitAnswer("usr-001", "opt-002"); // miss

    expect(mockedUserRepo.updateChallengeStats).toHaveBeenCalledWith(
      "usr-001",
      expect.any(Number),
      4,
      1,
      84,
      16,
    );
  });
});
