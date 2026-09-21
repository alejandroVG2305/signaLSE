import { View, Pressable, ViewProps } from "react-native";
import AppLogo from "../app-logo/AppLogo";
import { styles } from "./simple-toolbar-styles";
import { Link } from "expo-router";
import { BackArrowIcon } from "../Icons";
import { AppText } from "../AppText";
import i18n from "../../i18n";

interface SimpleToolbarProps extends ViewProps {
  backLink?: string;
  onBack?: () => void;
}

export default function SimpleToolbar({
  backLink = "/",
  onBack,
  ...props
}: SimpleToolbarProps) {
  const backButton = (
    <Pressable
      style={styles.backContainer}
      onPress={onBack}
      accessibilityRole="button"
      accessibilityLabel={i18n.t("return")}
    >
      <BackArrowIcon></BackArrowIcon>
      <AppText>{i18n.t("return")}</AppText>
    </Pressable>
  );

  return (
    <View {...props} style={[styles.toolbar, props.style]}>
      {onBack ? (
        backButton
      ) : (
        <Link href={backLink} asChild>
          {backButton}
        </Link>
      )}
      <AppLogo
        style={styles.appLogo}
        accessibilityRole="image"
        accessibilityLabel="SignaLSE"
      ></AppLogo>
    </View>
  );
}
