import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const styles = StyleSheet.create({
  showingSignsMessageContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  signNumberMessage: {
    color: colors.intenseSkyBlue,
    fontFamily: "PoppinsBold",
  },
  resultsDisplayOptions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
