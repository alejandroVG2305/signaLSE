import { User } from "../../domain/user";

export interface UserDataResponseDTO {
  profile: {
    uid: string;
    name?: string;
    surname?: string;
    username?: string;
    email: string;
    avatar?: string;
    createdAt?: Date;
    status: string;
  };
  preferences: {
    pushNotifications: boolean;
    soundEffects: boolean;
  };
  stats: {
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
  };
}

export const toUserDataResponseDTO = (user: User): UserDataResponseDTO => ({
  profile: {
    uid: user.profile.uid,
    name: user.profile.name,
    surname: user.profile.surname,
    username: user.profile.username,
    email: user.profile.email,
    avatar: user.profile.avatar,
    createdAt: user.profile.createdAt,
    status: user.profile.status,
  },
  preferences: {
    pushNotifications: user.preferences.pushNotifications,
    soundEffects: user.preferences.soundEffects,
  },
  stats: {
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
  },
});
