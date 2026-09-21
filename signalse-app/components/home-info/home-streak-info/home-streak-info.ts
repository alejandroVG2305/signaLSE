import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

export const styles = StyleSheet.create({
  strakFeatureTitle: {
    fontSize: 24,
    fontFamily: "PoppinsBold",
  },

  streakTitleContainer: {
    flexDirection: "row",
    gap: 1,
  },

  streakNumber: {
    color: colors.intenseSkyBlue,
    fontFamily: "PoppinsBold",
    fontSize: 24,
  },

  activeStreakSlogan: {
    fontSize: 12,
  },
});
