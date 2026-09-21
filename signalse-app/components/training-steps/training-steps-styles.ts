import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  stepsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: colors.transparentMainBlue40,
    padding: 15,
    borderRadius: 15,
    borderWidth: 0.75,
    borderColor: colors.shadowGray,
    gap: 25,
  },
  stepCell: {
    flex: 1,
    alignItems: "center",
    gap: 8,
  },
  stepNumber: {
    alignSelf: "flex-start",
    fontFamily: "PoppinsBold",
    color: colors.shadowGray,
  },
  stepImage: {
    width: 80,
    height: 80,
    aspectRatio: 1,
  },
  stepLabel: {
    textAlign: "center",
    fontSize: 12,
  },
});
