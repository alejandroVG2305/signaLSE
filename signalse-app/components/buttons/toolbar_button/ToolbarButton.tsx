import { Ionicons } from "@expo/vector-icons";
import { Pressable, TouchableOpacity, View, ViewProps } from "react-native";
import { colors } from "../../../styles/colors";
import { styles } from "./toolbar-button-styles";

interface ToolbarButtonProps extends ViewProps {
  icon: keyof typeof Ionicons.glyphMap;
  iconColor?: string;
  onPress: () => void;
  accessibilityLabel?: string;
}

export default function ToolbarButton({
  iconColor = colors.white,
  accessibilityLabel,
  ...props
}: ToolbarButtonProps) {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel}
      activeOpacity={0.85}
    >
      <View style={[styles.toolbarButton, props.style]}>
        <Ionicons name={props.icon} size={32} color={iconColor} />
      </View>
    </TouchableOpacity>
  );
}
