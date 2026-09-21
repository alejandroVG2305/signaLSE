import { trainingService } from "../services/training.service";
import { signRepository } from "../repositories/sign.repository";
import { userRepository } from "../repositories/user.repository";
import { xpService } from "../services/xp.service";
import { goalService } from "../services/goal.service";

jest.mock("../repositories/sign.repository");
jest.mock("../repositories/user.repository");
jest.mock("../services/xp.service");
jest.mock("../services/goal.service");

const mockedSignRepo = signRepository as jest.Mocked<typeof signRepository>;
const mockedUserRepo = userRepository as jest.Mocked<typeof userRepository>;
const mockedXpService = xpService as jest.Mocked<typeof xpService>;
const mockedGoalService = goalService as jest.Mocked<typeof goalService>;

const makeSign = (signId: string, term: string) => ({
  signId,
  term,
  category: "Alfabeto",
  complexity: "easy",
  minLevel: 1,
  videoUrl: `https://example.com/${signId}.mp4`,
  meaning: term,
  keySteps: [],
  supportsAITraining: true,
  createdAt: new Date(),
});

beforeEach(() => {
  mockedXpService.addXp.mockResolvedValue(undefined);
  mockedGoalService.checkAndAwardGoalXp.mockResolvedValue(undefined);
  mockedUserRepo.updateTrainingStats.mockResolvedValue(undefined as any);
});

describe("TrainingService – startTrainingSession (PUTRAIN01)", () => {
  test("PUTRAIN01 – iniciar sesión normal devuelve signos y crea sesión", async () => {
    const fiveSigns = ["HOLA", "ADIOS", "GRACIAS", "POR", "FAVOR"].map((t, i) =>
      makeSign(`s${i}`, t),
    );
    mockedSignRepo.findRandomByTermLength.mockResolvedValue(fiveSigns as any);

    const result = await trainingService.startTrainingSession("usr-001");

    expect(result).toHaveLength(5);
    expect(mockedSignRepo.findRandomByTermLength).toHaveBeenCalledWith(10, 5);
    expect(() =>
      trainingService.evaluateAttempt("usr-001", result[0].term[0]),
    ).not.toThrow();
  });
});

describe("TrainingService – startFreeTrainingSession", () => {
  test("PUTRAIN02 – iniciar sesión libre con signo válido devuelve ese signo", async () => {
    mockedSignRepo.findSignById.mockResolvedValue(
      makeSign("sign-001", "HOLA") as any,
    );

    const result = await trainingService.startFreeTrainingSession(
      "usr-001",
      "sign-001",
    );

    expect(result).toHaveLength(1);
    expect(result[0].term).toBe("HOLA");
    expect(() =>
      trainingService.evaluateFreeAttempt("usr-001", "H"),
    ).not.toThrow();
  });

  test("PUTRAIN03 – signo inexistente lanza error", async () => {
    mockedSignRepo.findSignById.mockResolvedValue(null);

    await expect(
      trainingService.startFreeTrainingSession("usr-001", "sign-inexistente"),
    ).rejects.toThrow("Sign not found");
  });
});

describe("TrainingService – evaluateAttempt (sesión normal)", () => {
  beforeEach(async () => {
    // Start session with "HOLA" word to prepare state
    mockedSignRepo.findRandomByTermLength.mockResolvedValue([
      makeSign("s1", "HOLA"),
      makeSign("s2", "ADIOS"),
    ] as any);
    await trainingService.startTrainingSession("usr-001");
  });

  test("PUTRAIN04 – letra correcta devuelve resultado correcto con +10 puntos", () => {
    const result = trainingService.evaluateAttempt("usr-001", "H");
    expect(result.correct).toBe(true);
    expect(result.points).toBe(10);
    expect(result.finished).toBe(false);
  });

  test("PUTRAIN05 – letra incorrecta devuelve resultado incorrecto sin cambios", () => {
    const result = trainingService.evaluateAttempt("usr-001", "A");
    expect(result.correct).toBe(false);
    expect(result.points).toBe(0);
    expect(result.currentLetterIndex).toBe(0);
    expect(result.finished).toBe(false);
  });
});

