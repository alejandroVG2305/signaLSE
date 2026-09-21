import { Question } from "./question";

export type QuestionTypeFilter = "WORD_CHOICE" | "SIGN_CHOICE" | "MATCH_CHOICE";

export interface ChallengeConfig {
  categories?: string[];
  questionType?: QuestionTypeFilter;
  numberOfOptions: number; // maps to difficulty easy/normal/hard
  timePerQuestion: number;
  totalQuestions: number;
}

export interface ChallengeSession {
  userId: string;
  config: ChallengeConfig;
  questions: Question[];
  currentIndex: number;
  points: number;
  hits: number;
  misses: number;
  questionStartTime: number;
}

export interface AnswerAttempt {
  answer: string | Record<string, string>;
}

// Evaluation
export type EvaluationResult = {
  correct: boolean;
  correctPairs?: number;
  totalPairs?: number;
};

export interface AnswerAttemptResult {
  correct: boolean;
  pointsEarned: number;
  totalPoints: number;
  correctAnswer: string | Record<string, string>;
  timeExpired: boolean;
  finished: boolean;
  hits: number;
  misses: number;
  nextQuestion?: SanitizedQuestion;
}

export interface SanitizedQuestion {
  questionId: string;
  type: string;
  content: {
    question: string;
    mediaUrl?: string;
    data: unknown; // options WITHOUT correctOptionId / correctMatches
  };
}
