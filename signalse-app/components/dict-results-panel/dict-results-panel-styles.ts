import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  panel: {
    gap: 15,
  },
  panelHeader: {
    flexDirection: "row",
    gap: 15,
    alignItems: "center",
  },
  letterIndicatorCard: {
    paddingVertical: 5,
    paddingHorizontal: 13,
    borderRadius: 10,
    backgroundColor: colors.intenseSkyBlue,
  },
  letterIndicatorText: {
    fontFamily: "PoppinsBold",
    fontSize: 19,
  },
  letterIndicatorCardText: {
    color: colors.darkMainBlue,
  },
});
