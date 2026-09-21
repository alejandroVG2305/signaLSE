import { TouchableOpacity } from "react-native";
import Animated from "react-native-reanimated";
import { AppText } from "../../AppText";
import { useTabBarAnimation } from "../../../hooks/animations/useTabBarAnimation";
import { styles } from "./tab-item-styles";

interface TabItemProps {
  label: string;
  isActive: boolean;
  onPress: () => void;
}

export default function TabItem({ label, isActive, onPress }: TabItemProps) {
  const indicatorStyle = useTabBarAnimation(isActive);

  return (
    <TouchableOpacity
      style={styles.tab}
      onPress={onPress}
      activeOpacity={0.7}
      accessibilityRole="tab"
      accessibilityState={{ selected: isActive }}
    >
      <AppText style={[styles.tabText, isActive && styles.activeTabText]}>
        {label}
      </AppText>
      <Animated.View style={[styles.indicator, indicatorStyle]} />
    </TouchableOpacity>
  );
}
