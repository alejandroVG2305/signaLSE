import { signRepository } from "../repositories/sign.repository";
import { userRepository } from "../repositories/user.repository";

const getXpThresholdForLevel = (level: number): number => {
  if (level <= 1) return 0;
  if (level === 2) return 100;
  return Math.floor(getXpThresholdForLevel(level - 1) * 1.2);
};

export const xpService = {
  addXp: async (userId: string, xpEarned: number): Promise<void> => {
    const user = await userRepository.findUserByUID(userId);
    if (!user) throw new Error("User not found");

    let { total, level, today } = user.stats.xp;
    const oldLevel = level;
    total = parseFloat((total + xpEarned).toFixed(2));
    today += xpEarned;

    while (total >= getXpThresholdForLevel(level + 1)) {
      level++;
    }

    const toNextLvl = getXpThresholdForLevel(level + 1);

    await userRepository.updateXpStats(userId, total, toNextLvl, level, today);

    if (level > oldLevel) {
      const newSignsCount = await signRepository.countSignsByMinLevel(level);
      if (newSignsCount > 0) {
        await userRepository.incrementSignsLearned(userId, newSignsCount);
      }
    }
  },
};
