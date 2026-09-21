import { Image, ImageProps } from "react-native";

export const AppPetFinishedGame = (props: ImageProps) => (
  <Image
    source={require("../../assets/pet/appPetFinishedGame.png")}
    {...props}
  />
);
