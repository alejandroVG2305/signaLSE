import { View } from "react-native";
import { useSignDetailsViewModel } from "../../viewmodels/useSignDetailViewModel";
import KeyboardScrollWrapper from "../../components/utils/keyboard-scroll-wrapper/KeyboardScrollWrapper";
import { globalStyles } from "../../styles/global-styles";
import SimpleToolbar from "../../components/simple-toolbar/SimpleToolbar";
import AppTitle from "../../components/app-title/AppTitle";
import { styles } from "../../styles/sign-detail-styles";
import i18n from "../../i18n";
import SectionTitle from "../../components/section-title/SectionTitle";
import { BadgeRow } from "../../components/badge-row/BadgeRow";
import { getSignUIBadges, toSignUI } from "../../model/domain/signs/sign";
import { AppText } from "../../components/AppText";
import SignGrid from "../../components/sign-grid/SignGrid";
import AppButton from "../../components/buttons/app_button/AppButon";
import KeySteps from "../../components/key-steps/KeySteps";
import SignVideo from "../../components/sign-video/SignVideo";
import { Divider } from "react-native-paper";
import SignAccessDenied from "../../components/sign-access-denied/SignAccessDenied";
import AppLoadingSpinner from "../../components/app-loading-spinner/AppLoadingSpinner";

export default function SignDetails() {
  const viewModel = useSignDetailsViewModel();

  return (
    <View style={globalStyles.flex1Container}>
      <AppLoadingSpinner isLoading={viewModel.isLoading} />
      <SimpleToolbar backLink="(tabs)/dictionary" />
      {!viewModel.authorized ? (
        <SignAccessDenied />
      ) : (
        <KeyboardScrollWrapper
          contentContainerStyle={styles.keyboardAvoidContainer}
        >
          <View style={globalStyles.mainContainer}>
            <AppTitle style={styles.termTitle} accessibilityRole="header">
              {viewModel.signDetails?.term}
            </AppTitle>
            <BadgeRow
              badges={
                viewModel.signDetails
                  ? getSignUIBadges(viewModel.signDetails)
                  : []
              }
              badgeSize={{
                paddingHorizontal: 14,
                paddingVertical: 5,
                borderRadius: 20,
              }}
              fontSize={14}
            />
            <Divider
              style={styles.divider}
              accessible={false}
              accessibilityElementsHidden={true}
              importantForAccessibility="no-hide-descendants"
            />
            <SectionTitle style={styles.sectionTitle}>
              {i18n.t("meaning").toUpperCase()}
            </SectionTitle>
            <AppText style={globalStyles.justifiedText}>
              {viewModel.signDetails?.meaning}
            </AppText>
            <Divider
              style={styles.divider}
              accessible={false}
              accessibilityElementsHidden={true}
              importantForAccessibility="no-hide-descendants"
            />
            <SectionTitle style={styles.sectionTitle}>
              {i18n.t("howToSignIt").toUpperCase()}
            </SectionTitle>
            {viewModel.signDetails?.videoUrl && (
              <SignVideo
                videoUrl={viewModel.signDetails.videoUrl}
                isFullscreen={viewModel.isFullscreen}
                onOpenFullscreen={viewModel.openFullscreen}
                onCloseFullscreen={viewModel.closeFullscreen}
              />
            )}
            {viewModel.signDetails && (
              <KeySteps steps={viewModel.signDetails.keySteps} />
            )}
            <Divider
              style={styles.divider}
              accessible={false}
              accessibilityElementsHidden={true}
              importantForAccessibility="no-hide-descendants"
            />
            <SectionTitle style={styles.sectionTitle}>
              {i18n.t("relatedSigns").toUpperCase()}
            </SectionTitle>
            <SignGrid signs={viewModel.relatedSigns.map(toSignUI)} />
            {viewModel.signDetails?.supportsAITraining && (
              <AppButton
                style={styles.spellButton}
                text={i18n.t("spellWithAI")}
                fontSize={20}
                onPress={viewModel.navigateToFreePractice}
              />
            )}
          </View>
        </KeyboardScrollWrapper>
      )}
    </View>
  );
}
