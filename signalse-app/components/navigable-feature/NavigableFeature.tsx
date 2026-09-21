import { Pressable, TouchableOpacity, View, ViewProps } from "react-native";
import { globalStyles } from "../../styles/global-styles";
import { styles } from "./navigable-feature";
import { Href, Link } from "expo-router";
import { ReactNode } from "react";
import { AppText } from "../AppText";
import { ChevronForwardIcon } from "../Icons";

interface NavigableFeatureProps extends ViewProps {
  title: string;
  subtitle: string;
  link: string;
  icon: ReactNode;
}

export default function NavigableFeature(props: NavigableFeatureProps) {
  return (
    <Link href={props.link as Href<string>} asChild>
      <TouchableOpacity
        style={globalStyles.featureContainer}
        activeOpacity={0.85}
        accessibilityRole="button"
        accessibilityLabel={`${props.title}. ${props.subtitle}`}
      >
        <View>
          <View style={styles.iconContainer}>{props.icon}</View>
        </View>
        <View style={styles.textContainer}>
          <AppText style={styles.featureTitle}>{props.title}</AppText>
          <AppText style={styles.featureSubtitle}>{props.subtitle}</AppText>
        </View>
        <ChevronForwardIcon />
      </TouchableOpacity>
    </Link>
  );
}
