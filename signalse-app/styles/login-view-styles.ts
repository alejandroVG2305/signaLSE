import { StyleSheet } from "react-native";
import { constants } from "../constants/constants";

export const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    gap: 10,
    paddingVertical: 20,
  },
  notAccountContainer: {
    flexDirection: "row",
    alignSelf: "center",
    gap: 10,
    padding: 10,
  },
  notAccountText: {
    fontFamily: "PoppinsItalic",
  },
  divider: {
    width: constants.windowWidth * 0.85,
    alignSelf: "center",
  },
  loginText: {
    fontFamily: "PoppinsBold",
  },
  sendLinkButton: {
    marginTop: 10,
    alignSelf: "center",
  },
  forgotPasswordHeader: {
    gap: 10,
  },
});
