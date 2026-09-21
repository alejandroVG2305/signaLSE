import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

export const styles = StyleSheet.create({
  card: {
    flex: 0,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: colors.white,
  },
  imageWrapper: {
    height: 150,
    backgroundColor: colors.darkMainBlue,
    justifyContent: "center",
  },
  blockedText: {
    textAlign: "center",
    fontFamily: "PoppinsBold",
    fontSize: 18,
  },
  blockedContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  image: {
    flex: 1,
  },
  footer: {
    flex: 1,
    backgroundColor: colors.indigoBlue,
    paddingHorizontal: 14,
    paddingVertical: 12,
    gap: 8,
    justifyContent: "space-between",
  },
  titleContainer: {
    minHeight: 48,
    justifyContent: "center",
  },
  title: {
    fontSize: 18,
    lineHeight: 24,
    fontFamily: "PoppinsBold",
    color: colors.white,
  },
  category: {
    fontSize: 13,
    lineHeight: 16,
    color: colors.white,
    marginBottom: 5,
  },
});
