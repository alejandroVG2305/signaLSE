import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";
import { constants } from "../../constants/constants";

export const styles = StyleSheet.create({
  footer: {
    backgroundColor: colors.mainBlue,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 30,
  },

  letterBoxContainer: {
    backgroundColor: colors.transparentMainBlue40,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    width: constants.windowWidth - 200,
    borderRadius: 15,
    borderWidth: 0.75,
    borderColor: colors.transparentMainBlue80,
  },

  letterCircleContainer: {
    backgroundColor: colors.white,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 32,
    height: 64,
    width: 64,
    overflow: "hidden",
  },

  letter: {
    fontFamily: "PoppinsBold",
    color: colors.mainBlue,
    fontSize: 32,
  },

  faceContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white,
    borderRadius: 32,
  },

  pointsText: {
    fontFamily: "PoppinsBold",
    color: colors.mainBlue,
    fontSize: 12,
    marginTop: 2,
  },
});
