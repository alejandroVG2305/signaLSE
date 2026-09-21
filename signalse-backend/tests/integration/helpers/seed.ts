import { UserModel } from "../../../models/user.model";
import { SignModel } from "../../../models/sign.model";
import { QuestionModel } from "../../../models/question.model";
import { GoalModel } from "../../../models/goal.model";

export const TEST_UID = "validFirebaseUID";
export const TEST_EMAIL = "test@example.com";
export const TEST_USERNAME = "testuser";

export const TEST_SIGN_ID = "validSignId";
export const TEST_SIGN_TERM = "HOLA";
export const HIGH_LEVEL_SIGN_ID = "highLevelSignId";

export async function seedUser(overrides: Record<string, any> = {}) {
  return UserModel.create({
    profile: {
      uid: TEST_UID,
      name: "Test",
      surname: "User",
      username: TEST_USERNAME,
      email: TEST_EMAIL,
      status: "ACTIVE",
    },
    preferences: { pushNotifications: true, soundEffects: true },
    stats: {
      totalPoints: 0,
      xp: { total: 200, level: 3, toNextLvl: 100, today: 0 },
      streak: { current: 0 },
      challengesToday: 0,
      trainingToday: 0,
      signsLearnedToday: 0,
      totalSignsLearned: 45,
      challenges: {
        totalCompleted: 0,
        totalHits: 80,
        totalMisses: 20,
        hitsPercentage: 80,
        missPercentage: 20,
      },
      trainings: { totalCompleted: 0 },
      goalsAwardedToday: [],
    },
    ...overrides,
  });
}

