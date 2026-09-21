import { StyleSheet } from "react-native";
import { colors } from "../../../../styles/colors";

export const styles = StyleSheet.create({
  totalStatRow: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 25,
    backgroundColor: colors.transparentMainBlue40,
    borderRadius: 18,
    borderWidth: 1.5,
    borderColor: colors.transparentMainBlue40,
  },
  totalStatNumber: {
    color: colors.intenseSkyBlue,
    fontFamily: "PoppinsBold",
    fontSize: 18,
  },
  totalHitsNumber: {
    color: colors.lightGreen,
    fontFamily: "PoppinsBold",
    fontSize: 18,
  },
  totalFailsNumber: {
    color: colors.lightOrange,
    fontFamily: "PoppinsBold",
    fontSize: 18,
  },
});
