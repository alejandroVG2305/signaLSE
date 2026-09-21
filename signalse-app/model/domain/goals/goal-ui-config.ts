import { ReactNode } from "react";

export interface GoalUIConfig {
  key: string;
  icon: ReactNode;
  labelKey: string;
  progressColor?: string;
}
