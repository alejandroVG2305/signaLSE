import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";
import { constants } from "../../../constants/constants";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    width: constants.windowWidth / 3 - 15,
    backgroundColor: colors.transparentMainBlue40,
    borderRadius: 15,
    borderWidth: 1.5,
    borderColor: colors.transparentMainBlue80,
    alignItems: "center",
    minHeight: 100,
  },
  subtitleContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  dataRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,

    flex: 1,
  },
  data: {
    fontSize: 20,
    includeFontPadding: false,
  },
  subtitle: {
    fontFamily: "PoppinsBold",
    fontSize: 12,
    textAlign: "center",
  },
});
