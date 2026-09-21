import { Image, View } from "react-native";
import { styles } from "./ranking-item-styles";
import { AppText } from "../AppText";
import React from "react";
import { BronzeMedalIcon, GoldMedalIcon, SilverMedalIcon } from "../svg/Medals";
import { FireIcon } from "../svg/FireIcon";
import i18n from "../../i18n";
import { Lightning } from "../svg/Lightning";
import { Bullseye } from "../svg/Bullseye";
import { TrainingIcon } from "../svg/TrainingIcon";

import { AVATAR_MAP } from "../../constants/avatar-map";

const MEDAL_SIZE = 28;

const placeIndicatorMap: Record<number, React.ReactNode> = {
  1: <GoldMedalIcon size={MEDAL_SIZE} />,
  2: <SilverMedalIcon size={MEDAL_SIZE} />,
  3: <BronzeMedalIcon size={MEDAL_SIZE} />,
};

interface RankingItemProps {
  rankingPlace: number;
  avatar: string;
  name: string;
  totalPoints: number;
  challengesCompleted: number;
  trainingsCompleted: number;
  hitsPercentage: number;
  xpLevel: number;
  streak: number;
}

export default function RankingItem({
  rankingPlace,
  avatar,
  name,
  totalPoints,
  challengesCompleted,
  trainingsCompleted,
  hitsPercentage,
  xpLevel,
  streak,
}: RankingItemProps) {
  const accessibilityLabel = `${i18n.t("rankingPlace")} ${rankingPlace}: ${name}. ${i18n.t(
    "level",
  )} ${xpLevel}. ${i18n.t("rankingIconLightning")}: ${challengesCompleted}. ${i18n.t(
    "rankingIconBullseye",
  )}: ${hitsPercentage}%. ${i18n.t(
    "rankingIconTraining",
  )}: ${trainingsCompleted}. ${i18n.t("daysOfStreak")}: ${streak}. ${i18n.t(
    "totalPoints",
  )}: ${totalPoints}.`;

  return (
    <View
      style={styles.container}
      accessible={true}
      accessibilityLabel={accessibilityLabel}
    >
      <View style={styles.leftContainer}>
        <View style={styles.placeContainer}>
          {placeIndicatorMap[rankingPlace] ?? (
            <AppText style={styles.placeText}>{rankingPlace}</AppText>
          )}
        </View>
        <View style={styles.avatarContainer}>
          <Image
            source={AVATAR_MAP[avatar]}
            style={styles.avatar}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={styles.centerContainer}>
        <AppText style={styles.nameText}>{name}</AppText>
        <View style={styles.row}>
          <Lightning size={18} />
          <AppText>{challengesCompleted}</AppText>
          <Bullseye size={18} />
          <AppText>{`${hitsPercentage} %`}</AppText>
        </View>
        <View style={styles.row}>
          <TrainingIcon size={18} />
          <AppText>{trainingsCompleted}</AppText>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <View style={styles.row}>
          <AppText style={styles.rowText}>{i18n.t("lv")}</AppText>
          <AppText style={styles.lvText}>{xpLevel}</AppText>
        </View>
        <View style={styles.row}>
          <FireIcon size={18} />
          <AppText style={styles.streakText}>{streak}</AppText>
        </View>
        <AppText style={styles.pointsText}>{`${totalPoints} pts`}</AppText>
      </View>
    </View>
  );
}
