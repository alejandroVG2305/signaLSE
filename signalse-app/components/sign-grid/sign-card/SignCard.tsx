import { TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";
import { styles } from "./sign-card-styles";
import { AppText } from "../../AppText";
import { BadgeRow } from "../../badge-row/BadgeRow";
import Overlay from "../../overlay/Overlay";
import { SignUIBadge } from "../../../model/domain/signs/sign";
import i18n from "../../../i18n";
import { BlockedIcon } from "../../Icons";
import { colors } from "../../../styles/colors";

interface SignCardProps {
  thumbnailUrl: string;
  title: string;
  category: string;
  canUserAccess?: boolean;
  badges?: SignUIBadge[];
  onPress?: () => void;
  width: number;
}

export function SignCard({
  thumbnailUrl,
  title,
  category,
  badges,
  onPress,
  width,
  canUserAccess = true,
}: SignCardProps) {
  return (
    <TouchableOpacity
      style={[styles.card, { width }]}
      activeOpacity={0.85}
      accessibilityRole="button"
      accessibilityLabel={
        canUserAccess ? `${title}, ${category}` : `${title}. ${i18n.t("blocked")}`
      }
      onPress={onPress}
      disabled={!canUserAccess}
    >
      <View style={styles.imageWrapper}>
        {canUserAccess && thumbnailUrl ? (
          <>
            <Image source={thumbnailUrl} style={styles.image} contentFit="cover" />
            <Overlay />
          </>
        ) : (
          <View style={styles.blockedContainer}>
            <BlockedIcon size={48} color={colors.white} />
            <AppText style={styles.blockedText}>{i18n.t("blocked")}</AppText>
          </View>
        )}
      </View>

      <View style={styles.footer}>
        <View style={styles.titleContainer}>
          <AppText style={styles.title}>{title}</AppText>
          {canUserAccess && (
            <AppText style={styles.category}>{category}</AppText>
          )}
        </View>
        {badges && <BadgeRow badges={badges} />}
      </View>
    </TouchableOpacity>
  );
}
