import { useEffect, useRef, useState } from "react";
import {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSequence,
  withTiming,
} from "react-native-reanimated";

const ANIMATION_TOTAL_MS = 1400;
const CONTENT_HIDDEN_AT_MS = 250;

interface UseCorrectAnswerAnimationOptions<T> {
  correct: boolean;
  /* Returns current value to show */
  getValue: () => T;
  /**
   * Dependencies indicating value that might have changed
   */
  valueDeps: unknown[];
  /**
   * Optional initial load deps
   */
  loadDeps?: unknown[];
}

interface UseCorrectAnswerAnimationResult<T> {
  /** Frozen value that does not change while animation is going on */
  localValue: T;
  /* Animated style for main content */
  contentAnimatedStyle: ReturnType<typeof useAnimatedStyle>;
  /* Animated style for correct answer feedback */
  feedbackAnimatedStyle: ReturnType<typeof useAnimatedStyle>;
}

export function useCorrectAnswerAnimation<T>({
  correct,
  getValue,
  valueDeps,
  loadDeps = [],
}: UseCorrectAnswerAnimationOptions<T>): UseCorrectAnswerAnimationResult<T> {
  const contentScale = useSharedValue(1);
  const feedbackScale = useSharedValue(0);
  const [localValue, setLocalValue] = useState<T>(getValue);

  const feedbackTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const animEndTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const isAnimating = useRef(false);

  useEffect(() => {
    if (!isAnimating.current) {
      setLocalValue(getValue());
    }
  }, loadDeps);

  useEffect(() => {
    clearTimeout(feedbackTimeoutRef.current);
    clearTimeout(animEndTimeoutRef.current);

    if (correct) {
      isAnimating.current = true;
      const nextValue = getValue();

      contentScale.value = withSequence(
        withTiming(1, { duration: 0 }),
        withTiming(0, { duration: 250, easing: Easing.inOut(Easing.ease) }),
        withDelay(950, withTiming(1, { duration: 200, easing: Easing.inOut(Easing.ease) })),
      );

      feedbackScale.value = withSequence(
        withTiming(0, { duration: 0 }),
        withDelay(250, withTiming(1, { duration: 200, easing: Easing.inOut(Easing.ease) })),
        withDelay(500, withTiming(0, { duration: 250, easing: Easing.inOut(Easing.ease) })),
      );

      feedbackTimeoutRef.current = setTimeout(() => {
        setLocalValue(nextValue);
      }, CONTENT_HIDDEN_AT_MS);

      animEndTimeoutRef.current = setTimeout(() => {
        isAnimating.current = false;
      }, ANIMATION_TOTAL_MS);

    } else if (!isAnimating.current) {
      setLocalValue(getValue());
      contentScale.value = withTiming(1, { duration: 0 });
      feedbackScale.value = withTiming(0, { duration: 0 });
    }
  }, [correct, ...valueDeps]);

  useEffect(() => {
    return () => {
      clearTimeout(feedbackTimeoutRef.current);
      clearTimeout(animEndTimeoutRef.current);
    };
  }, []);

  const contentAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: contentScale.value }],
  }));

  const feedbackAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: feedbackScale.value }],
  }));

  return { localValue, contentAnimatedStyle, feedbackAnimatedStyle };
}