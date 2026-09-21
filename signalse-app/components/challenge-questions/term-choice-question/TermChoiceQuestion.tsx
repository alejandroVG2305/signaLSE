import { TouchableOpacity, View } from "react-native";
import SignVideo from "../../sign-video/SignVideo";
import { styles } from "./term-choice-question";
import { AppText } from "../../AppText";
import { CheckmarkIcon, CrossIcon } from "../../Icons";
import { colors } from "../../../styles/colors";
import i18n from "../../../i18n";

export interface TermOption {
  id: string;
  term: string;
}

interface TermQuestionProps {
  mediaUrl: string;
  options: TermOption[];
  selectedId: string | null;
  correctOptionId: string | null;
  onOptionPress: (id: string) => void;
  isAnswered: boolean;
  isCorrect: boolean;
}

export default function TermChoiceQuestion({
  mediaUrl,
  options,
  selectedId,
  correctOptionId,
  onOptionPress,
  isAnswered,
  isCorrect,
}: TermQuestionProps) {
  return (
    <View style={styles.container}>
      <SignVideo videoUrl={mediaUrl} loop={true} style={styles.signVideo} />
      <View style={styles.optionsContainer}>
        {options.map((opt) => {
          const isSelected = opt.id === selectedId;
          const isCorrectOption = isAnswered && opt.id === correctOptionId;
          const isWrongOption = isAnswered && isSelected && !isCorrect;
          return (
            <TouchableOpacity
              key={opt.id}
              style={[
                styles.optionButton,
                isSelected && !isAnswered && styles.optionButtonSelected,
                isCorrectOption && styles.optionButtonCorrect,
                isWrongOption && styles.optionButtonWrong,
              ]}
              activeOpacity={0.85}
              onPress={() => onOptionPress(opt.id)}
              disabled={isAnswered}
              accessibilityRole="button"
              accessibilityState={{ selected: isSelected, disabled: isAnswered }}
              accessibilityLabel={
                isCorrectOption
                  ? `${opt.term}. ${i18n.t("correctOption")}`
                  : isWrongOption
                  ? `${opt.term}. ${i18n.t("incorrectOption")}`
                  : opt.term
              }
            >
              <AppText
                style={[
                  styles.optionText,
                  isCorrectOption && styles.optionTextCorrect,
                  isWrongOption && styles.optionTextWrong,
                ]}
              >
                {opt.term}
              </AppText>
              {isCorrectOption && (
                <View style={[styles.resultBadge, styles.resultBadgeCorrect]}>
                  <CheckmarkIcon size={16} color={colors.darkMainBlue} />
                </View>
              )}
              {isWrongOption && (
                <View style={[styles.resultBadge, styles.resultBadgeWrong]}>
                  <CrossIcon size={16} color={colors.darkMainBlue} />
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}
