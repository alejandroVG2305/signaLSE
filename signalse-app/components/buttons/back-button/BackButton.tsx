import { Pressable } from "react-native";
import { BackArrowIcon } from "../../Icons";
import i18n from "../../../i18n";
import { AppText } from "../../AppText";
import { styles } from "./back-button-styles";

interface BackPuttonProps {
  onPress: () => void;
}
export default function BackButton({ onPress }: BackPuttonProps) {
  return (
    <Pressable
      style={styles.backButtonContainer}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={i18n.t("return")}
    >
      <BackArrowIcon />
      <AppText>{i18n.t("return")}</AppText>
    </Pressable>
  );
}
