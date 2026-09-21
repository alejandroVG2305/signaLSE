import { TouchableOpacity, View } from "react-native";
import { globalStyles } from "../../styles/global-styles";
import KeyboardScrollWrapper from "../../components/utils/keyboard-scroll-wrapper/KeyboardScrollWrapper";
import HomeToolbar from "../../components/home-toolbar/HomeToolbar";
import AppTitle from "../../components/app-title/AppTitle";
import i18n from "../../i18n";
import SectionTitle from "../../components/section-title/SectionTitle";
import { AppText } from "../../components/AppText";
import { useChallengesViewModel } from "../../viewmodels/useChallengesViewModel";
import AppLoadingSpinner from "../../components/app-loading-spinner/AppLoadingSpinner";
import StatsRow from "../../components/stats-row/StatsRow";
import FeatureMenu from "../../components/feature-menu/FeatureMenu";
import AnimatedEntry from "../../components/utils/animated-entry/AnimatedEntry";
import { DELAYS } from "../../constants/animation-delays";
import { FilterIcon } from "../../components/svg/FilterIcon";
import { styles } from "../../styles/challenges-styles";
import { ChallengesCategoryGrid } from "../../components/challenges-category-grid/ChallengesCategoryGrid";
import ChallengeConfigSheet from "../../components/challenge-config-sheet/ChallengeConfigSheet";

export default function Challenges() {
  const viewModel = useChallengesViewModel();

  return (
    <View style={globalStyles.flex1Container}>
      <AppLoadingSpinner isLoading={viewModel.isLoading} />
      <KeyboardScrollWrapper>
        <HomeToolbar />
        <View style={globalStyles.mainContainer}>
          <AppTitle accessibilityRole="header">
            {i18n.t("challengesFeatureTitle")}
          </AppTitle>
          <AppText style={globalStyles.justifiedText}>
            {i18n.t("challengesFeatureSubtitle")}
          </AppText>
          <AnimatedEntry delay={DELAYS.statsRow}>
            <StatsRow statItems={viewModel.statItems} />
          </AnimatedEntry>
          <View style={styles.catAndFilterContainer}>
            <SectionTitle>{i18n.t("categories").toUpperCase()}</SectionTitle>
            <TouchableOpacity
              activeOpacity={0.75}
              onPress={viewModel.toggleConfig}
              accessibilityRole="button"
              accessibilityLabel={i18n.t("filterCategories")}
            >
              <FilterIcon size={42} />
            </TouchableOpacity>
          </View>
          <ChallengesCategoryGrid
            isCategorySelected={viewModel.isCategorySelected}
            onCategorySelect={viewModel.selectCategory}
          />
          <SectionTitle>
            {i18n.t("availableExercises").toUpperCase()}
          </SectionTitle>
          <FeatureMenu features={viewModel.challengeFeatures} />
        </View>
      </KeyboardScrollWrapper>
      <ChallengeConfigSheet
        isOpen={viewModel.configOpen}
        onClose={viewModel.saveConfig}
        difficulty={viewModel.difficulty!}
        setDifficulty={viewModel.setDifficulty}
        questionCount={viewModel.questionCount!}
        setQuestionCount={viewModel.setQuestionCount}
        timePerQuestion={viewModel.timePerQuestion!}
        setTimePerQuestion={viewModel.setTimePerQuestion}
        soundsActive={viewModel.soundsActive}
        toggleActive={viewModel.toggleSoundsActive}
      />
    </View>
  );
}
