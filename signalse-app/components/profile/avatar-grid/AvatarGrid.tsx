import { Image, TouchableOpacity, View } from "react-native";
import { AVATAR_MAP } from "../../../constants/avatar-map";
import { styles } from "./avatar-grid-styles";
import i18n from "../../../i18n";

interface AvatarGridProps {
  selectedAvatar: string;
  onSelect: (key: string) => void;
}

export default function AvatarGrid({ selectedAvatar, onSelect }: AvatarGridProps) {
  return (
    <View style={styles.avatarGrid}>
      {Object.entries(AVATAR_MAP).map(([key, source], index) => (
        <TouchableOpacity
          key={key}
          style={[
            styles.avatarGridItem,
            selectedAvatar === key && styles.avatarGridItemSelected,
          ]}
          onPress={() => onSelect(key)}
          activeOpacity={0.7}
          accessibilityRole="button"
          accessibilityLabel={`${i18n.t("avatar")} ${index + 1}`}
          accessibilityState={{ selected: selectedAvatar === key }}
        >
          <Image source={source} style={styles.avatarGridImage} resizeMode="contain" />
        </TouchableOpacity>
      ))}
    </View>
  );
}
