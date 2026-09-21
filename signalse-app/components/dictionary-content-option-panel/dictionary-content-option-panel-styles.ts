import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  panelContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.transparentMainBlue40,
    borderRadius: 15,
    padding: 7,
    flexDirection: "row",
  },
  optionButton: {
    borderRadius: 10,
    padding: 8,
    marginHorizontal: 4,
    justifyContent: "center",
    alignItems: "center",
    aspectRatio: 1,
  },
  activeButton: {
    backgroundColor: colors.transparentMainBlue80,
  },
});
