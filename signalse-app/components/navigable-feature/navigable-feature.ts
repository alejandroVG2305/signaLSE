import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  iconContainer: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.transparentMainBlue40,
    borderWidth: 1.5,
    borderColor: colors.transparentMainBlue40,
  },
  featureTitle: {
    fontFamily: "PoppinsBold",
    fontSize: 16,
  },
  featureSubtitle: {
    fontSize: 12,
  },
  textContainer: {
    flex: 1,
    gap: 4,
    marginRight: 1,
  },
});
