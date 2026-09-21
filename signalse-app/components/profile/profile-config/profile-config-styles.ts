import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

export const styles = StyleSheet.create({
  profileHeaderContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  avatarView: {
    borderRadius: 70,
    padding: 20,
    backgroundColor: colors.darkMainBlue,
    borderWidth: 2.5,
    borderColor: colors.intenseSkyBlue,
  },
  avatar: {
    height: 80,
    width: 80,
  },
  nameText: {
    marginVertical: 10,
  },
  section: {
    marginTop: 25,
    gap: 10,
  },
  preferenceItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 20,
    backgroundColor: colors.transparentMainBlue40,
    borderRadius: 15,
  },
  preferenceLabelledIcon: {
    flexDirection: "row",
    gap: 20,
  },
  button: {
    alignSelf: "center",
    marginTop: 20,
  },
});
