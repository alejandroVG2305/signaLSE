import { Pressable, StyleProp, View, ViewStyle } from "react-native";
import { CheckmarkIcon } from "../Icons";
import { colors } from "../../styles/colors";
import { styles } from "./app-checkbox-styles";

interface AppCheckboxProps {
  value: boolean;
  onValueChange: (value: boolean) => void;
  style?: StyleProp<ViewStyle>;
  color?: string;
  tickColor?: string;
  iconSize?: number;
  disabled?: boolean;
  accessibilityLabel?: string;
}

export default function AppCheckbox({
  value,
  onValueChange,
  style,
  color = colors.intenseSkyBlue,
  tickColor = colors.darkMainBlue,
  iconSize = 16,
  disabled = false,
  accessibilityLabel,
}: AppCheckboxProps) {
  return (
    <Pressable
      onPress={() => onValueChange(!value)}
      disabled={disabled}
      accessibilityRole="checkbox"
      accessibilityLabel={accessibilityLabel}
      accessibilityState={{ checked: value, disabled }}
    >
      <View
        style={[
          styles.box,
          style,
          {
            borderColor: color,
            backgroundColor: value ? color : "transparent",
          },
          disabled && styles.disabled,
        ]}
      >
        {value && <CheckmarkIcon size={iconSize} color={tickColor} />}
      </View>
    </Pressable>
  );
}
