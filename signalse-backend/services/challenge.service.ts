import { AppError } from "../errors/app-error";
import { clearFromStore, getFromStore } from "../helpers/session-store";
import { questionSanitizer } from "../helpers/question-sanitizer";
import { questionTrimmer } from "../helpers/question-trimmer";
import {
  AnswerAttemptResult,
  ChallengeConfig,
  ChallengeSession,
  EvaluationResult,
  SanitizedQuestion,
} from "../domain/challenge-session";
import { Question } from "../domain/question";
import { SessionStore } from "../domain/session-store";
import { questionRepository } from "../repositories/question.repository";
import { userRepository } from "../repositories/user.repository";
import { goalService } from "./goal.service";
import { streakService } from "./streak.service";
import { xpService } from "./xp.service";

const store: SessionStore<ChallengeSession> = {
  sessions: new Map(),
  timeouts: new Map(),
};

const POINTS_PER_CORRECT = 100;
const XP_BY_DIFFICULTY: Record<number, number> = { 2: 1.2, 3: 1.35, 4: 1.5 };

export const challengeService = {
  startChallenge: async (
    userId: string,
    config: ChallengeConfig,
  ): Promise<{ question: SanitizedQuestion; totalQuestions: number }> => {
    const user = await userRepository.findUserByUID(userId);
    if (!user) throw new AppError("User not found", 404);

    const questions = await questionRepository.findQuestions({
      categories: config.categories || [],
      maxLevel: user.stats.xp.level,
      types: config.questionType ? [config.questionType] : [],
      count: config.totalQuestions,
    });

    if (questions.length === 0)
      throw new AppError("No questions available for the given filters", 404);

    const trimmedQuestions = questions.map((q) =>
      questionTrimmer.trimQuestion(q, config.numberOfOptions),
    );

    clearFromStore(userId, store);

    store.sessions.set(userId, {
      userId,
      config,
      questions: trimmedQuestions,
      currentIndex: 0,
      points: 0,
      hits: 0,
      misses: 0,
      questionStartTime: Date.now(),
    });

    const ttlMs = (config.totalQuestions * config.timePerQuestion + 120) * 1000;
    store.timeouts.set(
      userId,
      setTimeout(() => clearFromStore(userId, store), ttlMs),
    );

    return {
      question: questionSanitizer.sanitizeQuestion(trimmedQuestions[0]),
      totalQuestions: trimmedQuestions.length,
    };
  },

  submitAnswer: async (
    userId: string,
    answer: string | Record<string, string>,
  ): Promise<AnswerAttemptResult> => {
    const session = getFromStore(userId, store, "No active challenge session");
    const question = session.questions[session.currentIndex];

    const timeExpired =
      Date.now() - session.questionStartTime >
      session.config.timePerQuestion * 1000;

    let pointsEarned = 0;
    let correct = false;

    if (!timeExpired) {
      const evaluation = evaluateAnswer(question, answer);
      correct = evaluation.correct;
      pointsEarned = computePoints(question, evaluation);
    }

    correct ? session.hits++ : session.misses++;
    session.points += pointsEarned;

    const correctAnswer = getCorrectAnswer(question);
    const isLast = session.currentIndex === session.questions.length - 1;

    if (isLast) {
      await finishChallenge(session);
      return {
        correct,
        pointsEarned,
        totalPoints: session.points,
        correctAnswer,
        timeExpired,
        finished: true,
        hits: session.hits,
        misses: session.misses,
      };
    }

    session.currentIndex++;
    session.questionStartTime = Date.now();

    return {
      correct,
      pointsEarned,
      totalPoints: session.points,
      correctAnswer,
      timeExpired,
      finished: false,
      hits: session.hits,
      misses: session.misses,
      nextQuestion: questionSanitizer.sanitizeQuestion(
        session.questions[session.currentIndex],
      ),
    };
  },
};

const getCorrectAnswer = (
  question: Question,
): string | Record<string, string> => {
  const data = question.content.data as any;
  return question.type === "MATCH_CHOICE"
    ? (data.correctMatches as Record<string, string>)
    : (data.correctOptionId as string);
};

const evaluateAnswer = (
  question: Question,
  answer: string | Record<string, string>,
): EvaluationResult => {
  const data = question.content.data as any;

  if (question.type === "MATCH_CHOICE") {
    // Match choice
    const correctMatches: Record<string, string> = data.correctMatches;
    const totalPairs = Object.keys(correctMatches).length;
    const correctPairs = Object.entries(
      answer as Record<string, string>,
    ).reduce(
      (acc, [mediaId, termId]) =>
        correctMatches[mediaId] === termId ? acc + 1 : acc,
      0,
    );
    return { correct: correctPairs === totalPairs, correctPairs, totalPairs };
  }

  return { correct: (answer as string) === data.correctOptionId }; // Individual choice
};

const computePoints = (
  question: Question,
  evaluation: EvaluationResult,
): number => {
  if (question.type === "MATCH_CHOICE") {
    // Match choice
    if (!evaluation.totalPairs) return 0;
    return Math.floor(
      ((evaluation.correctPairs ?? 0) / evaluation.totalPairs) *
        POINTS_PER_CORRECT,
    );
  }
  return evaluation.correct ? POINTS_PER_CORRECT : 0; // Individual choice
};

const finishChallenge = async (session: ChallengeSession): Promise<void> => {
  clearFromStore(session.userId, store);

  const user = await userRepository.findUserByUID(session.userId);
  if (!user) throw new AppError("User not found", 404);

  const totalHits = user.stats.challenges.totalHits + session.hits;
  const totalMisses = user.stats.challenges.totalMisses + session.misses;
  const total = totalHits + totalMisses;
  const hitsPercentage = total > 0 ? Math.round((totalHits / total) * 100) : 0;
  const missPercentage = 100 - hitsPercentage;

  await userRepository.updateChallengeStats(
    session.userId,
    session.points,
    session.hits,
    session.misses,
    hitsPercentage,
    missPercentage,
  );
  await streakService.updateStreak(user);
  await xpService.addXp(
    session.userId,
    (XP_BY_DIFFICULTY[session.config.numberOfOptions] ?? 35) * session.hits,
  );
  await goalService.checkAndAwardGoalXp(session.userId);
};
