import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { AppText } from "../AppText";
import { TickIcon } from "../svg/TickIcon";
import { styles } from "./training-footer-styles";
import useTrainingSessionViewModel from "../../viewmodels/useTrainingSessionViewModel";
import { useCorrectAnswerAnimation } from "../../hooks/animations/useCorrectAnswerAnimation";
import Animated from "react-native-reanimated";
import i18n from "../../i18n";

interface TrainingFooterProps {
  viewModel: ReturnType<typeof useTrainingSessionViewModel>;
}

export default function TrainingFooter({ viewModel }: TrainingFooterProps) {
  const {
    localValue: localLetter,
    contentAnimatedStyle,
    feedbackAnimatedStyle,
  } = useCorrectAnswerAnimation({
    correct: viewModel.correct,
    getValue: viewModel.getCurrentLetter,
    valueDeps: [viewModel.currentLetterIndex, viewModel.currentWordIndex],
    loadDeps: [viewModel.wordsToSpell],
  });

  return (
    <SafeAreaView style={styles.footer} edges={["bottom"]}>
      <View style={styles.letterBoxContainer}>
        <View style={styles.letterCircleContainer}>
          <Animated.View
            style={[styles.faceContainer, contentAnimatedStyle]}
            accessible={!viewModel.correct}
            accessibilityElementsHidden={viewModel.correct}
            importantForAccessibility={
              viewModel.correct ? "no-hide-descendants" : "yes"
            }
            accessibilityLabel={`${i18n.t("letter")}: ${localLetter}`}
          >
            <AppText style={styles.letter}>{localLetter}</AppText>
          </Animated.View>
          <Animated.View
            style={[styles.faceContainer, feedbackAnimatedStyle]}
            accessible={viewModel.correct}
            accessibilityElementsHidden={!viewModel.correct}
            importantForAccessibility={
              viewModel.correct ? "yes" : "no-hide-descendants"
            }
            accessibilityLabel={
              !viewModel.isFreeMode
                ? `${i18n.t("correctMessage")} +${viewModel.lastEarnedPoints}`
                : i18n.t("correctMessage")
            }
          >
            <TickIcon size={30} />
            {!viewModel.isFreeMode && (
              <AppText style={styles.pointsText}>
                +{viewModel.lastEarnedPoints}
              </AppText>
            )}
          </Animated.View>
        </View>
      </View>
    </SafeAreaView>
  );
}
