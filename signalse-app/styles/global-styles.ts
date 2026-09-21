import { StyleSheet } from "react-native";
import { colors } from "./colors";
import { constants } from "../constants/constants";

export const globalStyles = StyleSheet.create({
  flex1Container: {
    flex: 1,
    backgroundColor: colors.mainBlue,
  },
  centeredText: {
    textAlign: "center",
  },
  justifiedText: {
    textAlign: "justify",
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  mainContainer: {
    marginHorizontal: 15,
    marginVertical: 30,
    gap: 20,
  },
  authContainer: {
    alignItems: "center",
    gap: 10,
    paddingVertical: 20,
  },
  toolbarContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: constants.windowWidth,
    paddingHorizontal: 15,
    marginTop: 5,
  },
  background: {
    flex: 1,
    backgroundColor: colors.mainBlue,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxContainer: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  appText: {
    fontFamily: "Poppins",
    color: colors.white,
    fontSize: 15,
  },
  authHeader: {
    marginHorizontal: 20,
    marginTop: 40,
  },
  authSubtitle: {
    fontFamily: "PoppinsItalic",
    fontSize: 12,
    textAlign: "justify",
  },
  signupToolbar: {
    position: "absolute",
    top: 10,
  },

  checkBox: {
    borderRadius: 5,
    width: 22,
    height: 22,
  },

  modalText: {
    color: colors.black,
    textAlign: "center",
    marginBottom: 20,
  },
  featureContainer: {
    flexDirection: "row",
    gap: 20,
    backgroundColor: colors.transparentMainBlue40,
    padding: 15,
    borderRadius: 20,
    borderWidth: 0.75,
    borderColor: colors.shadowGray,
    alignItems: "center",
  },

  highlightedData: {
    color: colors.intenseSkyBlue,
    fontFamily: "PoppinsBold",
    fontSize: 24,
  },

  tabBar: {
    backgroundColor: colors.darkMainBlue,
    borderTopWidth: 0,
  },

  textJustify: {
    textAlign: "justify",
  },
});
