import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 10,
    minHeight: 100,
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: colors.indigoBlue,
    borderRadius: 15,
  },
  avatar: {
    height: 40,
    width: 40,
  },
  avatarContainer: {
    padding: 7,
    borderRadius: 30,
    backgroundColor: colors.darkMainBlue,
  },
  nameText: {
    fontFamily: "PoppinsBold",
    fontSize: 16,
  },
  pointsText: {
    fontFamily: "PoppinsBold",
    color: colors.intenseSkyBlue,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    flexShrink: 0,
  },
  placeContainer: {
    width: 28,
    alignItems: "center",
    justifyContent: "center",
  },
  placeText: {
    fontFamily: "PoppinsBold",
    color: colors.shadowGray,
  },
  centerContainer: {
    flex: 1,
    gap: 8,
    alignItems: "flex-start",
    marginLeft: 10,
  },
  rightContainer: {
    alignItems: "center",
    justifyContent: "space-between",
    gap: 5,
    marginHorizontal: 5,
  },
  streakText: {
    fontFamily: "PoppinsBold",
    color: colors.lightOrange,
    includeFontPadding: false,
  },
  lvText: {
    fontFamily: "PoppinsBold",
    color: colors.intenseSkyBlue,
    marginRight: 10,
    includeFontPadding: false,
  },
  rowText: {
    includeFontPadding: false,
  },
  row: {
    flexDirection: "row",
    gap: 8,
    justifyContent: "space-between",
  },
});
