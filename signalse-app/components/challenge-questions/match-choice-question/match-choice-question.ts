import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

const CARD_SIZE = 120;
const CARD_WIDTH = 130;
const COL_GAP = 35;
const ROW_GAP = 15;

export const styles = StyleSheet.create({
  helpButtonRow: {
    alignItems: "flex-end",
    paddingHorizontal: 35,
    marginBottom: 10,
  },
  container: {
    gap: ROW_GAP,
    marginTop: 5,
    paddingHorizontal: 35,
  },
  row: {
    flexDirection: "row",
    gap: COL_GAP,
    alignItems: "center",
    justifyContent: "center",
  },
  termCard: {
    height: CARD_WIDTH,
    width: CARD_WIDTH,
    borderRadius: 15,
    backgroundColor: colors.indigoBlue,
    borderWidth: 2,
    borderColor: colors.transparentMainBlue40,
    justifyContent: "center",
    alignItems: "center",
  },
  termCardSelected: {
    borderColor: colors.intenseSkyBlue,
    borderWidth: 3,
  },
  termCardCorrect: {
    backgroundColor: colors.intenseSkyBlue,
    borderColor: colors.intenseSkyBlue,
  },
  termCardWrong: {
    backgroundColor: colors.lightOrange,
    borderColor: colors.lightOrange,
  },
  termText: {
    fontSize: 18,
    fontFamily: "PoppinsBold",
    textAlign: "center",
  },
  termTextCorrect: {
    color: colors.darkMainBlue,
  },
  termTextWrong: {
    color: colors.darkMainBlue,
  },
  videoWrapper: {
    height: CARD_SIZE,
    width: CARD_WIDTH,
  },
  video: {
    height: CARD_SIZE,
    width: CARD_WIDTH,
    borderWidth: 3,
  },
  videoCorrect: {
    borderColor: colors.intenseSkyBlue,
  },
  videoWrong: {
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
  buttonRow: {
    marginTop: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  timerCompact: {
    position: "absolute",
    right: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
});
