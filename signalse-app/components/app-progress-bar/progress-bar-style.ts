import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  progressBarBackground: {
    height: 8,
    backgroundColor: colors.shadowGray,
    borderRadius: 10,
    overflow: "hidden",
    flexDirection: "row",
  },
  progressBarFill: {
    backgroundColor: colors.intenseSkyBlue,
  },
});
