import { Sign } from "../domain/sign";
import {
  AttemptEvaluation,
  SpellTrainingSession,
  SpellTrainingSign,
} from "../domain/spell-training-session";
import { signRepository } from "../repositories/sign.repository";
import { userRepository } from "../repositories/user.repository";
import { xpService } from "./xp.service";
import { isQuestionTerm, letterNormalizer } from "../utils/letter-normalizer";
import { goalService } from "./goal.service";
import { SessionStore } from "../domain/session-store";
import { clearFromStore, getFromStore } from "../helpers/session-store";

const normalStore: SessionStore<SpellTrainingSession> = {
  sessions: new Map(),
  timeouts: new Map(),
};

const freeStore: SessionStore<SpellTrainingSession> = {
  sessions: new Map(),
  timeouts: new Map(),
};

const POINTS_FOR_LETTER = 10;
const POINTS_FOR_WORD = 15;
const SPELLING_TRAINING_COMPLETION_XP = 25;
const SESSION_TTL_MS = 600000;

export const trainingService = {
  startTrainingSession: async (
    userId: string,
  ): Promise<SpellTrainingSign[]> => {
    const signs = await getRandomTerms();
    const words = expandSigns(signs, 5);
    initSession(userId, words, normalStore);
    return words;
  },

  startFreeTrainingSession: async (
    userId: string,
    signId: string,
  ): Promise<SpellTrainingSign[]> => {
    const sign = await signRepository.findSignById(signId);
    if (!sign) {
      throw new Error("Sign not found");
    }
    if (!sign.supportsAITraining || isQuestionTerm(sign.term)) {
      throw new Error("Sign does not support AI training");
    }
    const words = splitSignIntoWords(sign);
    initSession(userId, words, freeStore);
    return words;
  },

  evaluateFreeAttempt: (
    userId: string,
    recognized: string,
  ): AttemptEvaluation =>
    evaluateLetterAttempt(
      userId,
      recognized,
      freeStore,
      handleFreeLetterAndWord,
    ),

  evaluateAttempt: (userId: string, recognized: string): AttemptEvaluation =>
    evaluateLetterAttempt(
      userId,
      recognized,
      normalStore,
      handleCurrentLetterAndWord,
    ),
};

const initSession = (
  userId: string,
  words: SpellTrainingSign[],
  store: SessionStore<SpellTrainingSession>,
): void => {
  clearFromStore(userId, store);
  store.sessions.set(userId, {
    userId,
    words,
    currentWordIndex: 0,
    currentLetterIndex: 0,
    points: 0,
  });
  const timeout = setTimeout(
    () => clearFromStore(userId, store),
    SESSION_TTL_MS,
  );
  store.timeouts.set(userId, timeout);
};

const evaluateLetterAttempt = (
  userId: string,
  recognized: string,
  store: SessionStore<SpellTrainingSession>,
  handleProgress: (
    word: SpellTrainingSign,
    session: SpellTrainingSession,
  ) => AttemptEvaluation,
): AttemptEvaluation => {
  const session = getFromStore(userId, store, "Invalid session");
  const currentWord = session.words[session.currentWordIndex];
  const expectedLetter = letterNormalizer.normalize(
    currentWord.term[session.currentLetterIndex].toUpperCase(),
  );
  if (recognized.toUpperCase() !== expectedLetter) {
    return {
      correct: false,
      currentWordIndex: session.currentWordIndex,
      currentLetterIndex: session.currentLetterIndex,
      points: session.points,
      finished: false,
    };
  }
  session.points += POINTS_FOR_LETTER;
  const result = handleProgress(currentWord, session);
  if (result.finished) finishSession(session, store);
  return result;
};

const finishSession = async (
  session: SpellTrainingSession,
  store: SessionStore<SpellTrainingSession>,
): Promise<void> => {
  clearFromStore(session.userId, store);
  await userRepository.updateTrainingStats(session.userId, session.points);
  await xpService.addXp(session.userId, SPELLING_TRAINING_COMPLETION_XP);
  await goalService.checkAndAwardGoalXp(session.userId);
};

const getRandomTerms = async (
  count: number = 5,
  maxLetters: number = 10,
): Promise<Array<Sign>> => {
  return signRepository.findRandomByTermLength(maxLetters, count);
};

const splitSignIntoWords = (sign: Sign): SpellTrainingSign[] => {
  const parts = sign.term.includes(" ")
    ? sign.term.split(" ").filter((p) => p.length > 0)
    : [sign.term];
  return parts.map((part) => ({ signId: sign.signId, term: part }));
};

const expandSigns = (signs: Sign[], count: number): SpellTrainingSign[] => {
  const words: SpellTrainingSign[] = [];
  for (const sign of signs) {
    for (const word of splitSignIntoWords(sign)) {
      words.push(word);
      if (words.length >= count) return words;
    }
  }
  return words;
};

const handleCurrentLetterAndWord = (
  currentWord: SpellTrainingSign,
  session: SpellTrainingSession,
): AttemptEvaluation => {
  const isLastLetter =
    session.currentLetterIndex === currentWord.term.length - 1;
  const isLastWord = session.currentWordIndex === session.words.length - 1;
  let finished = false;
  if (isLastLetter && isLastWord) {
    finished = true;
  } else if (isLastLetter) {
    session.currentWordIndex++;
    session.currentLetterIndex = 0;
    session.points += POINTS_FOR_WORD;
  } else {
    session.currentLetterIndex++;
  }
  return {
    correct: true,
    points: session.points,
    finished,
    currentWordIndex: session.currentWordIndex,
    currentLetterIndex: session.currentLetterIndex,
  };
};

const handleFreeLetterAndWord = (
  currentWord: SpellTrainingSign,
  session: SpellTrainingSession,
): AttemptEvaluation => {
  const isLastLetter =
    session.currentLetterIndex === currentWord.term.length - 1;
  if (isLastLetter) {
    session.currentWordIndex =
      (session.currentWordIndex + 1) % session.words.length;
    session.currentLetterIndex = 0;
    session.points += POINTS_FOR_WORD;
  } else {
    session.currentLetterIndex++;
  }
  return {
    correct: true,
    points: session.points,
    finished: false,
    currentWordIndex: session.currentWordIndex,
    currentLetterIndex: session.currentLetterIndex,
  };
};
