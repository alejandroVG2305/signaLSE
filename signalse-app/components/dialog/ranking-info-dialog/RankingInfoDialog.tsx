import { View } from "react-native";
import i18n from "../../../i18n";
import { AppText } from "../../AppText";
import AppDialog, { AppDialogProps } from "../app-dialog/AppDialog";
import { styles } from "./ranking-info-dialog-styles";
import AppButton from "../../buttons/app_button/AppButon";
import { colors } from "../../../styles/colors";
import { Lightning } from "../../svg/Lightning";
import { Bullseye } from "../../svg/Bullseye";
import { TrainingIcon } from "../../svg/TrainingIcon";
import { FireIcon } from "../../svg/FireIcon";

interface RankingInfoDialogProps extends AppDialogProps {
  onClose: () => void;
}

export default function RankingInfoDialog({
  visible,
  onClose,
}: RankingInfoDialogProps) {
  return (
    <AppDialog visible={visible} contentStyle={styles.container}>
      <AppText style={styles.title} accessibilityRole="header">
        {i18n.t("rankingIconsTitle")}
      </AppText>
      <View style={styles.iconLegend}>
        <View style={styles.iconRow}>
          <Lightning size={22} />
          <AppText style={styles.iconText}>
            {i18n.t("rankingIconLightning")}
          </AppText>
        </View>
        <View style={styles.iconRow}>
          <Bullseye size={22} />
          <AppText style={styles.iconText}>
            {i18n.t("rankingIconBullseye")}
          </AppText>
        </View>
        <View style={styles.iconRow}>
          <TrainingIcon size={22} />
          <AppText style={styles.iconText}>
            {i18n.t("rankingIconTraining")}
          </AppText>
        </View>
        <View style={styles.iconRow}>
          <FireIcon size={22} />
          <AppText style={styles.iconText}>{i18n.t("rankingIconFire")}</AppText>
        </View>
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
