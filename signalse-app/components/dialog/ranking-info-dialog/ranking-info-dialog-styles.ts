import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    gap: 14,
    width: 280,
  },
  title: {
    fontSize: 20,
    fontFamily: "PoppinsBold",
    color: colors.mainBlue,
    textAlign: "center",
    marginBottom: 2,
  },
  iconRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  iconText: {
    color: colors.black,
    fontSize: 15,
  },
  iconLegend: {
    marginHorizontal: 20,
    gap: 15,
    marginBottom: 15,
  },
});
