import { Switch } from "react-native-switch";
import { colors } from "../../styles/colors";

interface AppToggleProps {
  value: boolean;
  onValueChange: (val: boolean) => void;
  barHeight?: number;
  circleSize?: number;
  accessibilityLabel?: string;
}

export default function AppToggle({
  value,
  onValueChange,
  barHeight = 24,
  circleSize = 24,
  accessibilityLabel,
}: AppToggleProps) {
  const accessibilityProps = {
    accessibilityRole: "switch",
    accessibilityLabel,
    accessibilityState: { checked: value },
  };

  return (
    <Switch
      value={value}
      onValueChange={onValueChange}
      barHeight={barHeight}
      circleSize={circleSize}
      backgroundInactive={colors.transparentSkyBlue80}
      backgroundActive={colors.intenseSkyBlue}
      circleActiveColor={colors.white}
      circleInActiveColor={colors.white}
      circleBorderWidth={0}
      activeText=""
      inActiveText=""
      switchLeftPx={2}
      switchRightPx={2}
      {...(accessibilityProps as any)}
    />
  );
}
