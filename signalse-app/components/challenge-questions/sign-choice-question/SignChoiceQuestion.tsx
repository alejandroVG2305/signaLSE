import { useState } from "react";
import { LayoutChangeEvent, TouchableOpacity, View } from "react-native";
import SignVideo from "../../sign-video/SignVideo";
import { CELL_GAP, styles } from "./sign-choice-question";
import { CheckmarkIcon, CrossIcon } from "../../Icons";
import { colors } from "../../../styles/colors";
import i18n from "../../../i18n";

export interface SignOption {
  id: string;
  mediaUrl: string;
}

interface Props {
  options: SignOption[];
  selectedId: string | null;
  correctOptionId: string | null;
  onOptionPress: (id: string) => void;
  isAnswered: boolean;
  isCorrect: boolean;
}

export default function SignChoiceQuestion({
  options,
  selectedId,
  correctOptionId,
  onOptionPress,
  isAnswered,
  isCorrect,
}: Props) {
  const [containerWidth, setContainerWidth] = useState(0);

  const cellSize = containerWidth > 0 ? (containerWidth - CELL_GAP) / 2 : 0;

  const rows: SignOption[][] = [];
  for (let i = 0; i < options.length; i += 2) {
    rows.push(options.slice(i, i + 2));
  }

  const handleLayout = (e: LayoutChangeEvent) =>
    setContainerWidth(e.nativeEvent.layout.width);

  return (
    <View>
      <View style={styles.card}>
        <View style={styles.grid} onLayout={handleLayout}>
          {containerWidth > 0 && rows.map((row, rowIndex) => (
            <View key={rowIndex} style={styles.row}>
              {row.map((opt) => {
                const isSelected = opt.id === selectedId;
                const isCorrectOption =
                  isAnswered && opt.id === correctOptionId;
                const isWrongOption = isAnswered && isSelected && !isCorrect;
                return (
                  <TouchableOpacity
                    key={opt.id}
                    activeOpacity={0.85}
                    style={{ width: cellSize, height: cellSize }}
                    onPress={() => onOptionPress(opt.id)}
                    disabled={isAnswered}
                    accessibilityRole="button"
                    accessibilityState={{
                      selected: isSelected,
                      disabled: isAnswered,
                    }}
                    accessibilityLabel={
                      isCorrectOption
                        ? `${i18n.t("option")} ${options.indexOf(opt) + 1}. ${i18n.t("correctOption")}`
                        : isWrongOption
                        ? `${i18n.t("option")} ${options.indexOf(opt) + 1}. ${i18n.t("incorrectOption")}`
                        : `${i18n.t("option")} ${options.indexOf(opt) + 1}`
                    }
                  >
                    <SignVideo
                      videoUrl={opt.mediaUrl}
                      loop
                      style={{ width: cellSize, height: cellSize }}
                    />
                    {isSelected && !isAnswered && (
                      <View
                        style={[
                          styles.borderOverlay,
                          styles.borderOverlaySelected,
                        ]}
                      />
                    )}
                    {isCorrectOption && (
                      <View
                        style={[
                          styles.borderOverlay,
                          styles.borderOverlayCorrect,
                        ]}
                      />
                    )}
                    {isWrongOption && (
                      <View
                        style={[
                          styles.borderOverlay,
                          styles.borderOverlayWrong,
                        ]}
                      />
                    )}
                    {isCorrectOption && (
                      <View
                        style={[styles.resultBadge, styles.resultBadgeCorrect]}
                      >
                        <CheckmarkIcon size={16} color={colors.darkMainBlue} />
                      </View>
                    )}
                    {isWrongOption && (
                      <View
                        style={[styles.resultBadge, styles.resultBadgeWrong]}
                      >
                        <CrossIcon size={16} color={colors.darkMainBlue} />
                      </View>
                    )}
                  </TouchableOpacity>
                );
              })}
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
