import { View } from "react-native";
import { AppText } from "../AppText";
import { styles } from "./badge-row-styles";
import { SignUIBadge } from "../../model/domain/signs/sign";

interface BadgeRowProps {
  badges: SignUIBadge[];
  badgeSize?: {
    paddingHorizontal?: number;
    paddingVertical?: number;
    borderRadius?: number;
  };
  fontSize?: number;
}

export function BadgeRow({ badges, badgeSize, fontSize }: BadgeRowProps) {
  const badgeOverride = badgeSize
    ? {
        paddingHorizontal: badgeSize.paddingHorizontal ?? 10,
        paddingVertical: badgeSize.paddingVertical ?? 3,
        borderRadius: badgeSize.borderRadius ?? 20,
      }
    : undefined;

  const textOverride = fontSize ? { fontSize } : undefined;

  return (
    <View style={styles.row}>
      {badges.map((badge, i) => (
        <View
          key={i}
          style={[
            styles.badge,
            badge.variant === "secondary" ? styles.secondary : styles.primary,
            badgeOverride,
          ]}
        >
          <AppText
            style={[
              styles.text,
              badge.variant === "secondary"
                ? styles.secondaryText
                : styles.primaryText,
              textOverride,
            ]}
          >
            {badge.label}
          </AppText>
        </View>
      ))}
    </View>
  );
}
