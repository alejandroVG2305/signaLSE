import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

export const styles = StyleSheet.create({
  xpTitleContainer: {
    flexDirection: "row",
    gap: 1,
    marginBottom: 5,
  },
  xpFeatureTitle: {
    fontSize: 24,
    fontFamily: "PoppinsBold",
  },
  xpNumber: {
    fontSize: 24,
    fontFamily: "PoppinsBold",
    color: colors.intenseSkyBlue,
  },

  xpSlogan: {
    fontSize: 12,
  },
  sloganContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
  },

  xpCounter: {
    fontSize: 13,
  },
});
