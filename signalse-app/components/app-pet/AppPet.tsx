import { Image, ImageProps } from "react-native";

export const AppPetCircleIndicator = (props: ImageProps) => (
  <Image
    source={require("../../assets/pet/appPetCircleIndicator.png")}
    {...props}
  />
);
