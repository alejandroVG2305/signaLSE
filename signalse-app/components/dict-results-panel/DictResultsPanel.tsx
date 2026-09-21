import { View } from "react-native";
import { AppText } from "../AppText";
import i18n from "../../i18n";
import { styles } from "./dict-results-panel-styles";
import SignGrid from "../sign-grid/SignGrid";
import SignList from "../sign-list/SignList";
import { SignUI } from "../../model/domain/signs/sign";

interface DictResultsPanelProps {
  letter: string;
  signs: SignUI[];
  displayMode: string;
}

export default function DictResultsPanel({
  letter,
  displayMode,
  signs,
}: DictResultsPanelProps) {
  return (
    <View style={styles.panel}>
      <View style={styles.panelHeader}>
        <View
          style={styles.letterIndicatorCard}
          accessible={false}
          accessibilityElementsHidden={true}
          importantForAccessibility="no-hide-descendants"
        >
          <AppText
            style={[styles.letterIndicatorText, styles.letterIndicatorCardText]}
          >
            {letter.toUpperCase()}
          </AppText>
        </View>
        <AppText
          style={styles.letterIndicatorText}
          accessibilityRole="header"
        >{`${i18n.t("letter")} ${letter.toUpperCase()}`}</AppText>
      </View>
      {displayMode === "grid" ? (
        <SignGrid signs={signs} />
      ) : (
        <SignList signs={signs} />
      )}
    </View>
  );
}
