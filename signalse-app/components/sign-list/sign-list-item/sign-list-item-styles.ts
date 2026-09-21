import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

export const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.indigoBlue,
    borderRadius: 16,
    padding: 12,
    gap: 14,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 12,
  },
  content: {
    flex: 1,
    gap: 7,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 18,
    fontFamily: "PoppinsBold",
    color: colors.white,
    lineHeight: 25,
  },
  subtitle: {
    fontSize: 14,
    color: colors.white,
  },
  blockedContainer: {
    width: 80,
    height: 80,
    borderRadius: 12,
    backgroundColor: colors.darkMainBlue,
    justifyContent: "center",
    alignItems: "center",
  },
});
