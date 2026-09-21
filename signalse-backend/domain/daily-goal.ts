import { Goal } from "./goal";

export interface DailyGoal {
  goal: Goal;
  current: number;
  completed: boolean;
}
