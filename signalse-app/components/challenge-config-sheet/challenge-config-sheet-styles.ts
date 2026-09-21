import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  title: {
    fontSize: 22,
    fontFamily: "PoppinsBold",
    color: colors.white,
  },
  section: {
    gap: 8,
    marginTop: 5,
  },
  buttonContainer: {
    alignItems: "center",
    marginTop: 10,
  },
  soundContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderWidth: 2.5,
    borderColor: colors.transparentMainBlue80,
    borderRadius: 15,
    backgroundColor: colors.transparentMainBlue40,
  },

  soundLabelContainer: {
    flexDirection: "row",
    gap: 15,
  },
});
