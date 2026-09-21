import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  ChallengeConfig,
  SerializedChallengeConfig,
} from "../domain/challenges/challenge-config";
import {
  ChallengeEvaluationResult,
  ChallengeSessionData,
} from "../domain/challenges/challenge-session";
import {
  EvaluateChallengeAttemptRequest,
  EvaluateChallengeAttemptResponse,
  StartChallengeSessionRequest,
  StartChallengeSessionResponse,
} from "../challenge-session.model";
import { Result } from "../result";
import { apiClient, toResult } from "./api/api-client";

export const challengeService = {
  startChallengeSession: (req: StartChallengeSessionRequest): Promise<Result<ChallengeSessionData>> =>
    toResult(apiClient.post<StartChallengeSessionResponse>("/challenges/startSession", req), (r) => r),

  evaluateChallengeAttempt: (req: EvaluateChallengeAttemptRequest): Promise<Result<ChallengeEvaluationResult>> =>
    toResult(apiClient.post<EvaluateChallengeAttemptResponse>("/challenges/evaluate", req), (r) => r),

  retrieveUserChallengeConfig: async (): Promise<ChallengeConfig | null> => {
    const raw = await AsyncStorage.getItem("preferences");
    if (!raw) return null;
    const parsed = JSON.parse(raw) as SerializedChallengeConfig;
    const selectedCategories = new Set<string>();
    parsed.selectedCategories.forEach((c) => selectedCategories.add(c));
    return { ...parsed, selectedCategories };
  },

  saveUserChallengeConfig: async (config: ChallengeConfig): Promise<void> => {
    const serialized: SerializedChallengeConfig = {
      ...config,
      selectedCategories: Array.from(config.selectedCategories),
    };
    await AsyncStorage.setItem("preferences", JSON.stringify(serialized));
  },
};
