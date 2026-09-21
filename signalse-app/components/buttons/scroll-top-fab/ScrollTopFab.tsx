import { useEffect, useRef } from "react";
import { Animated, ScrollView, TouchableOpacity } from "react-native";
import { ScrollTopIcon } from "../../Icons";
import { styles } from "./scroll-top-fab-styles";
import { colors } from "../../../styles/colors";
import i18n from "../../../i18n";

interface ScrollTopFabProps {
  scrollRef: React.RefObject<ScrollView | null>;
  visible: boolean;
}

export default function ScrollTopFab({
  scrollRef,
  visible,
}: ScrollTopFabProps) {
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: visible ? 1 : 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  }, [visible]);

  const handlePress = () => {
    scrollRef.current?.scrollTo({ y: 0, animated: true });
  };

  return (
    <Animated.View
      style={[styles.container, { opacity }]}
      pointerEvents={visible ? "auto" : "none"}
    >
      <TouchableOpacity
        style={styles.fab}
        onPress={handlePress}
        activeOpacity={0.8}
        accessibilityRole="button"
        accessibilityLabel={i18n.t("backToTop")}
        importantForAccessibility={visible ? "yes" : "no-hide-descendants"}
      >
        <ScrollTopIcon color={colors.darkMainBlue} />
      </TouchableOpacity>
    </Animated.View>
  );
}