export async function seedSecondUser(overrides: Record<string, any> = {}) {
  return UserModel.create({
    profile: {
      uid: "usr-002",
      name: "Other",
      surname: "User",
      username: "existingUsername",
      email: "other@example.com",
      status: "ACTIVE",
    },
    preferences: { pushNotifications: true, soundEffects: true },
    stats: {
      totalPoints: 0,
      xp: { total: 0, level: 1, toNextLvl: 100, today: 0 },
      streak: { current: 0 },
      challengesToday: 0,
      trainingToday: 0,
      signsLearnedToday: 0,
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
    ...overrides,
  });
}

// Seeds <count> users with distinct, increasing totalPoints (100, 200, ...)
// so ranking tests can verify both ordering and the requested limit.
export async function seedRankingUsers(count: number) {
  const users = Array.from({ length: count }, (_, i) => ({
    profile: {
      uid: `ranking-uid-${i}`,
      name: `Ranking${i}`,
      surname: "User",
      username: `rankingUser${i}`,
      email: `ranking${i}@example.com`,
      status: "ACTIVE",
    },
    preferences: { pushNotifications: true, soundEffects: true },
    stats: {
      totalPoints: (i + 1) * 100,
      xp: { total: 0, level: 1, toNextLvl: 100, today: 0 },
      streak: { current: 0 },
      challengesToday: 0,
      trainingToday: 0,
      signsLearnedToday: 0,
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
  }));
  return UserModel.insertMany(users);
}

// Seeds a single AI-trainable sign so that startTrainingSession's $sample
// deterministically returns exactly this word, allowing normal-mode
// evaluate tests to assert on known letters.
export async function seedSingleTrainingSign() {
  return SignModel.create({
    signId: TEST_SIGN_ID,
    term: TEST_SIGN_TERM,
    category: "Saludos",
    complexity: "BAJA",
    minLevel: 1,
    videoUrl: "https://example.com/hola.mp4",
    meaning: "Saludo básico",
    keySteps: ["Paso 1"],
    supportsAITraining: true,
  });
}

export async function seedSigns() {
  const signs = [
    {
      signId: TEST_SIGN_ID,
      term: TEST_SIGN_TERM,
      category: "Saludos",
      complexity: "BAJA",
      minLevel: 1,
      videoUrl: "https://example.com/hola.mp4",
      meaning: "Saludo básico",
      keySteps: ["Paso 1"],
      supportsAITraining: true,
    },
    {
      signId: HIGH_LEVEL_SIGN_ID,
      term: "AVANZADO",
      category: "Avanzado",
      complexity: "ALTA",
      minLevel: 5,
      videoUrl: "https://example.com/avanzado.mp4",
      meaning: "Signo avanzado",
      keySteps: ["Paso 1"],
      supportsAITraining: false,
    },
    {
      signId: "sign-alfabeto-1",
      term: "AMOR",
      category: "Alfabeto",
      complexity: "BAJA",
      minLevel: 1,
      videoUrl: "https://example.com/amor.mp4",
      meaning: "Sentimiento",
      keySteps: [],
      supportsAITraining: true,
    },
    {
      signId: "sign-alfabeto-2",
      term: "BIEN",
      category: "Alfabeto",
      complexity: "BAJA",
      minLevel: 1,
      videoUrl: "https://example.com/bien.mp4",
      meaning: "Estado positivo",
      keySteps: [],
      supportsAITraining: true,
    },
    {
      signId: "sign-deportes-1",
      term: "FUTBOL",
      category: "Deportes",
      complexity: "MEDIA",
      minLevel: 4,
      videoUrl: "https://example.com/futbol.mp4",
      meaning: "Deporte",
      keySteps: [],
      supportsAITraining: true,
    },
    {
      signId: "sign-deportes-2",
      term: "BALONCESTO",
      category: "Deportes",
      complexity: "BAJA",
      minLevel: 2,
      videoUrl: "https://example.com/baloncesto.mp4",
      meaning: "Deporte",
      keySteps: [],
      supportsAITraining: true,
    },
    {
      signId: "sign-colors-1",
      term: "ROJO",
      category: "Colores",
      complexity: "BAJA",
      minLevel: 1,
      videoUrl: "https://example.com/rojo.mp4",
      meaning: "Color",
      keySteps: [],
      supportsAITraining: true,
    },
    {
      signId: "sign-colors-2",
      term: "AZUL",
      category: "Colores",
      complexity: "BAJA",
      minLevel: 1,
      videoUrl: "https://example.com/azul.mp4",
      meaning: "Color",
      keySteps: [],
      supportsAITraining: true,
    },
  ];
  return SignModel.insertMany(signs);
}

export async function seedQuestions() {
  const questions = [];
  for (let i = 1; i <= 10; i++) {
    questions.push({
      questionId: `question-${i}`,
      signIds: [TEST_SIGN_ID],
      category: "Saludos",
      type: "WORD_CHOICE",
      minLevel: 1,
      content: {
        question: `¿Cuál es el signo de la pregunta ${i}?`,
        mediaUrl: `https://example.com/q${i}.mp4`,
        data: {
          options: [
            { id: "opt-001", mediaUrl: "https://example.com/opt1.mp4" },
            { id: "opt-002", mediaUrl: "https://example.com/opt2.mp4" },
            { id: "opt-003", mediaUrl: "https://example.com/opt3.mp4" },
            { id: "opt-004", mediaUrl: "https://example.com/opt4.mp4" },
          ],
          correctOptionId: "opt-001",
        },
      },
    });
  }
  // Add Alfabeto questions
  for (let i = 1; i <= 5; i++) {
    questions.push({
      questionId: `question-alf-${i}`,
      signIds: ["sign-alfabeto-1"],
      category: "Alfabeto",
      type: "WORD_CHOICE",
      minLevel: 1,
      content: {
        question: `¿Cuál es el signo del alfabeto ${i}?`,
        mediaUrl: `https://example.com/alf${i}.mp4`,
        data: {
          options: [
            { id: "opt-001", mediaUrl: "https://example.com/opt1.mp4" },
            { id: "opt-002", mediaUrl: "https://example.com/opt2.mp4" },
          ],
          correctOptionId: "opt-001",
        },
      },
    });
  }
  return QuestionModel.insertMany(questions);
}

export async function seedGoals() {
  return GoalModel.insertMany([
    { key: "dailyChallenge", target: 1, statKey: "challengesToday" },
    { key: "newSigns", target: 10, statKey: "signsLearnedToday" },
    { key: "training", target: 5, statKey: "trainingToday" },
    { key: "dailyXp", target: 500, statKey: "xp.today" },
  ]);
}
