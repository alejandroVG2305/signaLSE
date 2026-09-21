import { View } from "react-native";
import SectionTitle from "../../section-title/SectionTitle";
import i18n from "../../../i18n";
import { AppText } from "../../AppText";
import { UserStats } from "../../../model/domain/users/userStats";
import { AppProgressBar } from "../../app-progress-bar/AppProgressBar";
import { styles } from "./profile-stats-styles";
import { XpIcon } from "../../svg/XpIcon";
import StatsRow from "../../stats-row/StatsRow";
import { StatSection } from "./stat-section/StatSection";
import { TotalStatRow } from "./total-stat-row/TotalStatRow";
import { styles as totalStatRowStyles } from "./total-stat-row/total-stat-row-styles";
import {
  getChallengeAccuracyItems,
  getSignsItems,
  getStatsSummaryItems,
  getTodayActivityItems,
} from "./profile-stats-items";
import AnimatedEntry from "../../utils/animated-entry/AnimatedEntry";
import { DELAYS } from "../../../constants/animation-delays";
import AppTitle from "../../app-title/AppTitle";

export interface ProfileStatsProps {
  userStats: UserStats;
  signsToLearn: number;
}

const t = (key: string) => i18n.t(key).toUpperCase();

export default function ProfileStats({
  userStats,
  signsToLearn,
}: ProfileStatsProps) {
  return (
    <View>
      <AppTitle style={styles.title} accessibilityRole="header">
        {i18n.t("statistics")}
      </AppTitle>
      <AnimatedEntry delay={DELAYS.profileLevel}>
        <SectionTitle>{t("currentLevel")}</SectionTitle>
        <View style={styles.section}>
          <View
            style={styles.row}
            accessible={true}
            accessibilityLabel={`${i18n.t("level")} ${userStats.xp.level}. ${userStats.xp.total}/${userStats.xp.toNextLvl} XP. +${userStats.xp.today} XP ${i18n.t("today")}`}
          >
            <View style={styles.levelTitle}>
              <XpIcon size={32} />
              <AppText style={styles.levelText}>{i18n.t("level")}</AppText>
              <AppText style={styles.levelNumber}>{userStats.xp.level}</AppText>
            </View>
            <View style={styles.xpIndicatorContainer}>
              <AppText>{`${userStats.xp.total}/${userStats.xp.toNextLvl} XP`}</AppText>
              <AppText>{`+${userStats.xp.today} XP ${i18n.t("today")}`}</AppText>
            </View>
          </View>
          <AppProgressBar
            progress={
              userStats.xp.toNextLvl > 0
                ? Math.min(
                    Math.max(
                      (userStats.xp.total / userStats.xp.toNextLvl) * 100,
                      0,
                    ),
                    100,
                  )
                : 0
            }
          />
        </View>
      </AnimatedEntry>

      <AnimatedEntry delay={DELAYS.profileStatsSummary}>
        <StatSection title={t("statsSummary")}>
          <StatsRow fullWidth statItems={getStatsSummaryItems(userStats)} />
          <StatsRow
            fullWidth
            statItems={getSignsItems(userStats, signsToLearn)}
          />
        </StatSection>
      </AnimatedEntry>

      <AnimatedEntry delay={DELAYS.profileTodayActivity}>
        <StatSection title={t("todayActivity")}>
          <StatsRow fullWidth statItems={getTodayActivityItems(userStats)} />
        </StatSection>
      </AnimatedEntry>

      <AnimatedEntry delay={DELAYS.profileTotalActivities}>
        <StatSection title={t("totalActivities")}>
          <TotalStatRow
            label={i18n.t("challengesDone")}
            value={userStats.challenges.totalCompleted}
          />
          <TotalStatRow
            label={i18n.t("trainingsCompleted")}
            value={userStats.trainings.totalCompleted}
          />
        </StatSection>
      </AnimatedEntry>

      <AnimatedEntry delay={DELAYS.profileChallengeAccuracy}>
        <StatSection title={t("challengeAccuracy")}>
          <StatsRow
            fullWidth
            statItems={getChallengeAccuracyItems(userStats)}
          />
          <TotalStatRow
            label={i18n.t("totalHits")}
            value={userStats.challenges.totalCompleted}
            valueStyle={totalStatRowStyles.totalHitsNumber}
          />
          <TotalStatRow
            label={i18n.t("totalFails")}
            value={userStats.trainings.totalCompleted}
            valueStyle={totalStatRowStyles.totalFailsNumber}
          />
        </StatSection>
      </AnimatedEntry>
    </View>
  );
}
