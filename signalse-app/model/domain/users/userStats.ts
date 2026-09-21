import React from "react";

export interface UserStats {
  totalPoints: number;
  xp: {
    total: number;
    level: number;
    toNextLvl: number;
    today: number;
  };
  streak: {
    current: number;
    lastChallengeDate: Date;
  };
  dailyStatsDate: Date;
  challengesToday: number;
  trainingToday: number;
  signsLearnedToday: number;
  totalSignsLearned: number;
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

export interface StatsItemData {
  data: string;
  subtitle: string;
  textColor?: string;
  icon?: React.ReactNode;
}
