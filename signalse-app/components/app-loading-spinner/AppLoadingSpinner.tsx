import { ActivityIndicator, StyleSheet, View } from "react-native";
import { colors } from "../../styles/colors";
import { styles } from "./app-loading-spinner-styles";
import i18n from "../../i18n";

interface AppLoadingSpinnerProps {
  isLoading: boolean;
}

export default function AppLoadingSpinner({
  isLoading,
}: AppLoadingSpinnerProps) {
  if (!isLoading) return null;

  return (
    <View
      style={[styles.overlay, StyleSheet.absoluteFillObject]}
      pointerEvents="box-only"
      accessible={true}
      accessibilityLabel={i18n.t("loading")}
      accessibilityLiveRegion="polite"
    >
      <ActivityIndicator size="large" color={colors.white} />
    </View>
  );
}
