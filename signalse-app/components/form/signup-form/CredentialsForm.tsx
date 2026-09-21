import { SignupFormProps } from "./SignupForm";
import AppFormField from "../app-form-field/AppFormField";
import i18n from "../../../i18n";
import { constants } from "../../../constants/constants";
import AppButton from "../../buttons/app_button/AppButon";
import TermsAndPrivacyCheckbox from "../../terms-and-privacy-checkbox/TermsAndPrivacyCheckbox";
import { Pressable } from "react-native";
import { AppText } from "../../AppText";
import { styles } from "./signup-form-styles";
import LegalModal from "../../legal-modal/LegalModal";

export default function CredentialsForm({ viewModel }: SignupFormProps) {
  const buttonWidth = constants.windowWidth - 76;
  return (
    <>
      <AppFormField
        label={i18n.t("email").toUpperCase()}
        placeholder={i18n.t("email")}
        icon="mail-outline"
        keyboardType="email-address"
        autoCapitalize="none"
        value={viewModel.email}
        onChangeText={viewModel.setEmail}
      />
      <AppFormField
        isPassword
        label={i18n.t("password").toUpperCase()}
        placeholder={i18n.t("password")}
        icon="lock-closed-outline"
        value={viewModel.password}
        onChangeText={viewModel.setPassword}
      />
      <AppFormField
        isPassword
        label={i18n.t("confirmPassword").toUpperCase()}
        placeholder={i18n.t("confirmPassword")}
        icon="lock-closed-outline"
        value={viewModel.confirmPassword}
        onChangeText={viewModel.setConfirmPassword}
      />
      <TermsAndPrivacyCheckbox
        value={viewModel.acceptedTerms}
        onValueChange={viewModel.setAcceptedTerms}
        onTermsPress={() => viewModel.setLegalModal("terms")}
        onPrivacyPress={() => viewModel.setLegalModal("privacy")}
      />
      <AppButton
        text={i18n.t("signUp")}
        width={buttonWidth}
        fontSize={21}
        onPress={viewModel.handleSignUp}
        disabled={viewModel.isLoading}
      />
      <Pressable
        onPress={viewModel.stepBack}
        accessibilityRole="button"
        accessibilityLabel={i18n.t("back")}
      >
        <AppText style={styles.backLink}>{i18n.t("back")}</AppText>
      </Pressable>
      <LegalModal
        visible={viewModel.legalModal !== null}
        type={viewModel.legalModal}
        onClose={() => viewModel.setLegalModal(null)}
      />
    </>
  );
}
