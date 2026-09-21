import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const FADE_WIDTH = 36;

export const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.mainBlue,
    position: "relative",
  },
  fadeOverlay: {
    position: "absolute",
    right: 0,
    top: 0,
    bottom: 0,
    width: FADE_WIDTH,
    zIndex: 1,
    elevation: 5,
  },
  scrollContainer: {
    flexDirection: "row",
  },
  scrollContent: {
    flexDirection: "row",
  },
  chipBase: {
    borderRadius: 20,
    height: 40,
    justifyContent: "center",
    marginHorizontal: 10,
    minWidth: 85,
  },
  chipActive: {
    backgroundColor: colors.intenseSkyBlue,
    borderColor: "transparent",
  },
  chipInactive: {
    backgroundColor: "transparent",
    borderColor: colors.shadowGray,
    borderWidth: 1,
  },
  chipInactiveSecondary: {
    backgroundColor: colors.indigoBlue,
    borderColor: "transparent",
  },
  chipTextBase: {
    flex: 1,
    fontFamily: "PoppinsBold",
    fontSize: 13,
    textAlign: "center",
  },
  chipTextActive: {
    color: colors.darkMainBlue,
  },
  chipTextInactive: {
    color: colors.shadowGray,
  },
  chipTextInactiveSecondary: {
    color: colors.white,
  },
});
