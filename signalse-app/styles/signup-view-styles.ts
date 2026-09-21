import { StyleSheet } from "react-native";
import { constants } from "../constants/constants";

export const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    gap: 3,
    paddingVertical: 20,
  },
  nameAndSurname: {
    flex: 1,
    flexDirection: "row",
    gap: 5,
  },
  divider: {
    width: constants.windowWidth * 0.85,
    alignSelf: "center",
  },
  loginText: {
    fontFamily: "PoppinsBold",
  },
  alreadyAccountContainer: {
    flexDirection: "row",
    alignSelf: "center",
    gap: 10,
    padding: 10,
  },
  alreadyAccountText: {
    fontFamily: "PoppinsItalic",
  },
  signUpToolbar: {
    position: "absolute",
    top: 10,
  },
});
