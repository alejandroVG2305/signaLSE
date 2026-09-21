import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  grid: {
    marginHorizontal: "auto",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    gap: 15,
  },
  item: {
    flex: 1,
    minWidth: 100,
    maxWidth: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
