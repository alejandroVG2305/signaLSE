import { ScrollView, View } from "react-native";
import { globalStyles } from "../../styles/global-styles";
import HomeToolbar from "../../components/home-toolbar/HomeToolbar";
import AppTitle from "../../components/app-title/AppTitle";
import i18n from "../../i18n";
import { AppText } from "../../components/AppText";
import SectionTitle from "../../components/section-title/SectionTitle";
import FeatureMenu from "../../components/feature-menu/FeatureMenu";
import { TRAINING_FEATURES } from "../../components/feature-menu/Features";
import TrainingSteps from "../../components/training-steps/TrainingSteps";
import { styles } from "../../styles/training-view-styles";
import AnimatedEntry from "../../components/utils/animated-entry/AnimatedEntry";
import { getAfterFeaturesDelay } from "../../constants/animation-delays";

export default function Training() {
  return (
    <View style={globalStyles.flex1Container}>
      <HomeToolbar />
      <ScrollView>
        <View style={globalStyles.mainContainer}>
          <AppTitle accessibilityRole="header">{i18n.t("training")}</AppTitle>
          <AppText style={globalStyles.textJustify}>
            {i18n.t("trainingSubtitle")}
          </AppText>
          <SectionTitle>{i18n.t("trainingMode").toUpperCase()}</SectionTitle>
          <FeatureMenu features={TRAINING_FEATURES} />
        </View>
        <View style={styles.stepSection}>
          <SectionTitle>{i18n.t("howToPlayQ").toUpperCase()}</SectionTitle>
          <AnimatedEntry
            delay={getAfterFeaturesDelay(TRAINING_FEATURES.length)}
          >
            <TrainingSteps />
          </AnimatedEntry>
        </View>
      </ScrollView>
    </View>
  );
}
