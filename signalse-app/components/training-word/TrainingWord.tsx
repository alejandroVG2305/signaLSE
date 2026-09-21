import { View } from "react-native";
import { AppText } from "../AppText";
import { styles } from "./training-word-styles";
import { colors } from "../../styles/colors";
import i18n from "../../i18n";

interface TrainingWordProps {
  word: string;
  currentLetterIndex: number;
}

export default function TrainingWord({
  word,
  currentLetterIndex,
}: TrainingWordProps) {
  return (
    <View
      style={styles.wordContainer}
      accessible={true}
      accessibilityLabel={`${word.toUpperCase()}. ${i18n.t("letter")} ${currentLetterIndex + 1} ${i18n.t("of")} ${word.length}`}
    >
      <View style={styles.trainingWord}>
        {word.split("").map((letter, i) => (
          <AppText
            key={i}
            style={[
              styles.trainingLetter,
              {
                color:
                  i <= currentLetterIndex
                    ? colors.white
                    : colors.pendingLetterGray,
              },
            ]}
          >
            {letter.toUpperCase()}
          </AppText>
        ))}
      </View>
    </View>
  );
}
