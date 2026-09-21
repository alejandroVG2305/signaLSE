import { styles } from "./remember-me-checkbox-styles";
import { View } from "react-native";
import { globalStyles } from "../../styles/global-styles";
import { AppText } from "../AppText";
import i18n from "../../i18n";
import AppCheckbox from "../app-checkbox/AppCheckbox";

interface RememberMeCheckboxProps {
  value: boolean;
  onValueChange: (newValue: boolean) => void;
}

export default function RememberMeCheckbox(props: RememberMeCheckboxProps) {
  return (
    <View style={globalStyles.checkboxContainer}>
      <AppCheckbox
        value={props.value}
        onValueChange={props.onValueChange}
        style={globalStyles.checkBox}
        accessibilityLabel={i18n.t("rememberMe")}
      />
      <AppText style={styles.rememberMeText}>{i18n.t("rememberMe")}</AppText>
    </View>
  );
}
