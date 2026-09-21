import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

const DIALOG_FONT_SIZE = 16;

export const styles = StyleSheet.create({
  dialogConainer: {
    gap: 10,
  },
  pointsContainer: {
    flexDirection: "row",
    gap: 5,
    marginVertical: 10,
    backgroundColor: colors.transparentMainBlue40,
    padding: 10,
    paddingHorizontal: 100,
    borderRadius: 10,
  },
  pointsIndicator: {
    color: colors.darkMainBlue,
    fontFamily: "PoppinsBold",
    fontSize: DIALOG_FONT_SIZE,
    textAlign: "left",
  },
  dialogText: {
    color: colors.black,
    fontSize: DIALOG_FONT_SIZE,
    textAlign: "center",
  },
  dialogTitle: {
    fontSize: 24,
    fontFamily: "PoppinsBold",
    color: colors.mainBlue,
    textAlign: "center",
  },
  petIcon: {
    height: 150,
    width: 200,
    resizeMode: "contain",
  },
});
