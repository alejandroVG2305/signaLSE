import { GOAL_UI_REGISTRY } from "../components/home-info/home-daily-goal-info/daily-goal/goal-ui-registry";
import i18n from "../i18n";
import { DailyGoal } from "../model/domain/goals/daily-goal";

export const useDailyGoals = (dailyGoalData: DailyGoal[]) => {
  return dailyGoalData
    .map((data) => {
      const ui = GOAL_UI_REGISTRY.find((entry) => entry.key === data.key);
      if (!ui) return null;
      return {
        icon: ui.icon,
        name: i18n.t(ui.labelKey),
        progressColor: ui.progressColor,
        current: data.current,
        goal: data.target,
        completed: data.completed,
      };
    })
    .filter((goal): goal is NonNullable<typeof goal> => goal !== null); // Ignores API responses with no UI coincidence in registry
};
