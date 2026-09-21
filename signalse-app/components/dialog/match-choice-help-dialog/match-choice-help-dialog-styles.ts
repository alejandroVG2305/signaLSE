import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    gap: 14,
    width: 280,
  },
  title: {
    fontSize: 20,
    fontFamily: "PoppinsBold",
    color: colors.mainBlue,
    textAlign: "center",
    marginBottom: 2,
  },
  stepsList: {
    marginHorizontal: 20,
    gap: 12,
    marginBottom: 15,
  },
  stepText: {
    color: colors.black,
    fontSize: 15,
  },
});
