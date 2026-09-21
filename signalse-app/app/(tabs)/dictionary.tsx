import { useRef } from "react";
import { ScrollView, View } from "react-native";
import HomeToolbar from "../../components/home-toolbar/HomeToolbar";
import { globalStyles } from "../../styles/global-styles";
import KeyboardScrollWrapper from "../../components/utils/keyboard-scroll-wrapper/KeyboardScrollWrapper";
import AppTitle from "../../components/app-title/AppTitle";
import i18n from "../../i18n";
import AppSearchBar from "../../components/app-search-bar/AppSearchBar";
import { useDictionaryViewModel } from "../../viewmodels/useDictionaryViewModel";
import LetterPanel from "../../components/letter-panel/LetterPanel";
import AppFilterChip from "../../components/app-filter-chip/AppFilterChip";
import { AppText } from "../../components/AppText";
import { styles } from "../../styles/dictionary-styles";
import DictionaryContentOptionPanel from "../../components/dictionary-content-option-panel/DictionaryContentOptionPanel";
import DictResults from "../../components/dict-results/DictResults";
import AppCheckbox from "../../components/app-checkbox/AppCheckbox";
import ScrollTopFab from "../../components/buttons/scroll-top-fab/ScrollTopFab";
import { SCROLL_THRESHOLD } from "../../constants/button-tresholds";
import AppLoadingSpinner from "../../components/app-loading-spinner/AppLoadingSpinner";

export default function Dictionary() {
  const viewModel = useDictionaryViewModel();
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
          <AppTitle accessibilityRole="header">{i18n.t("dictionary")}</AppTitle>
          <AppSearchBar
            onChangeText={viewModel.setSearchText}
            value={viewModel.searchText}
          />
          <AppFilterChip
            categories={viewModel.categories}
            selectedCategories={viewModel.selectedCategories}
            onPress={viewModel.toggleCategorySelection}
          />
          <LetterPanel
            letters={viewModel.alphabet}
            onLetterPress={viewModel.toggleLetterSelection}
            selectedLetters={viewModel.selectedLetters}
            onClear={viewModel.clearSelectedLetters}
          />
          <View style={styles.resultsDisplayOptions}>
            <View style={globalStyles.checkboxContainer}>
              <AppCheckbox
                onValueChange={viewModel.toggleShowLocked}
                value={viewModel.showLocked}
                style={globalStyles.checkBox}
                accessibilityLabel={i18n.t("showLocked")}
              />
              <AppText>{i18n.t("showLocked")}</AppText>
            </View>
            <DictionaryContentOptionPanel
              selectedOption={viewModel.displayMode}
              onPress={viewModel.setDisplayMode}
            />
          </View>

          <View
            style={styles.showingSignsMessageContainer}
            accessible={true}
            accessibilityLabel={`${i18n.t("showing")}${viewModel.numberOfResults} ${viewModel.numberOfResults === 1 ? i18n.t("sign") : i18n.t("signs")}`}
          >
            <AppText>{i18n.t("showing")}</AppText>
            <AppText
              style={styles.signNumberMessage}
            >{`${viewModel.numberOfResults} ${viewModel.numberOfResults === 1 ? i18n.t("sign") : i18n.t("signs")}`}</AppText>
          </View>
          <DictResults
            signsResult={viewModel.signsResult}
            displayMode={viewModel.displayMode}
            showLocked={viewModel.showLocked}
          />
        </View>
      </KeyboardScrollWrapper>
      <ScrollTopFab scrollRef={scrollRef} visible={viewModel.showFab} />
    </View>
  );
}
