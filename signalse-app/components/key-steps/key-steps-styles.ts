import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  keyStepsSection: {
    backgroundColor: colors.lightMainBlue,
    borderRadius: 15,
    borderWidth: 0.75,
    borderColor: colors.shadowGray,
    padding: 20,
  },
  keyStepsHeader: {
    flexDirection: "row",
    gap: 15,
  },
  keyStepsTitle: {
    fontSize: 20,
    fontFamily: "PoppinsBold",
    marginBottom: 10,
  },
  keyStepsContent: {
    gap: 10,
    padding: 2,
  },
});
