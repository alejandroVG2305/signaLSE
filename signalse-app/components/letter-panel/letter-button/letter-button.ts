import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

export const styles = StyleSheet.create({
  buttonContainer: {
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainerUnselected: {
    backgroundColor: colors.white,
  },
  buttonContainerSelected: {
    backgroundColor: colors.intenseSkyBlue,
  },
  letter: {
    fontFamily: "PoppinsBold",
  },
  letterSelected: {
    color: colors.darkMainBlue,
  },
  letterUnselected: {
    color: colors.mainBlue,
  },
});
