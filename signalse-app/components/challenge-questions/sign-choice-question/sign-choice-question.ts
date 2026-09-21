import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

export const CELL_GAP = 15;
export const CARD_PADDING = 15;

export const styles = StyleSheet.create({
  card: {
    padding: CARD_PADDING,
    borderRadius: 20,
    backgroundColor: colors.transparentMainBlue40,
    borderWidth: 1.5,
    borderColor: colors.transparentMainBlue80,
    marginTop: 30,
  },
  grid: {
    gap: CELL_GAP,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    gap: CELL_GAP,
  },
  borderOverlay: {
    ...StyleSheet.absoluteFillObject,
    borderWidth: 3,
    borderRadius: 8,
  },
  borderOverlaySelected: {
    borderColor: colors.intenseSkyBlue,
  },
  borderOverlayCorrect: {
    borderColor: colors.intenseSkyBlue,
  },
  borderOverlayWrong: {
    borderColor: colors.lightOrange,
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
