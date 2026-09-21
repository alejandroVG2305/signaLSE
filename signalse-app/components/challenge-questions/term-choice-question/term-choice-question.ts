import { StyleSheet } from "react-native";
import { constants } from "../../../constants/constants";
import { colors } from "../../../styles/colors";

export const styles = StyleSheet.create({
  signVideo: {
    height: 250,
    width: 250,
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  optionsContainer: {
    gap: 15,
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  optionButton: {
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 15,
    padding: 8,
    width: constants.windowWidth - 75,
    height: 50,
    backgroundColor: colors.indigoBlue,
    borderWidth: 2,
    borderColor: colors.transparentMainBlue40,
  },
  optionButtonSelected: {
    borderColor: colors.intenseSkyBlue,
    borderWidth: 3,
  },
  optionButtonCorrect: {
    backgroundColor: colors.intenseSkyBlue,
    borderColor: colors.intenseSkyBlue,
  },
  optionButtonWrong: {
    backgroundColor: colors.lightOrange,
    borderColor: colors.lightOrange,
  },
  optionText: {
    fontSize: 20,
    fontFamily: "PoppinsBold",
    textAlign: "center",
  },
  optionTextCorrect: {
    color: colors.darkMainBlue,
  },
  optionTextWrong: {
    color: colors.darkMainBlue,
  },
  resultBadge: {
    position: "absolute",
    right: -10,
    top: -10,
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.darkMainBlue,
  },
  resultBadgeCorrect: {
    backgroundColor: colors.intenseSkyBlue,
  },
  resultBadgeWrong: {
    backgroundColor: colors.lightOrange,
  },
});
