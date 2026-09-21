import { View } from "react-native";
import TabItem from "./tab-item/TabItem";
import { styles } from "./app-tab-bar-styles";

export interface Tab<T extends string> {
  key: T;
  label: string;
}

interface AppTabBarProps<T extends string> {
  tabs: Tab<T>[];
  activeTab: T;
  onTabChange: (tab: T) => void;
}

export default function AppTabBar<T extends string>({
  tabs,
  activeTab,
  onTabChange,
}: AppTabBarProps<T>) {
  return (
    <View style={styles.container} accessibilityRole="tablist">
      {tabs.map((tab) => (
        <TabItem
          key={tab.key}
          label={tab.label}
          isActive={tab.key === activeTab}
          onPress={() => onTabChange(tab.key)}
        />
      ))}
    </View>
  );
}
