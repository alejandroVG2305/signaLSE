import { useRef } from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../../styles/global-styles";
import AppLoadingSpinner from "../../components/app-loading-spinner/AppLoadingSpinner";
import HomeToolbar from "../../components/home-toolbar/HomeToolbar";
import AppTitle from "../../components/app-title/AppTitle";
import i18n from "../../i18n";
import KeyboardScrollWrapper from "../../components/utils/keyboard-scroll-wrapper/KeyboardScrollWrapper";
import { AppText } from "../../components/AppText";
import RankingList from "../../components/ranking-list/RankingList";
import useRankingViewModel from "../../viewmodels/useRankingViewModel";
import AppFilterChip from "../../components/app-filter-chip/AppFilterChip";
import {
  getCriteriumByLabel,
  getCriteriumLabel,
  getRankingCriteriaOptions,
} from "../../constants/ranking-params";
import ScrollTopFab from "../../components/buttons/scroll-top-fab/ScrollTopFab";
import { SCROLL_THRESHOLD } from "../../constants/button-tresholds";
import { styles } from "../../styles/ranking-styles";
import { InfoIcon } from "../../components/Icons";
import { colors } from "../../styles/colors";
import RankingInfoDialog from "../../components/dialog/ranking-info-dialog/RankingInfoDialog";

export default function Ranking() {
  const viewModel = useRankingViewModel();
  const scrollRef = useRef<ScrollView>(null);

  return (
    <View style={globalStyles.flex1Container}>
      <AppLoadingSpinner isLoading={viewModel.isLoading} />
      <KeyboardScrollWrapper
        scrollRef={scrollRef}
        onScroll={(e) =>
          viewModel.setShowFab(e.nativeEvent.contentOffset.y > SCROLL_THRESHOLD)
        }
      >
        <HomeToolbar />
        <View style={globalStyles.mainContainer}>
          <View style={styles.rankingTitleContainer}>
            <AppTitle accessibilityRole="header">{i18n.t("ranking")}</AppTitle>
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() => viewModel.setShowRankingInfo(true)}
              accessibilityRole="button"
              accessibilityLabel={i18n.t("rankingIconsTitle")}
            >
              <InfoIcon size={36} color={colors.white} />
            </TouchableOpacity>
          </View>
          <AppText>{i18n.t("rankingSubtitle")}</AppText>
          <AppFilterChip
            categories={getRankingCriteriaOptions().map((o) => o.label)}
            selectedCategories={[
              getCriteriumLabel(viewModel.selectedCriterium),
            ]}
            onPress={(label) => {
              const criterium = getCriteriumByLabel(label);
              if (criterium) viewModel.setSelectedCriterium(criterium);
            }}
          />
          <RankingList ranking={viewModel.ranking} />
        </View>
      </KeyboardScrollWrapper>
      <ScrollTopFab scrollRef={scrollRef} visible={viewModel.showFab} />
      <RankingInfoDialog
        visible={viewModel.showRankingInfo}
        onClose={() => viewModel.setShowRankingInfo(false)}
      />
    </View>
  );
}
