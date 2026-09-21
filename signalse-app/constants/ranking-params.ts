import i18n from "../i18n";

export type RankingCriterium = "totalPoints" | "xpLevel" | "hitsPercentage" | "streak";

interface RankingCriteriumOption {
  id: RankingCriterium;
  label: string;
}

export const getRankingCriteriaOptions = (): RankingCriteriumOption[] => [
  { id: "totalPoints", label: i18n.t("rankingCriteria.totalPoints") },
  { id: "xpLevel", label: i18n.t("rankingCriteria.xpLevel") },
  { id: "hitsPercentage", label: i18n.t("rankingCriteria.hitsPercentage") },
  { id: "streak", label: i18n.t("rankingCriteria.streak") },
];

export const getCriteriumLabel = (criterium: RankingCriterium): string =>
  getRankingCriteriaOptions().find((o) => o.id === criterium)?.label ?? criterium;

export const getCriteriumByLabel = (label: string): RankingCriterium | undefined =>
  getRankingCriteriaOptions().find((o) => o.label === label)?.id;