import { SignSpellingEvaluationResult } from "../domain/training/SignSpellingEvaluationResult";
import { Word } from "../domain/training/Word";
import { Result } from "../result";
import { SignPredictionRequest } from "../signPrediction.model";
import {
  SignSpellingEvaluationRequest,
  SignSpellingEvaluationResponse,
  StartFreeSessionRequest,
  StartSessionResponse,
} from "../training.model";
import { apiClient, toResult } from "./api/api-client";
import { createWsClient } from "./api/ws-client";

const SIGN_RECOGNITION_SERVICE_URL =
  process.env.EXPO_PUBLIC_SIGN_RECOGNITION_SERVICE_URL;

const wsClient = createWsClient();

export const trainingService = {
  startSpellingTrainingSesssion: (): Promise<Result<Array<Word>>> =>
    toResult(apiClient.post<StartSessionResponse>("/training/startSpellingSession"), (r) => r.words),

  startFreeSpellingSession: (req: StartFreeSessionRequest): Promise<Result<Array<Word>>> =>
    toResult(apiClient.post<StartSessionResponse>("/training/startFreeSpellingSession", req), (r) => r.words),

  evaluateSignSpelling: (req: SignSpellingEvaluationRequest): Promise<Result<SignSpellingEvaluationResult>> =>
    toResult(apiClient.post<SignSpellingEvaluationResponse>("/training/evaluate", req), (r) => r.result),

  evaluateFreeSignSpelling: (req: SignSpellingEvaluationRequest): Promise<Result<SignSpellingEvaluationResult>> =>
    toResult(apiClient.post<SignSpellingEvaluationResponse>("/training/evaluateFree", req), (r) => r.result),

  connectWS: () => wsClient.connect(`${SIGN_RECOGNITION_SERVICE_URL}/predict`),

  disconnectWS: () => wsClient.disconnect(),

  predictSign: (request: SignPredictionRequest): Promise<string> =>
    wsClient.send(JSON.stringify(request)),
};
