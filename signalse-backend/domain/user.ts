export interface User {
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
  preferences: UserPreferences;
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
    goalsAwardedToday: string[]; // keys for already awarded goals
  };
}

export interface UserPreferences {
  pushNotifications: boolean;
  soundEffects: boolean;
}
