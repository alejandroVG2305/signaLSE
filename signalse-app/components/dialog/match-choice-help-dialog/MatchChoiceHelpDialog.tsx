import { View } from "react-native";
import i18n from "../../../i18n";
import { AppText } from "../../AppText";
import AppDialog, { AppDialogProps } from "../app-dialog/AppDialog";
import { styles } from "./match-choice-help-dialog-styles";
import AppButton from "../../buttons/app_button/AppButon";
import { colors } from "../../../styles/colors";

interface MatchChoiceHelpDialogProps extends AppDialogProps {
  onClose: () => void;
}

export default function MatchChoiceHelpDialog({
  visible,
  onClose,
}: MatchChoiceHelpDialogProps) {
  return (
    <AppDialog visible={visible} contentStyle={styles.container}>
      <AppText style={styles.title} accessibilityRole="header">
        {i18n.t("matchChoiceHelpTitle")}
      </AppText>
      <View style={styles.stepsList}>
        <AppText style={styles.stepText}>
          {i18n.t("matchChoiceHelpStep1")}
        </AppText>
        <AppText style={styles.stepText}>
          {i18n.t("matchChoiceHelpStep2")}
        </AppText>
        <AppText style={styles.stepText}>
          {i18n.t("matchChoiceHelpStep3")}
        </AppText>
      </View>

      <AppButton
        backgroundColor={colors.mainBlue}
        textColor={colors.white}
        text={i18n.t("close")}
        fontSize={18}
        onPress={onClose}
        width={150}
        height={60}
      />
    </AppDialog>
  );
}
