import { View } from "react-native";
import { styles } from "./overlay-styles";

interface OverlayProps {
  opacity?: number;
}

export default function Overlay({ opacity = 0.35 }: OverlayProps) {
  return (
    <View style={[styles.overlay, { opacity }]} pointerEvents="none" />
  );
}
