import { DailyGoalResponse } from "../dailyGoal.model";
import { DailyGoal } from "../domain/goals/daily-goal";
import { Result } from "../result";
import { apiClient, toResult } from "./api/api-client";

export const goalService = {
  getAuthUserDailyGoals: (): Promise<Result<DailyGoal[]>> =>
    toResult(apiClient.get<DailyGoalResponse>("/getAuthUserDailyGoals"), (r) => r.goals),
};
