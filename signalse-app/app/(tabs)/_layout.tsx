import { Tabs } from "expo-router";

import {
  HomeMenuIcon,
  DictionaryMenuIcon,
  ChallengeMenuIcon,
  TrainingMenuIcon,
  ProfileMenuIcon,
  RankingMenuIcon,
} from "../../components/Icons";
import i18n from "../../i18n";
import { colors } from "../../styles/colors";
import { globalStyles } from "../../styles/global-styles";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colors.intenseSkyBlue,
        tabBarInactiveTintColor: colors.shadowGray,
        tabBarStyle: globalStyles.tabBar,
        tabBarLabelStyle: { fontFamily: "Poppins" },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: i18n.t("beginning"),
          tabBarAccessibilityLabel: i18n.t("beginning"),
          tabBarIcon: ({ color }) => <HomeMenuIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="dictionary"
        options={{
          title: i18n.t("dictionary"),
          tabBarAccessibilityLabel: i18n.t("dictionary"),
          tabBarIcon: ({ color }) => <DictionaryMenuIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="challenges"
        options={{
          title: i18n.t("challenges"),
          tabBarAccessibilityLabel: i18n.t("challenges"),
          tabBarIcon: ({ color }) => <ChallengeMenuIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="training"
        options={{
          title: i18n.t("train"),
          tabBarAccessibilityLabel: i18n.t("train"),
          tabBarIcon: ({ color }) => <TrainingMenuIcon color={color} />,
        }}
      />
      <Tabs.Screen
        name="ranking"
        options={{
          title: i18n.t("ranking"),
          tabBarAccessibilityLabel: i18n.t("ranking"),
          tabBarIcon: ({ color }) => <RankingMenuIcon color={color} />,
        }}
      />
    </Tabs>
  );
}
