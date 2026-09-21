import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

export const styles = StyleSheet.create({
  avatarGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
    marginTop: 12,
  },
  avatarGridItem: {
    backgroundColor: colors.darkMainBlue,
    borderRadius: 40,
    padding: 8,
    borderWidth: 2,
    borderColor: "transparent",
  },
  avatarGridItemSelected: {
    borderColor: colors.intenseSkyBlue,
  },
  avatarGridImage: {
    width: 44,
    height: 44,
  },
});
