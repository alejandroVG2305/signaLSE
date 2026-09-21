import i18n from "../../../i18n";
import { styles } from "./home-streak-info";
import { View } from "react-native";
import { AppText } from "../../AppText";
import { globalStyles } from "../../../styles/global-styles";
import { FireIcon } from "../../svg/FireIcon";

interface HomeStreakProps {
  streakCount: number;
}

export default function HomeStreakInfo({ streakCount }: HomeStreakProps) {
  return (
    <View
      style={globalStyles.featureContainer}
      accessible={true}
      accessibilityLabel={`${streakCount} ${i18n.t("days")}. ${i18n.t("activeStreakSlogan")}`}
    >
      <FireIcon size={40} />
      <View>
        <View style={styles.streakTitleContainer}>
          <AppText style={globalStyles.highlightedData}>{streakCount}</AppText>
          <AppText style={styles.strakFeatureTitle}>
            {` ${i18n.t("days")}`}
          </AppText>
        </View>
        <AppText style={styles.activeStreakSlogan}>
          {i18n.t("activeStreakSlogan")}
        </AppText>
      </View>
    </View>
  );
}
