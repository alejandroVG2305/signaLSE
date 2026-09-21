import Svg, { Path } from "react-native-svg";
import { AppSvgProps } from "./app-svg-props";

export const Lightning = (props: AppSvgProps) => (
  <Svg width={props.size} height={props.size} viewBox="0 0 24 24" {...props}>
    <Path fill="#f1c40f" d="M7 0 2 12h8L6 22 20 8h-9l6-8z" />
    <Path fill="#f39c12" d="M7 0 2 12h3l5-12zm3 12L6 22l3-3 4-7z" />
    <Path fill="#e67e22" d="m10 12-.406 1H12.5l.5-1h-3z" />
  </Svg>
);
