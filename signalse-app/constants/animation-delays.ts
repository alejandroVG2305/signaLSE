export const DELAYS = {
  streak: 150,
  statsRow: 100,
  featureMenu: 200,
  dailyGoals: 550,
  rankingList: 100,
  profileLevel: 100,
  profileStatsSummary: 250,
  profileTodayActivity: 400,
  profileTotalActivities: 550,
  profileChallengeAccuracy: 700,
};

export const FEATURE_MENU_STAGGER = 120;
export const DAILY_GOALS_STAGGER = 120;
export const RANKING_LIST_STAGGER = 70;

export const ANIMATED_ENTRY_DURATION = 400;

/**
 * Helper function to calculate delays after feature
 */
export function getAfterFeaturesDelay(featuresCount: number): number {
  return (
    DELAYS.featureMenu +
    (featuresCount - 1) * FEATURE_MENU_STAGGER +
    ANIMATED_ENTRY_DURATION
  );
}
