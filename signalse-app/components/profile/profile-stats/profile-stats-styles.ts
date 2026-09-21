import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

export const styles = StyleSheet.create({
  title: {
    marginBottom: 10,
  },
  levelTitle: {
    gap: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    backgroundColor: colors.transparentMainBlue40,
    padding: 15,
    borderRadius: 15,
    marginVertical: 10,
  },
  levelText: {
    fontFamily: "PoppinsBold",
    fontSize: 20,
  },
  levelNumber: {
    fontFamily: "PoppinsBold",
    fontSize: 20,
    color: colors.intenseSkyBlue,
  },
  row: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "space-between",
    alignItems: "center",
  },
  xpIndicatorContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
});
