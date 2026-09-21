import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";
import { useEntranceAnimation } from "../../../hooks/animations/useEntranceAnimation";
import Animated from "react-native-reanimated";

interface AnimatedEntryProps {
  delay?: number;
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
}

export default function AnimatedEntry({
  delay = 0,
  style,
  children,
}: AnimatedEntryProps) {
  const animatedStyle = useEntranceAnimation(delay);

  return (
    <Animated.View style={[animatedStyle, style]}>{children}</Animated.View>
  );
}
