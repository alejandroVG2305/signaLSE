import { View } from "react-native";
import NavigableFeature from "../navigable-feature/NavigableFeature";
import { styles } from "./feature-menu";
import AnimatedEntry from "../utils/animated-entry/AnimatedEntry";
import {
  FEATURE_MENU_STAGGER,
  DELAYS,
} from "../../constants/animation-delays";
import { Feature } from "./Features";

export interface FeatureMenuProps {
  features: Array<Feature>;
}

export default function FeatureMenu({ features }: FeatureMenuProps) {
  return (
    <View style={styles.menu}>
      {features.map((feature, index) => (
        <AnimatedEntry
          key={`${feature.link}-${index}`}
          delay={DELAYS.featureMenu + index * FEATURE_MENU_STAGGER}
        >
          <NavigableFeature {...feature} />
        </AnimatedEntry>
      ))}
    </View>
  );
}
