import { View } from "react-native";
import { globalStyles } from "../../styles/global-styles";
import KeyboardScrollWrapper from "../../components/utils/keyboard-scroll-wrapper/KeyboardScrollWrapper";
import { AppText } from "../../components/AppText";
import AppTitle from "../../components/app-title/AppTitle";
import i18n from "../../i18n";
import AppForm from "../../components/form/app-form/AppForm";
import useCompleteInfoViewModel from "../../viewmodels/useCompleteInfoViewModel";
import PersonalDataForm from "../../components/form/signup-form/PersonalDataForm";
import SimpleToolbar from "../../components/simple-toolbar/SimpleToolbar";
import Animated, { LinearTransition } from "react-native-reanimated";
import { styles } from "../../styles/complete-info-view-styles";

export default function CompleteInfo() {
  const viewModel = useCompleteInfoViewModel();
  return (
    <View style={globalStyles.flex1Container}>
      <KeyboardScrollWrapper
        style={globalStyles.flex1Container}
        contentContainerStyle={globalStyles.scrollContainer}
      >
        <SimpleToolbar style={globalStyles.signupToolbar}></SimpleToolbar>
        <Animated.View layout={LinearTransition.duration(500)}>
          <View style={globalStyles.authContainer}>
            <View style={globalStyles.authHeader}>
              <AppTitle>{i18n.t("completeYourInfo")}</AppTitle>
              <AppText style={globalStyles.authSubtitle}>
                {i18n.t("completeYourInfoSubtitle")}
              </AppText>
            </View>
            <AppForm style={styles.form}>
              <PersonalDataForm
                name={viewModel.name}
                surname={viewModel.surname}
                username={viewModel.username}
                onNameChange={viewModel.setName}
                onSurnameChange={viewModel.setSurname}
                onUsernameChange={viewModel.setUsername}
                onNextPress={viewModel.saveInfo}
                isLoading={viewModel.isLoading}
                buttonText={i18n.t("send")}
              />
            </AppForm>
          </View>
        </Animated.View>
      </KeyboardScrollWrapper>
    </View>
  );
}
