import {
  ChallengeEvaluationResult,
  ChallengeSessionData,
} from "./domain/challenges/challenge-session";

export interface StartChallengeSessionRequest {
  categories?: string[];
  questionType?: string;
  numberOfOptions: number;
  timePerQuestion: number;
  totalQuestions: number;
}

export type StartChallengeSessionResponse = ChallengeSessionData;

export interface EvaluateChallengeAttemptRequest {
  answer: string | Record<string, string>;
}

export type EvaluateChallengeAttemptResponse = ChallengeEvaluationResult;
