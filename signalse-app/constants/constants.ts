import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const constants = {
  windowWidth: width,
  windowHeight: height,
};
