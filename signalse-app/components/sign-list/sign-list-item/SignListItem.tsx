import { TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";
import { BadgeRow } from "../../badge-row/BadgeRow";
import { styles } from "./sign-list-item-styles";
import { AppText } from "../../AppText";
import { BlockedIcon, ChevronForwardIcon } from "../../Icons";
import { SignUIBadge } from "../../../model/domain/signs/sign";
import { colors } from "../../../styles/colors";
import i18n from "../../../i18n";

interface SignListItemProps {
  title: string;
  subtitle: string;
  thumbnailUrl: string;
  badges?: SignUIBadge[];
  onPress?: () => void;
  canUserAccess: boolean;
}

export default function SignListItem({
  title,
  subtitle,
  thumbnailUrl,
  badges = [],
  onPress,
  canUserAccess,
}: SignListItemProps) {
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      activeOpacity={0.85}
      accessibilityRole="button"
      accessibilityLabel={
        canUserAccess ? `${title}, ${subtitle}` : `${title}. ${i18n.t("blocked")}`
      }
      onPress={onPress}
      disabled={!canUserAccess}
    >
      {canUserAccess ? (
        thumbnailUrl ? (
          <Image source={thumbnailUrl} style={styles.image} contentFit="cover" />
        ) : (
          <View style={styles.image}></View>
        )
      ) : (
        <View style={styles.blockedContainer}>
          <BlockedIcon size={36} color={colors.white} />
        </View>
      )}

      <View style={styles.content}>
        <AppText style={styles.title}>{title}</AppText>
        {canUserAccess && <AppText style={styles.subtitle}>{subtitle}</AppText>}
        {badges.length > 0 && <BadgeRow badges={badges} />}
      </View>
      {canUserAccess && <ChevronForwardIcon />}
    </TouchableOpacity>
  );
}
