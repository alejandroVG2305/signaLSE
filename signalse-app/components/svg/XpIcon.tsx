import Svg, { Circle, Path } from "react-native-svg";
import { AppSvgProps } from "./app-svg-props";

export const XpIcon = (props: AppSvgProps) => (
  <Svg
    id="Layer_1"
    width={props.size}
    height={props.size}
    viewBox="0 0 120 120"
    {...props}
  >
    <Circle cx={60.1} cy={81.5} r={22.5} fill="#FFC54D" />
    <Path
      d="M76.2 59.9H44c-2.5 0-4.5-2-4.5-4.5v-5.3h41.1v5.3c0 2.5-2 4.5-4.4 4.5zM76.2 16H44c-2.5 0-4.5 2-4.5 4.5v28.3h41.1V20.5c0-2.5-2-4.5-4.4-4.5z"
      fill="#F46262"
    />
    <Path
      d="m61.1 69 3.4 6.8c.2.3.5.6.8.6l7.5 1.1c.9.2 1.3 1.2.6 1.9L68 84.8c-.2.2-.4.6-.3 1l1.3 7.5c.2.9-.8 1.6-1.6 1.1l-6.7-3.5c-.3-.2-.7-.2-1 0l-6.8 3.5c-.8.4-1.8-.2-1.6-1.1l1.3-7.5c.1-.3-.1-.7-.3-1l-5.4-5.3c-.6-.6-.3-1.8.6-1.9l7.5-1.1c.3-.1.6-.2.8-.6l3.4-6.8c.3-.9 1.5-.9 1.9-.1z"
      fill={"#fff"}
    />
    <Path d="M51.5 16h17.2v35.5H51.5z" fill="#FFC54D" />
    <Path
      d="M82.9 51.5H37.1c-.7 0-1.2-.5-1.2-1.2V50c0-.7.5-1.2 1.2-1.2H83c.7 0 1.2.5 1.2 1.2v.3c-.1.6-.6 1.2-1.3 1.2z"
      fill={"#285fff"}
    />
  </Svg>
);
