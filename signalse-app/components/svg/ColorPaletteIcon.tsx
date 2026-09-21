import Svg, { Path, G, Circle } from "react-native-svg";
import { AppSvgProps } from "./app-svg-props";

export const ColorPaletteIcon = (props: AppSvgProps) => (
  <Svg width={props.size} height={props.size} viewBox="0 0 14 14" {...props}>
    <G transform="matrix(.3 0 0 .3 -.231 -.2)">
      <Path
        fill="#ffc107"
        d="M24.639 4c-8.6 0-18.43 4.954-18.43 18.947C6.209 33.108 13.842 44 25.519 44h.175c4.385-.079 9.105-2.918 9.105-8.959 0-1.157-.431-2.159-.809-3.042a16.192 16.192 0 0 1-.288-.694c-.864-2.175.089-2.971 2.329-4.565 2.537-1.806 6.013-4.278 5.968-10.819C41.999 12.032 37.756 4 24.639 4zm.56 35.2a3.961 3.961 0 0 1-4.001-3.999 3.962 3.962 0 0 1 4.001-4.001 3.96 3.96 0 0 1 3.998 4.001 3.96 3.96 0 0 1-3.998 3.999z"
      />
      <Circle cx={34.5} cy={16.5} r={3.5} fill="#9c27b0" />
      <Circle cx={25.5} cy={10.5} r={3.5} fill="#2196f3" />
      <Circle cx={15.5} cy={15.5} r={3.5} fill="#4caf50" />
      <Circle cx={14.5} cy={26.5} r={3.5} fill="#ff3d00" />
    </G>
  </Svg>
);
