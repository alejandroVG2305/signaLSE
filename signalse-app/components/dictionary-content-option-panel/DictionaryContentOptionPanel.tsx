import { TouchableOpacity, View } from "react-native";
import { styles } from "./dictionary-content-option-panel-styles";
import { GridIcon, ListIcon } from "../Icons";
import { colors } from "../../styles/colors";
import i18n from "../../i18n";

interface DictionaryContentOptionPanelProps {
  selectedOption?: string;
  onPress: (option: string) => void;
}

export default function DictionaryContentOptionPanel({
  selectedOption = "grid",
  onPress,
}: DictionaryContentOptionPanelProps) {
  const getColorBySelectedState = (option: string): string =>
    selectedOption === option ? colors.white : colors.shadowGray;
  return (
    <View style={styles.panelContainer}>
      <TouchableOpacity
        style={[
          styles.optionButton,
          selectedOption === "grid" && styles.activeButton,
        ]}
        onPress={() => onPress("grid")}
        accessibilityRole="button"
        accessibilityLabel={i18n.t("gridView")}
        accessibilityState={{ selected: selectedOption === "grid" }}
      >
        <GridIcon color={getColorBySelectedState("grid")} />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.optionButton,
          selectedOption === "list" && styles.activeButton,
        ]}
        onPress={() => onPress("list")}
        accessibilityRole="button"
        accessibilityLabel={i18n.t("listView")}
        accessibilityState={{ selected: selectedOption === "list" }}
      >
        <ListIcon color={getColorBySelectedState("list")} />
      </TouchableOpacity>
    </View>
  );
}
