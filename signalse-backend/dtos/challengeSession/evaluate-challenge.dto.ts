import { AnswerAttemptResult } from "../../domain/challenge-session";
import { AuthRequest } from "../../middlewares/auth.middleware";
import { SanitizedQuestionDTO } from "./sanitized-question.dto";

interface EvaluateTrainingResponseDTO {
  correct: boolean;
  pointsEarned: number;
  totalPoints: number;
  correctAnswer: string | Record<string, string>;
  timeExpired: boolean;
  finished: boolean;
  hits: number;
  misses: number;
  nextQuestion?: SanitizedQuestionDTO;
}

export interface EvaluateTrainingRequestDTO extends AuthRequest {
  body: {
    answer: string | Record<string, string>;
  };
}

export const toEvaluateTrainingResponseDTO = (
  result: AnswerAttemptResult,
): EvaluateTrainingResponseDTO => {
  return {
    correct: result.correct,
    pointsEarned: result.pointsEarned,
    totalPoints: result.totalPoints,
    correctAnswer: result.correctAnswer,
    timeExpired: result.timeExpired,
    finished: result.finished,
    hits: result.hits,
    misses: result.misses,
    nextQuestion: result.nextQuestion,
  };
};
