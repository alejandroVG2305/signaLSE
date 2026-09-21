import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  overlay: {
    backgroundColor: colors.transparentBlack80,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 999,
  },
});
