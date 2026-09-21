import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  wordContainer: {
    paddingHorizontal: 8,
    paddingVertical: 5,
  },
  trainingWord: {
    flexDirection: "row",
    gap: 5,
  },

  trainingLetter: {
    fontSize: 23,
    fontFamily: "PoppinsBold",
  },
});
