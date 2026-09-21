import { DailyGoal } from "../../domain/daily-goal";

export interface UserGoalsResponseDTO {
  key: string;
  statKey: string;
  target: number;
  current: number;
  completed: boolean;
}

export const toUserGoalsResponseDTO = (
  dailyGoal: DailyGoal,
): UserGoalsResponseDTO => ({
  key: dailyGoal.goal.key,
  statKey: dailyGoal.goal.statKey,
  target: dailyGoal.goal.target,
  current: dailyGoal.current,
  completed: dailyGoal.completed,
});
