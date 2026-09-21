import { Image, ImageProps } from "react-native";

export default function AppLogo(props: ImageProps) {
  return (
    <Image
      {...props}
      style={[props.style, { width: 190, height: 55 }]}
      source={require("../../assets/appLogo.png")}
    ></Image>
  );
}
