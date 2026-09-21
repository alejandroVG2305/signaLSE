import { User } from "../../domain/user";

export interface UserStatsResponseDTO {
  totalPoints: number;
  xp: {
    total: number;
    toNextLvl: number;
    level: number;
    today: number;
  };
  streak: {
    current: number;
    lastChallengeDate: Date;
  };
  dailyStatsDate: Date;
  challengesToday: number;
  signsLearnedToday: number;
  totalSignsLearned: number;
  trainingToday: number;
  challenges: {
    totalCompleted: number;
    totalHits: number;
    totalMisses: number;
    hitsPercentage: number;
    missPercentage: number;
  };
  trainings: {
    totalCompleted: number;
  };
}

export const toUserStatsResponseDTO = (user: User): UserStatsResponseDTO => ({
  totalPoints: user.stats.totalPoints,
  xp: {
    total: user.stats.xp.total,
    toNextLvl: user.stats.xp.toNextLvl,
    level: user.stats.xp.level,
    today: user.stats.xp.today,
  },
  streak: {
    current: user.stats.streak.current,
    lastChallengeDate: user.stats.streak.lastChallengeDate,
  },
  dailyStatsDate: user.stats.dailyStatsDate,
  challengesToday: user.stats.challengesToday,
  signsLearnedToday: user.stats.signsLearnedToday,
  totalSignsLearned: user.stats.totalSignsLearned,
  trainingToday: user.stats.trainingToday,
  challenges: {
    totalCompleted: user.stats.challenges.totalCompleted,
    totalHits: user.stats.challenges.totalHits,
    totalMisses: user.stats.challenges.totalMisses,
    hitsPercentage: user.stats.challenges.hitsPercentage,
    missPercentage: user.stats.challenges.missPercentage,
  },
  trainings: {
    totalCompleted: user.stats.trainings.totalCompleted,
  },
});
