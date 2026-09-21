import {
  ChallengeConfig,
  QuestionTypeFilter,
  SanitizedQuestion,
} from "../../domain/challenge-session";
import { AuthRequest } from "../../middlewares/auth.middleware";
import { SanitizedQuestionDTO } from "./sanitized-question.dto";

export interface StartChallengeRequestDTO extends AuthRequest {
  body: {
    categories?: string[];
    questionType?: string;
    numberOfOptions: number;
    timePerQuestion: number;
    totalQuestions: number;
  };
}

interface StartChallengeResponseDTO {
  question: SanitizedQuestionDTO;
  totalQuestions: number;
}

export const toChallengeConfig = (
  dto: StartChallengeRequestDTO,
): ChallengeConfig => {
  return {
    categories: dto.body.categories,
    questionType: dto.body.questionType as QuestionTypeFilter,
    numberOfOptions: dto.body.numberOfOptions,
    timePerQuestion: dto.body.timePerQuestion,
    totalQuestions: dto.body.totalQuestions,
  };
};

export const toStartChallengeResponseDTO = (
  question: SanitizedQuestion,
  totalQuestions: number,
): StartChallengeResponseDTO => {
  return {
    question: question,
    totalQuestions: totalQuestions,
  };
};
