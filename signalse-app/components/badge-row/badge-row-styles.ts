import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  badge: {
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 20,
  },
  primary: {
    backgroundColor: colors.intenseSkyBlue,
  },
  secondary: {
    backgroundColor: colors.white,
  },
  text: {
    fontSize: 11,
    fontFamily: "PoppinsBold",
  },
  primaryText: {
    color: colors.darkMainBlue,
  },
  secondaryText: {
    color: colors.darkMainBlue,
  },
});
