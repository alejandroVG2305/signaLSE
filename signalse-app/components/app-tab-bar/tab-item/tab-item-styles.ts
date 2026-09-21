import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

export const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 14,
    gap: 2,
  },
  tabText: {
    fontSize: 15,
    fontFamily: "Poppins",
    color: colors.passiveGray,
  },
  activeTabText: {
    color: colors.white,
    fontFamily: "PoppinsBold",
  },
  indicator: {
    height: 3,
    width: "100%",
    backgroundColor: colors.intenseSkyBlue,
    borderRadius: 2,
  },
});
