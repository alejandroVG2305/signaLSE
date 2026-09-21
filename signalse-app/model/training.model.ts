import { SignSpellingEvaluationResult } from "./domain/training/SignSpellingEvaluationResult";
import { Word } from "./domain/training/Word";

export interface StartSessionResponse {
  words: Array<Word>;
}

export interface SignSpellingEvaluationResponse {
  result: SignSpellingEvaluationResult;
}

export interface SignSpellingEvaluationRequest {
  predictionToken: string;
}

export interface StartFreeSessionRequest {
  signId: string;
}
