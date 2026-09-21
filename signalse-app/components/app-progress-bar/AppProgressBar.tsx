import { View, ViewProps } from "react-native";
import { styles } from "./progress-bar-style";

interface AppProgressBarProps extends ViewProps {
  progress: number;
  fillColor?: string;
}

export function AppProgressBar({
  progress,
  fillColor,
  style,
  ...rest
}: AppProgressBarProps) {
  const safeProgress = Number.isFinite(progress)
    ? Math.min(Math.max(progress, 0), 100)
    : 0;
  const remaining = 100 - safeProgress;
  return (
    <View
      style={[styles.progressBarBackground, style]}
      accessibilityRole="progressbar"
      accessibilityValue={{ min: 0, max: 100, now: Math.round(safeProgress) }}
      {...rest}
    >
      <View
        style={[
          styles.progressBarFill,
          { flex: safeProgress },
          fillColor ? { backgroundColor: fillColor } : undefined,
        ]}
      />
      <View style={{ flex: remaining }}></View>
    </View>
  );
}
