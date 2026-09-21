import { StyleSheet } from "react-native";
import { constants } from "../constants/constants";
import { colors } from "./colors";

export const styles = StyleSheet.create({
  termTitle: {
    fontSize: 27,
  },
  sectionTitle: {
    fontSize: 17,
    marginTop: 10,
  },
  spellButton: {
    alignSelf: "center",
    marginTop: 10,
  },
  divider: {
    marginTop: 10,
    width: constants.windowWidth,
    alignSelf: "center",
    backgroundColor: colors.shadowGray,
    height: 0.5,
  },

  keyboardAvoidContainer: {
    paddingBottom: 30,
  },
});
