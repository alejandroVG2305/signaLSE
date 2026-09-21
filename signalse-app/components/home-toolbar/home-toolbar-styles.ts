import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    gap: 8,
  },
  logoutButton: {
    backgroundColor: colors.intenseSkyBlue,
  },
  profileButton: {
    backgroundColor: colors.transparentMainBlue80,
  },
});
