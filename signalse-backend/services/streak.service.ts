import { User } from "../domain/user";
import { userRepository } from "../repositories/user.repository";

export const streakService = {
  updateStreak: async (user: User): Promise<void> => {
    const now = new Date();
    const last = user.stats.streak.lastChallengeDate
      ? new Date(user.stats.streak.lastChallengeDate)
      : null;
    const daysDiff = last
      ? Math.floor(
          (now.setHours(0, 0, 0, 0) - last.setHours(0, 0, 0, 0)) / 86_400_000,
        )
      : null;
    const newStreak =
      daysDiff === null || daysDiff > 1
        ? 1
        : daysDiff === 1
          ? user.stats.streak.current + 1
          : user.stats.streak.current;

    await userRepository.updateStreakStats(user.profile.uid, newStreak);
  },
};
