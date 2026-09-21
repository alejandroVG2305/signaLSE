import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.transparentMainBlue80,
    borderRadius: 16,
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderWidth: 1.5,
    borderColor: colors.shadowGray,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: colors.white,
    marginLeft: 5,
  },
});
