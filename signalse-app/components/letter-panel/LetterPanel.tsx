import { TouchableOpacity, View } from "react-native";
import { styles } from "./letter-panel-styles";
import LetterButton from "./letter-button/LetterButton";
import { constants } from "../../constants/constants";
import { AppText } from "../AppText";
import { ClearFilterIcon } from "../Icons";
import { colors } from "../../styles/colors";
import i18n from "../../i18n";

interface LetterPanelProps {
  letters: string[];
  selectedLetters?: string[];
  onLetterPress?: (letter: string) => void;
  onClear?: () => void;
}

export default function LetterPanel({
  letters,
  selectedLetters = [],
  onLetterPress = () => {},
  onClear,
}: LetterPanelProps) {
  const GRID_GAP = 10;
  const CONTAINER_MARGIN = 30;
  const ITEM_SIZE = 48;
  const availableWidth = constants.windowWidth - CONTAINER_MARGIN;
  const maxColumns = Math.max(
    1,
    Math.floor((availableWidth + GRID_GAP) / (ITEM_SIZE + GRID_GAP)),
  );
  const columns = Math.min(maxColumns, letters.length || 1);
  const columnGap =
    columns > 1 ? (availableWidth - columns * ITEM_SIZE) / (columns - 1) : 0;

  const rows: string[][] = [];
  for (let i = 0; i < letters.length; i += columns) {
    rows.push(letters.slice(i, i + columns));
  }

  return (
    <View>
      {!!onClear && selectedLetters.length > 0 && (
        <View style={styles.header}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.clearButton}
            onPress={onClear}
            accessibilityRole="button"
            accessibilityLabel={i18n.t("clearLetterFilter")}
          >
            <ClearFilterIcon size={16} color={colors.intenseSkyBlue} />
            <AppText style={styles.clearText}>
              {i18n.t("clearLetterFilter")}
            </AppText>
          </TouchableOpacity>
        </View>
      )}
      <View style={styles.grid}>
        {rows.map((row, rowIndex) => {
          const isFullRow = row.length === columns;
          return (
            <View
              key={row.join("")}
              style={[
                styles.row,
                {
                  justifyContent: isFullRow ? "space-between" : "flex-start",
                  marginTop: rowIndex === 0 ? 0 : GRID_GAP,
                },
              ]}
            >
              {row.map((letter, columnIndex) => (
                <View
                  key={letter}
                  style={[
                    styles.item,
                    {
                      marginLeft:
                        isFullRow || columnIndex === 0 ? 0 : columnGap,
                    },
                  ]}
                >
                  <LetterButton
                    letter={letter}
                    size={ITEM_SIZE}
                    pressed={selectedLetters.includes(letter)}
                    onPress={() => onLetterPress(letter)}
                  />
                </View>
              ))}
            </View>
          );
        })}
      </View>
    </View>
  );
}
