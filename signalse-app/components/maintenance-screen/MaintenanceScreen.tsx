import { View } from "react-native";
import { useRouter } from "expo-router";
import { globalStyles } from "../../styles/global-styles";
import AppTitle from "../app-title/AppTitle";
import { AppText } from "../AppText";
import { AppPetCircleIndicator } from "../app-pet/AppPet";
import SimpleToolbar from "../simple-toolbar/SimpleToolbar";
import { useLogout } from "../../hooks/useLogout";
import i18n from "../../i18n";
import { styles } from "./maintenance-screen-styles";

export default function MaintenanceScreen() {
  const router = useRouter();
  const logout = useLogout();

  const handleBack = async () => {
    await logout();
    router.replace("/welcome");
  };

  return (
    <View style={globalStyles.flex1Container}>
      <SimpleToolbar onBack={handleBack} />
      <View style={styles.container}>
        <AppPetCircleIndicator
          style={styles.petIcon}
          accessible={false}
          accessibilityElementsHidden={true}
          importantForAccessibility="no-hide-descendants"
        />
        <AppTitle style={styles.title} accessibilityRole="header">
          {i18n.t("maintenance.title")}
        </AppTitle>
        <AppText style={[globalStyles.justifiedText, styles.text]}>
          {i18n.t("maintenance.subtitle")}
        </AppText>
      </View>
    </View>
  );
}
