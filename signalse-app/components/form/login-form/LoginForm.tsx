import i18n from "../../../i18n";
import AppButton from "../../buttons/app_button/AppButon";
import AppFormField from "../app-form-field/AppFormField";
import AppForm from "../app-form/AppForm";
import { styles } from "./login-form-styles";
import { constants } from "../../../constants/constants";
import RememberMeCheckbox from "../../remember-me-checkbox/RememberMeCheckbox";
import { View } from "react-native";
import useLoginViewModel from "../../../viewmodels/useLoginViewModel";

interface LoginFormProps {
  viewModel: ReturnType<typeof useLoginViewModel>;
}

export default function LoginForm({ viewModel }: LoginFormProps) {
  const buttonWidth = constants.windowWidth - 76;
  return (
    <AppForm style={styles.loginForm}>
      <AppFormField
        label={i18n.t("email").toUpperCase()}
        icon="person-outline"
        placeholder={i18n.t("email")}
        autoCapitalize="none"
        value={viewModel.userId}
        onChangeText={viewModel.setUserId}
      />
      <AppFormField
        isPassword
        label={i18n.t("password").toUpperCase()}
        placeholder={i18n.t("password")}
        icon="lock-closed-outline"
        value={viewModel.password}
        onChangeText={viewModel.setPassword}
      />
      <View style={styles.loginOptionsContainer}>
        <RememberMeCheckbox
          onValueChange={viewModel.setRememberMe}
          value={viewModel.rememberMe}
        />
      </View>
      <AppButton
        text={i18n.t("login")}
        width={buttonWidth}
        fontSize={21}
        onPress={viewModel.handleLogin}
      />
    </AppForm>
  );
}
