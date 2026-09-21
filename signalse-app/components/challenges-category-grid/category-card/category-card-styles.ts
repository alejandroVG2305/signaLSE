import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";
import { constants } from "../../../constants/constants";

export const styles = StyleSheet.create({
  card: {
    height: 105,
    width: 105,
    backgroundColor: colors.indigoBlue,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    padding: 4,
    borderWidth: 1.5,
    borderColor: colors.transparentMainBlue80,
  },
  wideCard: {
    width: constants.windowWidth - 60,
    height: 64,
    flexDirection: "row",
    paddingHorizontal: 16,
    gap: 12,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedCard: {
    backgroundColor: colors.transparentSkyBlue80,
  },
  label: {
    fontFamily: "PoppinsBold",
    fontSize: 13,
    textAlign: "center",
  },
  wideLabel: {
    fontSize: 20,
  },
});
