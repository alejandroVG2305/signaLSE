import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";
import { constants } from "../../constants/constants";

export const styles = StyleSheet.create({
  card: {
    padding: 20,
    width: "100%",
    maxHeight: constants.windowHeight * 0.85,
    gap: 12,
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontFamily: "PoppinsBold",
    fontSize: 18,
    color: colors.darkMainBlue,
  },
  lastUpdated: {
    fontFamily: "PoppinsItalic",
    fontSize: 12,
    color: colors.passiveGray,
  },
  sectionTitle: {
    fontFamily: "PoppinsBold",
    fontSize: 13,
    color: colors.darkMainBlue,
    marginTop: 10,
    marginBottom: 2,
  },
  body: {
    fontFamily: "Poppins",
    fontSize: 13,
    color: colors.black,
    lineHeight: 20,
  },
  button: {
    alignSelf: "center",
  },
});
