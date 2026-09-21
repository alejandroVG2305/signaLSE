import { View } from "react-native";
import SimpleToolbar from "../components/simple-toolbar/SimpleToolbar";
import { globalStyles } from "../styles/global-styles";
import AppLoadingSpinner from "../components/app-loading-spinner/AppLoadingSpinner";
import KeyboardScrollWrapper from "../components/utils/keyboard-scroll-wrapper/KeyboardScrollWrapper";
import useProfileViewModel, {
  ProfileTab,
} from "../viewmodels/useProfileViewModel";
import AppDialog from "../components/dialog/app-dialog/AppDialog";
import { AppText } from "../components/AppText";
import AppButton from "../components/buttons/app_button/AppButon";
import { colors } from "../styles/colors";
import i18n from "../i18n";
import ProfileStats from "../components/profile/profile-stats/ProfileStats";
import AppTabBar, { Tab } from "../components/app-tab-bar/AppTabBar";
import ProfileConfig from "../components/profile/profile-config/ProfileConfig";

const PROFILE_TABS: Tab<ProfileTab>[] = [
  { key: "profile", label: i18n.t("profile") },
  { key: "statistics", label: i18n.t("statistics") },
];

export default function Profile() {
  const viewModel = useProfileViewModel();
  return (
    <View style={globalStyles.flex1Container}>
      <AppLoadingSpinner isLoading={viewModel.isLoading} />
      <SimpleToolbar />
      <AppTabBar
        tabs={PROFILE_TABS}
        activeTab={viewModel.activeTab}
        onTabChange={viewModel.setActiveTab}
      />
      <KeyboardScrollWrapper>
        <View style={globalStyles.mainContainer}>
          {viewModel.activeTab === "profile" && (
            <>
              <ProfileConfig
                name={viewModel.name}
                surname={viewModel.surname}
                username={viewModel.username}
                avatar={viewModel.selectedAvatar}
                memberSinceDate={viewModel.createdAt}
                soundEffects={viewModel.soundEffects}
                pushNotifications={viewModel.pushNotifications}
                onAvatarChange={viewModel.setSelectedAvatar}
                onNameChange={viewModel.setName}
                onSurnameChange={viewModel.setSurname}
                onUsernameChange={viewModel.setUsername}
                onPushNotificationsChange={viewModel.togglePushNotifications}
                onSoundEffectsChange={viewModel.toggleSoundEffects}
                onSaveChanges={viewModel.saveProfile}
              />
            </>
          )}
          {viewModel.activeTab === "statistics" &&
            viewModel.userStats &&
            viewModel.signsToLearn != null && (
              <ProfileStats
                userStats={viewModel.userStats}
                signsToLearn={viewModel.signsToLearn}
              />
            )}
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
      <AppDialog visible={viewModel.showSuccessDialog}>
        <AppText
          style={globalStyles.modalText}
          accessibilityRole="alert"
          accessibilityLiveRegion="assertive"
        >
          {i18n.t("changesSavedSuccessfully")}
        </AppText>
        <AppButton
          text={i18n.t("close")}
          onPress={viewModel.closeSuccessDialog}
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
