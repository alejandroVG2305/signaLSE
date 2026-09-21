import { TouchableOpacity, View } from "react-native";
import { styles } from "./challenge-toolbar-styles";
import { ClockIcon, CloseIcon } from "../Icons";
import { AppProgressBar } from "../app-progress-bar/AppProgressBar";
import { AppText } from "../AppText";
import { colors } from "../../styles/colors";
import i18n from "../../i18n";

interface ChallengeToolbarProps {
  onClose: () => void;
  questionNumber: number;
  totalQuestions: number;
  timeRemaining: number;
  timePerQuestion: number;
}

export default function ChallengeToolbar({
  onClose,
  questionNumber,
  totalQuestions,
  timeRemaining,
  timePerQuestion,
}: ChallengeToolbarProps) {
  const questionProgress =
    totalQuestions > 0 ? (questionNumber / totalQuestions) * 100 : 0;
  const timeProgress =
    timePerQuestion > 0 ? (timeRemaining / timePerQuestion) * 100 : 0;

  return (
    <View style={styles.toolbarContainer}>
      <View style={styles.container}>
        <AppText
          accessibilityLabel={i18n.t("questionXOfY", {
            current: questionNumber,
            total: totalQuestions,
          })}
        >{`${questionNumber}/${totalQuestions}`}</AppText>
        <AppProgressBar
          progress={questionProgress}
          style={styles.progressBar}
        />
        <TouchableOpacity
          onPress={onClose}
          accessibilityRole="button"
          accessibilityLabel={i18n.t("close")}
        >
          <CloseIcon size={24} color={colors.white} />
        </TouchableOpacity>
      </View>
      <View
        style={styles.container}
        accessible={true}
        accessibilityLabel={`${timeRemaining} ${i18n.t("seconds")}`}
      >
        <ClockIcon size={20} color={colors.white} />
        <AppProgressBar
          progress={timeProgress}
          style={styles.progressBar}
          fillColor={colors.lightOrange}
        />
        <AppText>{`${timeRemaining} s`}</AppText>
      </View>
    </View>
  );
}
