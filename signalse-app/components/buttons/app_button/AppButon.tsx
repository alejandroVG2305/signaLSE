import { View, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { AppText } from "../../AppText";
import { styles } from "./app-button-styles";
import { colors } from "../../../styles/colors";

interface AppButtonProps extends TouchableOpacityProps {
  text: string;
  width?: number;
  height?: number;
  fontSize?: number;
  backgroundColor?: string;
  textColor?: string;
}

export default function AppButton({
  fontSize = 24,
  text,
  style,
  width = 230,
  height = 60,
  backgroundColor = colors.white,
  textColor = colors.lightMainBlue,
  ...props
}: AppButtonProps) {
  const SHADOW_OFFSET = 8;
  const borderRadius = height / 2;

  return (
    <TouchableOpacity
      accessibilityRole="button"
      accessibilityLabel={text}
      {...props}
      style={style}
      activeOpacity={0.8}
    >
      <View
        style={[
          styles.shadowContainer,
          {
            width,
            height: height + SHADOW_OFFSET,
            borderRadius,
          },
        ]}
      >
        <View
          style={[
            styles.buttonBackground,
            { width, height, borderRadius, backgroundColor },
          ]}
        >
          <AppText style={[styles.textStyle, { fontSize, color: textColor }]}>
            {text}
          </AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
}
