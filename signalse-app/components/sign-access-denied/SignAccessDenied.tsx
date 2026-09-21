import { View } from "react-native";
import { globalStyles } from "../../styles/global-styles";
import AppTitle from "../app-title/AppTitle";
import { AppText } from "../AppText";
import { AppPetCircleIndicator } from "../app-pet/AppPet";
import i18n from "../../i18n";
import { styles } from "./sign-access-denied-styles";

export default function SignAccessDenied() {
  return (
    <View style={[globalStyles.mainContainer, styles.container]}>
      <AppPetCircleIndicator
        style={styles.petIcon}
        accessible={false}
        accessibilityElementsHidden={true}
        importantForAccessibility="no-hide-descendants"
      />
      <AppTitle style={styles.title} accessibilityRole="header">
        {i18n.t("signAccessDenied")}
      </AppTitle>
      <AppText style={[globalStyles.justifiedText, styles.text]}>
        {i18n.t("signAccessDeniedSubtitle")}
      </AppText>
    </View>
  );
}
