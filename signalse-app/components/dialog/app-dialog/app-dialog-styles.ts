import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";
import { constants } from "../../../constants/constants";

export const styles = StyleSheet.create({
  dialog: {
    width: constants.windowWidth,
    height: constants.windowHeight,
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: colors.transparentBlack80,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalContent: {
    backgroundColor: colors.white,
    padding: 25,
    borderRadius: 10,
    elevation: 5,
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});
