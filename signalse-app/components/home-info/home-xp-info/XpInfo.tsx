import { globalStyles } from "../../../styles/global-styles";
import { View } from "react-native";
import { AppText } from "../../AppText";
import i18n from "../../../i18n";
import { styles } from "./xp-info-styles";
import { AppProgressBar } from "../../app-progress-bar/AppProgressBar";
import { XpIcon } from "../../svg/XpIcon";
import { formatCompactNumber } from "../../../utils/format-number";

interface XpInfoProps {
  level: number;
  currentXp: number;
  remainingXp: number;
}

export default function XpInfo(props: XpInfoProps) {
  const progress =
    props.remainingXp > 0
      ? Math.min(Math.max((props.currentXp / props.remainingXp) * 100, 0), 100)
      : 0;
  return (
    <View
      style={globalStyles.featureContainer}
      accessible={true}
      accessibilityLabel={`${i18n.t("level")} ${props.level}. ${i18n.t("xpSlogan")}. ${formatCompactNumber(props.currentXp)} / ${props.remainingXp} XP`}
    >
      <XpIcon size={40} />
      <View>
        <View style={styles.xpTitleContainer}>
          <AppText style={styles.xpFeatureTitle}>{i18n.t("level")}</AppText>
          <AppText style={styles.xpNumber}>{` ${props.level}`}</AppText>
          <View style={styles.sloganContainer}>
            <AppText
              style={styles.xpSlogan}
            >{` ${i18n.t("xpSlogan")}`}</AppText>
          </View>
        </View>
        <View>
          <AppText
            style={styles.xpCounter}
          >{`${formatCompactNumber(props.currentXp)} / ${props.remainingXp} XP`}</AppText>
          <AppProgressBar progress={progress} />
        </View>
      </View>
    </View>
  );
}
