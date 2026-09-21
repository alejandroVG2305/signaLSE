import { View } from "react-native";
import AppBottomSheet from "../bottom-sheet/AppBottomSheet";
import AppFilterChip from "../app-filter-chip/AppFilterChip";
import SectionTitle from "../section-title/SectionTitle";
import AppButton from "../buttons/app_button/AppButon";
import { AppText } from "../AppText";
import i18n from "../../i18n";
import {
  getDifficultyOptions,
  QUESTION_COUNT_OPTIONS,
  TIME_OPTIONS,
} from "../../constants/challenge-configuration-params";
import { styles } from "./challenge-config-sheet-styles";
import AppToggle from "../app-toggle/AppToggle";
import { VolumeIcon } from "../Icons";
import { colors } from "../../styles/colors";

const SNAP_POINTS = ["70%"];

interface ChallengeConfigSheetProps {
  isOpen: boolean;
  difficulty: string;
  setDifficulty: (s: string) => void;
  timePerQuestion: string;
  setTimePerQuestion: (s: string) => void;
  questionCount: string;
  setQuestionCount: (s: string) => void;
  soundsActive: boolean;
  toggleActive: () => void;
  onClose: () => void;
}

export default function ChallengeConfigSheet({
  isOpen,
  difficulty,
  setDifficulty,
  timePerQuestion,
  setTimePerQuestion,
  questionCount,
  setQuestionCount,
  onClose,
  soundsActive,
  toggleActive,
}: ChallengeConfigSheetProps) {
  const difficultyOptions = getDifficultyOptions();

  return (
    <AppBottomSheet isOpen={isOpen} onClose={onClose} snapPoints={SNAP_POINTS}>
      <AppText style={styles.title} accessibilityRole="header">
        {i18n.t("challengeConfigurationTitle")}
      </AppText>

      <View style={styles.section}>
        <SectionTitle>{i18n.t("difficultyLabel").toUpperCase()}</SectionTitle>
        <AppFilterChip
          categories={difficultyOptions}
          selectedCategories={[difficulty]}
          onPress={setDifficulty}
          variant="secondary"
        />
      </View>

      <View style={styles.section}>
        <SectionTitle>
          {i18n.t("timePerQuestionLabel").toUpperCase()}
        </SectionTitle>
        <AppFilterChip
          categories={TIME_OPTIONS}
          selectedCategories={[timePerQuestion]}
          onPress={setTimePerQuestion}
          variant="secondary"
        />
      </View>

      <View style={styles.section}>
        <SectionTitle>
          {i18n.t("numberOfQuestionsLabel").toUpperCase()}
        </SectionTitle>
        <AppFilterChip
          categories={QUESTION_COUNT_OPTIONS}
          selectedCategories={[questionCount]}
          onPress={setQuestionCount}
          variant="secondary"
        />
      </View>

      <View style={styles.soundContainer}>
        <View
          style={styles.soundLabelContainer}
          accessible={true}
          accessibilityLabel={i18n.t("sounds")}
        >
          <VolumeIcon size={20} color={colors.intenseSkyBlue} />
          <AppText>{i18n.t("sounds")}</AppText>
        </View>
        <AppToggle
          value={soundsActive}
          onValueChange={toggleActive}
          accessibilityLabel={i18n.t("sounds")}
        />
      </View>

      <View style={styles.buttonContainer}>
        <AppButton
          text={i18n.t("apply")}
          onPress={onClose}
          width={200}
          height={50}
        />
      </View>
    </AppBottomSheet>
  );
}
