import { StyleSheet } from "react-native";
import { colors } from "../../../../styles/colors";
import { constants } from "../../../../constants/constants";

export const styles = StyleSheet.create({
  goalContainer: {
    backgroundColor: colors.transparentMainBlue40,
    padding: 15,
    borderRadius: 20,
    borderWidth: 0.75,
    borderColor: colors.shadowGray,
    width: constants.windowWidth * 0.44,
  },
  upperPart: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  checkbox: {
    borderRadius: 12,
    height: 24,
    width: 24,
  },
  goalName: {
    fontFamily: "PoppinsBold",
    fontSize: 14,
    marginBottom: 8,
  },
  goalStatus: {
    fontSize: 12,
    marginBottom: 4,
  },
});
