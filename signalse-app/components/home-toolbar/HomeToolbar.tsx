import { View } from "react-native";
import AppLogo from "../app-logo/AppLogo";
import ToolbarButton from "../buttons/toolbar_button/ToolbarButton";
import { styles } from "./home-toolbar-styles";
import { useLogout } from "../../hooks/useLogout";
import { globalStyles } from "../../styles/global-styles";
import { useRouter } from "expo-router";
import { colors } from "../../styles/colors";
import i18n from "../../i18n";

export default function HomeToolbar() {
  const logout = useLogout();
  const router = useRouter();
  return (
    <View style={globalStyles.toolbarContainer}>
      <AppLogo accessibilityRole="image" accessibilityLabel="SignaLSE" />
      <View style={styles.buttonContainer}>
        <ToolbarButton
          style={styles.profileButton}
          icon="person-outline"
          onPress={() => router.push("/profile")}
          accessibilityLabel={i18n.t("profile")}
        />
        <ToolbarButton
          style={styles.logoutButton}
          icon="exit-outline"
          iconColor={colors.darkMainBlue}
          onPress={logout}
          accessibilityLabel={i18n.t("logout")}
        />
      </View>
    </View>
  );
}
