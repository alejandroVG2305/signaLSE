import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";
import { constants } from "../../constants/constants";

export const styles = StyleSheet.create({
  container: {
    aspectRatio: 1,
    backgroundColor: colors.mainBlue,
    borderRadius: 8,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: colors.intenseSkyBlue,
  },
  video: {
    flex: 1,
  },
  playOverlay: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  playButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: colors.transparentBlack80,
    justifyContent: "center",
    alignItems: "center",
  },
  fullscreenContainer: {
    flex: 1,
    backgroundColor: colors.black,
    justifyContent: "center",
  },
  fullscreenVideo: {
    width: constants.windowWidth,
    height: constants.windowHeight,
  },
  closeButton: {
    position: "absolute",
    top: 50,
    right: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.transparentBlack80,
    justifyContent: "center",
    alignItems: "center",
  },
});
