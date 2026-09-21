import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginBottom: 5,
  },
  clearButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
    paddingVertical: 4,
  },
  clearText: {
    color: colors.intenseSkyBlue,
    fontSize: 16,
    includeFontPadding: false,
  },
  grid: {
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
  },
  item: {
    alignItems: "center",
    justifyContent: "center",
  },
});