describe("TrainingService – avance al siguiente signo y finalización", () => {
  test("PUTRAIN06 – última letra de palabra no final avanza al siguiente signo y suma bonus", async () => {
    mockedSignRepo.findRandomByTermLength.mockResolvedValue([
      makeSign("s1", "HOLA"),
      makeSign("s2", "NO"),
      makeSign("s3", "SI"),
    ] as any);
    await trainingService.startTrainingSession("usr-001");

    trainingService.evaluateAttempt("usr-001", "H");
    trainingService.evaluateAttempt("usr-001", "O");
    trainingService.evaluateAttempt("usr-001", "L");
    const result = trainingService.evaluateAttempt("usr-001", "A"); // última letra de "HOLA", palabras restantes: 2

    expect(result.correct).toBe(true);
    expect(result.finished).toBe(false);
    expect(result.currentWordIndex).toBe(1); // avanzó al siguiente signo
    expect(result.points).toBe(10 + 10 + 10 + 10 + 15); // H, O, L, A + bonus de palabra
  });

  test("PUTRAIN07 – última letra del último signo devuelve finished: true y otorga XP", async () => {
    mockedSignRepo.findRandomByTermLength.mockResolvedValue([
      makeSign("s1", "HOLA"),
    ] as any);
    await trainingService.startTrainingSession("usr-001");

    trainingService.evaluateAttempt("usr-001", "H");
    trainingService.evaluateAttempt("usr-001", "O");
    trainingService.evaluateAttempt("usr-001", "L");
    const result = trainingService.evaluateAttempt("usr-001", "A"); // última letra del último signo

    expect(result.finished).toBe(true);
    // XP and stats are awarded async - verify they were called
    await new Promise(process.nextTick);
    expect(mockedXpService.addXp).toHaveBeenCalledWith("usr-001", 25);
    expect(mockedUserRepo.updateTrainingStats).toHaveBeenCalled();
  });
});

describe("TrainingService – evaluateFreeAttempt (sesión libre)", () => {
  beforeEach(async () => {
    mockedSignRepo.findSignById.mockResolvedValue(
      makeSign("sign-001", "HOLA") as any,
    );
    await trainingService.startFreeTrainingSession("usr-001", "sign-001");
  });

  test("PUTRAIN08 – letra correcta en sesión libre devuelve correcto y finished: false siempre", () => {
    const result = trainingService.evaluateFreeAttempt("usr-001", "H");
    expect(result.correct).toBe(true);
    expect(result.finished).toBe(false);
  });

  test("PUTRAIN09 – última letra en sesión libre reinicia índice a 0 y suma bonus", () => {
    trainingService.evaluateFreeAttempt("usr-001", "H");
    trainingService.evaluateFreeAttempt("usr-001", "O");
    trainingService.evaluateFreeAttempt("usr-001", "L");
    const result = trainingService.evaluateFreeAttempt("usr-001", "A"); // última letra

    expect(result.correct).toBe(true);
    expect(result.finished).toBe(false);
    expect(result.currentLetterIndex).toBe(0);
  });
});

describe("TrainingService – sin sesión activa", () => {
  test("PUTRAIN10 – evaluar sin sesión activa lanza error de sesión inválida", () => {
    expect(() =>
      trainingService.evaluateAttempt("usr-sin-sesion", "A"),
    ).toThrow("Invalid session");
  });

  test("PUTRAIN11 – nueva sesión descarta la sesión anterior", async () => {
    mockedSignRepo.findRandomByTermLength.mockResolvedValue([
      makeSign("s1", "HI"),
    ] as any);

    await trainingService.startTrainingSession("usr-001");
    trainingService.evaluateAttempt("usr-001", "H"); // avanzar

    // Start new session – resets progress
    mockedSignRepo.findRandomByTermLength.mockResolvedValue([
      makeSign("s2", "NO"),
    ] as any);
    await trainingService.startTrainingSession("usr-001");

    const result = trainingService.evaluateAttempt("usr-001", "N");
    expect(result.correct).toBe(true);
    expect(result.currentLetterIndex).toBe(1); // letra 1 de "NO"
    expect(result.currentWordIndex).toBe(0); // primera palabra de la nueva sesión
  });
});
