import { colors } from "../../../styles/colors";
import { FireIcon } from "../../svg/FireIcon";
import { StarIcon } from "../../Icons";
import { ABC } from "../../svg/ABC";
import WordsIcon from "../../svg/WordsIcon";
import {
  StatsItemData,
  UserStats,
} from "../../../model/domain/users/userStats";
import i18n from "../../../i18n";

const t = (key: string) => i18n.t(key).toUpperCase();

export function getStatsSummaryItems(userStats: UserStats): StatsItemData[] {
  return [
    {
      data: (userStats.streak?.current ?? 0).toString(),
      subtitle: t("daysOfStreak"),
      textColor: colors.lightOrange,
      icon: <FireIcon size={24} />,
    },
    {
      data: (userStats.totalPoints ?? 0).toString(),
      subtitle: t("totalPoints"),
      textColor: colors.yellow,
      icon: <StarIcon size={24} color={colors.yellow} />,
    },
  ];
}

export function getSignsItems(
  userStats: UserStats,
  signsToLearn: number,
): StatsItemData[] {
  return [
    {
      data: (userStats.totalSignsLearned ?? 0).toString(),
      subtitle: t("signsLearned"),
      textColor: colors.lightGreen,
      icon: <ABC size={24} />,
    },
    {
      data: signsToLearn.toString(),
      subtitle: t("signsToLearn"),
      icon: <WordsIcon size={24} />,
      textColor: colors.lightPurple,
    },
  ];
}

export function getTodayActivityItems(userStats: UserStats): StatsItemData[] {
  return [
    {
      data: (userStats.signsLearnedToday ?? 0).toString(),
      subtitle: t("newSigns"),
    },
    {
      data: (userStats.challengesToday ?? 0).toString(),
      subtitle: t("challengesDone"),
    },
    {
      data: (userStats.trainingToday ?? 0).toString(),
      subtitle: t("trainingsShort"),
    },
  ];
}

export function getChallengeAccuracyItems(
  userStats: UserStats,
): StatsItemData[] {
  return [
    {
      data: `${(userStats.challenges.hitsPercentage ?? 0).toString()} %`,
      subtitle: t("hits"),
      textColor: colors.lightGreen,
    },
    {
      data: `${(userStats.challenges.missPercentage ?? 0).toString()} %`,
      subtitle: t("fails"),
      textColor: colors.lightOrange,
    },
  ];
}
