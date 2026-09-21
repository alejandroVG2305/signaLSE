import { View } from "react-native";
import SimpleToolbar from "../../components/simple-toolbar/SimpleToolbar";
import { AppText } from "../../components/AppText";
import AppTitle from "../../components/app-title/AppTitle";
import i18n from "../../i18n";
import { styles } from "../../styles/login-view-styles";
import { globalStyles } from "../../styles/global-styles";
import LoginForm from "../../components/form/login-form/LoginForm";
import KeyboardScrollWrapper from "../../components/utils/keyboard-scroll-wrapper/KeyboardScrollWrapper";
import { Divider } from "react-native-paper";
import { Link } from "expo-router";
import useLoginViewModel from "../../viewmodels/useLoginViewModel";
import AppBottomSheet from "../../components/bottom-sheet/AppBottomSheet";
import AppFormField from "../../components/form/app-form-field/AppFormField";
import AppButton from "../../components/buttons/app_button/AppButon";
import { constants } from "../../constants/constants";
import AppDialog from "../../components/dialog/app-dialog/AppDialog";
import { colors } from "../../styles/colors";
import AppLoadingSpinner from "../../components/app-loading-spinner/AppLoadingSpinner";

export default function Login() {
  const viewModel = useLoginViewModel();
  return (
    <View style={globalStyles.flex1Container}>
      <AppLoadingSpinner isLoading={viewModel.isLoading} />
      <KeyboardScrollWrapper
        style={globalStyles.flex1Container}
        contentContainerStyle={globalStyles.scrollContainer}
      >
        <SimpleToolbar style={globalStyles.signupToolbar}></SimpleToolbar>
        <View style={globalStyles.authContainer}>
          <View style={globalStyles.authHeader}>
            <AppTitle accessibilityRole="header">{i18n.t("login")}</AppTitle>
            <AppText style={globalStyles.authSubtitle}>
              {i18n.t("loginSubtitle")}
            </AppText>
          </View>
          <LoginForm viewModel={viewModel}></LoginForm>
          <Divider
            style={styles.divider}
            accessible={false}
            accessibilityElementsHidden={true}
            importantForAccessibility="no-hide-descendants"
          />
          <View style={styles.notAccountContainer}>
            <AppText style={styles.notAccountText}>
              {i18n.t("doNotHaveAccountQ")}
            </AppText>
            <Link href="/auth/signup" asChild>
              <AppText
                style={styles.loginText}
                accessibilityRole="link"
                accessibilityLabel={i18n.t("signUp")}
              >{i18n.t("signUp")}</AppText>
            </Link>
          </View>
        </View>
      </KeyboardScrollWrapper>
      <AppDialog visible={viewModel.modal.showModal && !!viewModel.modal.error}>
        <AppText
          style={globalStyles.modalText}
          accessibilityRole="alert"
          accessibilityLiveRegion="assertive"
        >
          {viewModel.modal.error}
        </AppText>
        <AppButton
          text={i18n.t("close")}
          onPress={viewModel.modal.closeModal}
          backgroundColor={colors.lightMainBlue}
          textColor={colors.white}
          width={125}
          height={45}
          fontSize={16}
        />
      </AppDialog>
    </View>
  );
}
