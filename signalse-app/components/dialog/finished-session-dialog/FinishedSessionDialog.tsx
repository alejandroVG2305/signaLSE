import { View } from "react-native";
import i18n from "../../../i18n";
import { AppPetFinishedGame } from "../../app-pet/AppPetFinishedGame";
import { AppText } from "../../AppText";
import AppDialog, { AppDialogProps } from "../app-dialog/AppDialog";
import { styles } from "./finished-session-dialog-styles";
import AppButton from "../../buttons/app_button/AppButon";
import { colors } from "../../../styles/colors";

interface FinishedSessionDialogProps extends AppDialogProps {
  subtitle: string;
  points: number;
  onReturn: () => void;
}

export default function FinishedSessionDialog({
  visible,
  subtitle,
  points,
  onReturn,
}: FinishedSessionDialogProps) {
  return (
    <AppDialog visible={visible} contentStyle={styles.dialogConainer}>
      <AppPetFinishedGame
        style={styles.petIcon}
        accessible={false}
        accessibilityElementsHidden={true}
        importantForAccessibility="no-hide-descendants"
      />
      <AppText style={styles.dialogTitle} accessibilityRole="header">
        {i18n.t("congratulations")}
      </AppText>
      <AppText style={styles.dialogText}>{subtitle}</AppText>
      <View
        style={styles.pointsContainer}
        accessible={true}
        accessibilityLabel={`${i18n.t("points")}: ${points}`}
      >
        <AppText style={styles.dialogText}>{`${i18n.t("points")}:`}</AppText>
        <AppText style={styles.pointsIndicator}>{points}</AppText>
      </View>
      <AppButton
        backgroundColor={colors.mainBlue}
        textColor={colors.white}
        text={i18n.t("return")}
        fontSize={20}
        onPress={onReturn}
      />
    </AppDialog>
  );
}
