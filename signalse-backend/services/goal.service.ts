import { goalRepository } from "../repositories/goal.repository";
import { userRepository } from "../repositories/user.repository";
import { getNestedValue } from "../utils/path-utils";
import { userService } from "./user.service";
import { xpService } from "./xp.service";

const GOAL_COMPLETION_XP = 50;

export const goalService = {
  checkAndAwardGoalXp: async (uid: string) => {
    const [user, goal] = await Promise.all([
      userService.getUserByUID(uid),
      goalRepository.findAll(),
    ]);
    const awardedKeys: string[] = user.stats.goalsAwardedToday || [];
    const newlyCompleted = goal.filter((goal) => {
      const currentValue = getNestedValue<number>(user.stats, goal.statKey);
      return currentValue >= goal.target && !awardedKeys.includes(goal.key);
    });
    if (newlyCompleted.length > 0) {
      await Promise.all([
        xpService.addXp(uid, newlyCompleted.length * GOAL_COMPLETION_XP),
        ...newlyCompleted.map((g) =>
          userRepository.addGoalAwardedKey(uid, g.key),
        ),
      ]);
    }
  },
  getDailyGoals: async (uid: string) => {
    const [user, goals] = await Promise.all([
      userService.getUserByUID(uid),
      goalRepository.findAll(),
    ]);
    return goals.map((goal) => {
      const currentValue = getNestedValue<number>(user.stats, goal.statKey);
      return {
        goal: goal,
        current: currentValue,
        completed: currentValue >= goal.target,
      };
    });
  },
};
