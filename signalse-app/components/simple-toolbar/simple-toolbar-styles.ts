import { StyleSheet } from "react-native";
import { constants } from "../../constants/constants";

export const styles = StyleSheet.create({
  toolbar: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: constants.windowWidth,
    paddingHorizontal: 15,
    zIndex: 10,
  },
  backContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  appLogo: {
    width: 100,
    height: 20,
  },
});
