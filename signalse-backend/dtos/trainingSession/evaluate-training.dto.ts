import { AttemptEvaluation } from "../../domain/spell-training-session";
import { PredictionRequest } from "../../middlewares/verify-prediction.middleware";

export interface EvaluateRequestDTO extends PredictionRequest {
  body: {
    predictionToken: string;
  };
}

export interface EvaluateResponseDTO {
  correct: boolean;
  points: number;
  finished: boolean;
  currentLetterIndex: number;
  currentWordIndex: number;
}

export const toEvaluateResponseDTO = (
  evaluation: AttemptEvaluation,
): EvaluateResponseDTO => ({
  correct: evaluation.correct,
  points: evaluation.points,
  finished: evaluation.finished,
  currentLetterIndex: evaluation.currentLetterIndex,
  currentWordIndex: evaluation.currentWordIndex,
});
