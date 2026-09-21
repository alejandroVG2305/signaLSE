import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const styles = StyleSheet.create({
  trainingToolbar: {
    paddingVertical: 5,
  },
  cameraContainer: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  permissionContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    marginHorizontal: 20,
  },
  permissionText: {
    textAlign: "center",
    fontSize: 19,
  },
  permissionPetIcon: {
    height: 150,
    width: 150,
  },

  letterClueContainer: {
    position: "absolute",
    top: 10,
    left: 10,
    backgroundColor: colors.white,
    height: 60,
    width: 60,
    borderRadius: 30,
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  letterClueImage: {
    height: 48,
    width: 48,
  },

  cameraSwitchButton: {
    position: "absolute",
    top: 15,
    right: 15,
    zIndex: 1,
  },

  pointsContainer: {
    position: 'absolute',
    bottom: 15,
    left: 15,
    zIndex: 1,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  points: {
    fontFamily: 'PoppinsBold',
    fontSize: 20
  },

  wordCounterContainer: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    zIndex: 1,
  },

  wordCounter: {
    fontFamily: 'PoppinsBold',
    fontSize: 20
  }
});
