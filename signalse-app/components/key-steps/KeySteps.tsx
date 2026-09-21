import { View } from "react-native";
import i18n from "../../i18n";
import { colors } from "../../styles/colors";
import { AppText } from "../AppText";
import { styles } from "./key-steps-styles";
import { BulbIcon } from "../Icons";

interface KeyStepsProps {
  steps: string[];
}

export default function KeySteps({ steps }: KeyStepsProps) {
  return (
    <View style={styles.keyStepsSection}>
      <View
        style={styles.keyStepsHeader}
        accessible={true}
        accessibilityRole="header"
        accessibilityLabel={i18n.t("keySteps")}
      >
        <BulbIcon color={colors.yellow} />
        <AppText style={styles.keyStepsTitle}>{i18n.t("keySteps")}</AppText>
      </View>
      <View style={styles.keyStepsContent}>
        {steps.map((step, i) => (
          <AppText key={`step-${i + 1}`}>{`${i + 1}. ${step}`}</AppText>
        ))}
      </View>
    </View>
  );
}
