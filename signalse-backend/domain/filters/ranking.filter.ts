export type RankingCriterium =
  | "totalPoints"
  | "xpLevel"
  | "hitsPercentage"
  | "streak";

export interface RankingFilter {
  criterium: RankingCriterium;
  limit: number;
}
