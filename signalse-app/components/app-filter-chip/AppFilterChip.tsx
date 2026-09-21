import { useState } from "react";
import { NativeScrollEvent, NativeSyntheticEvent, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Chip } from "react-native-paper";
import Svg, { Defs, LinearGradient, Rect, Stop } from "react-native-svg";
import { colors } from "../../styles/colors";
import { styles } from "./app-filter-chip";

interface AppFilterChipProps {
  categories: string[];
  selectedCategories: string[];
  onPress: (arg: string) => void;
  variant?: "primary" | "secondary";
}

// How close to the end of the scroll (in px) counts as "fully scrolled"
const END_REACHED_THRESHOLD = 4;

export default function AppFilterChip({
  categories,
  selectedCategories,
  onPress,
  variant = "primary",
}: AppFilterChipProps) {
  const [containerWidth, setContainerWidth] = useState(0);
  const [contentWidth, setContentWidth] = useState(0);
  const [scrollX, setScrollX] = useState(0);

  const overflows = contentWidth > containerWidth;
  const reachedEnd =
    scrollX >= contentWidth - containerWidth - END_REACHED_THRESHOLD;
  const showFade = overflows && !reachedEnd;

  const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    setScrollX(e.nativeEvent.contentOffset.x);
  };

  return (
    <View
      style={styles.wrapper}
      onLayout={(e) => setContainerWidth(e.nativeEvent.layout.width)}
    >
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollContainer}
        contentContainerStyle={styles.scrollContent}
        onContentSizeChange={(w) => setContentWidth(w)}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {categories.map((category) => {
          const isActive = selectedCategories.includes(category);
          return (
            <Chip
              key={category}
              mode={isActive ? "flat" : "outlined"}
              selected={isActive}
              onPress={() => onPress(category)}
              showSelectedOverlay={false}
              showSelectedCheck={false}
              style={[
                styles.chipBase,
                isActive
                  ? styles.chipActive
                  : variant === "secondary"
                  ? styles.chipInactiveSecondary
                  : styles.chipInactive,
              ]}
              textStyle={[
                styles.chipTextBase,
                isActive
                  ? styles.chipTextActive
                  : variant === "secondary"
                  ? styles.chipTextInactiveSecondary
                  : styles.chipTextInactive,
              ]}
            >
              {category}
            </Chip>
          );
        })}
      </ScrollView>
      {showFade && (
        <View style={styles.fadeOverlay} pointerEvents="none">
          <Svg width="100%" height="100%">
            <Defs>
              <LinearGradient id="chipFade" x1="0" y1="0" x2="1" y2="0">
                <Stop offset="0" stopColor={colors.mainBlue} stopOpacity={0} />
                <Stop offset="1" stopColor={colors.mainBlue} stopOpacity={1} />
              </LinearGradient>
            </Defs>
            <Rect width="100%" height="100%" fill="url(#chipFade)" />
          </Svg>
        </View>
      )}
    </View>
  );
}
