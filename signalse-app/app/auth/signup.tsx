import { View } from "react-native";
import { styles } from "../../styles/signup-view-styles";
import { AppText } from "../../components/AppText";
import i18n from "../../i18n";
import AppTitle from "../../components/app-title/AppTitle";
import SimpleToolbar from "../../components/simple-toolbar/SimpleToolbar";
import { Divider } from "react-native-paper";
import SignupForm from "../../components/form/signup-form/SignupForm";
import { Link } from "expo-router";
import useSignupViewModel from "../../viewmodels/useSignupViewModel";
import { globalStyles } from "../../styles/global-styles";
import Animated, { LinearTransition } from "react-native-reanimated";
import KeyboardScrollWrapper from "../../components/utils/keyboard-scroll-wrapper/KeyboardScrollWrapper";
import AppDialog from "../../components/dialog/app-dialog/AppDialog";
import AppButton from "../../components/buttons/app_button/AppButon";
import { colors } from "../../styles/colors";
import AppLoadingSpinner from "../../components/app-loading-spinner/AppLoadingSpinner";

export default function SignupView() {
  const viewModel = useSignupViewModel();

  return (
    <View style={globalStyles.flex1Container}>
      <AppLoadingSpinner isLoading={viewModel.isLoading} />
      <KeyboardScrollWrapper
        style={globalStyles.flex1Container}
        contentContainerStyle={globalStyles.scrollContainer}
      >
        <SimpleToolbar style={globalStyles.signupToolbar} />
        <Animated.View layout={LinearTransition.duration(500)}>
          <View style={globalStyles.authContainer}>
            <View style={globalStyles.authHeader}>
              <AppTitle accessibilityRole="header">{i18n.t("createYourAccount")}</AppTitle>
              <AppText style={globalStyles.authSubtitle}>
                {i18n.t("signUpSubtitle")}
              </AppText>
            </View>
            <SignupForm viewModel={viewModel} />
            <Divider
              style={styles.divider}
              accessible={false}
              accessibilityElementsHidden={true}
              importantForAccessibility="no-hide-descendants"
            />
            <View style={styles.alreadyAccountContainer}>
              <AppText style={styles.alreadyAccountText}>
                {i18n.t("alreadyHaveAccountQ")}
              </AppText>
              <Link href="/auth/login" asChild>
                <AppText
                  style={styles.loginText}
                  accessibilityRole="link"
                  accessibilityLabel={i18n.t("login")}
                >{i18n.t("login")}</AppText>
              </Link>
            </View>
          </View>
        </Animated.View>
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
