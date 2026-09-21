import { View } from "react-native";
import HomeToolbar from "../../components/home-toolbar/HomeToolbar";
import { globalStyles } from "../../styles/global-styles";
import { useHomeViewModel } from "../../viewmodels/useHomeViewModel";
import { AppText } from "../../components/AppText";
import KeyboardScrollWrapper from "../../components/utils/keyboard-scroll-wrapper/KeyboardScrollWrapper";
import { styles } from "../../styles/home-view-styles";
import i18n from "../../i18n";
import AppTitle from "../../components/app-title/AppTitle";
import HomeStreakInfo from "../../components/home-info/home-streak-info/HomeStreakInfo";
import SectionTitle from "../../components/section-title/SectionTitle";
import FeatureMenu from "../../components/feature-menu/FeatureMenu";
import DailyGoalsGrid from "../../components/home-info/home-daily-goal-info/daily-goals-grid/DailyGoalsGrid";
import AnimatedEntry from "../../components/utils/animated-entry/AnimatedEntry";
import { DELAYS } from "../../constants/animation-delays";
import XpInfo from "../../components/home-info/home-xp-info/XpInfo";
import { HOME_FEATURES } from "../../components/feature-menu/Features";
import AppLoadingSpinner from "../../components/app-loading-spinner/AppLoadingSpinner";

export default function Index() {
  const viewModel = useHomeViewModel();
  return (
    <View style={globalStyles.flex1Container}>
      <AppLoadingSpinner isLoading={viewModel.isLoading} />
      <KeyboardScrollWrapper>
        <HomeToolbar />
        {!viewModel.isLoading && (
          <View style={globalStyles.mainContainer}>
            <AppText style={styles.date}>{viewModel.date}</AppText>
            <AppTitle accessibilityRole="header">{`${i18n.t("goodMorning")} ${viewModel.name}!`}</AppTitle>
            <AnimatedEntry delay={DELAYS.streak}>
              <HomeStreakInfo streakCount={viewModel.stats?.streak.current!} />
            </AnimatedEntry>
            <AnimatedEntry delay={DELAYS.streak}>
              <XpInfo
                level={viewModel.stats?.xp.level!}
                currentXp={viewModel.stats?.xp.total!}
                remainingXp={viewModel.stats?.xp.toNextLvl!}
              />
            </AnimatedEntry>
            <SectionTitle>{i18n.t("learn").toUpperCase()}</SectionTitle>
            <FeatureMenu features={HOME_FEATURES} />
            <SectionTitle>
              {i18n.t("dailyGoals.title").toUpperCase()}
            </SectionTitle>
            <DailyGoalsGrid dailyGoalData={viewModel.dailyGoals} />
          </View>
        )}
      </KeyboardScrollWrapper>
    </View>
  );
}
