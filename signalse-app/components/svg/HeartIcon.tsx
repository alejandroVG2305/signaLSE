import Svg, {
  Path,
  Defs,
  RadialGradient,
  Stop,
  LinearGradient,
} from "react-native-svg";
import { AppSvgProps } from "./app-svg-props";

export const HeartIcon = (props: AppSvgProps) => (
  <Svg width={props.size} height={props.size} viewBox="0 0 24 24" {...props}>
    <Path
      fill="url(#a)"
      d="M16.131 3.714A5.005 5.005 0 0 0 12 5.891a5.005 5.005 0 0 0-4.131-2.177 5.014 5.014 0 0 0-5.012 5.012c0 6.108 9.143 11.6 9.143 11.6s9.143-5.492 9.143-11.6a5.014 5.014 0 0 0-5.012-5.012Z"
    />
    <Path
      fill="url(#b)"
      d="M18.206 4.16c2.742 4.372.217 10.109-2.817 11.737-3.35 1.8-5.64.955-10.383-1.737C7.708 17.743 12 20.32 12 20.32s9.143-5.491 9.143-11.6a5.015 5.015 0 0 0-2.937-4.56Z"
      opacity={0.5}
    />
    <Path
      fill="url(#c)"
      d="M16.131 3.714A5.005 5.005 0 0 0 12 5.891a5.005 5.005 0 0 0-4.131-2.177 5.014 5.014 0 0 0-5.012 5.012c0 6.108 9.143 11.6 9.143 11.6s9.143-5.492 9.143-11.6a5.014 5.014 0 0 0-5.012-5.012Z"
      opacity={0.5}
    />
    <Path
      fill="url(#d)"
      d="M16.131 3.714A5.005 5.005 0 0 0 12 5.891a5.005 5.005 0 0 0-4.131-2.177 5.014 5.014 0 0 0-5.012 5.012c0 6.108 9.143 11.6 9.143 11.6s9.143-5.492 9.143-11.6a5.014 5.014 0 0 0-5.012-5.012Z"
      opacity={0.5}
    />
    <Path
      fill="url(#e)"
      d="M10.749 5.749c.502 1.183-.612 2.788-2.492 3.583-1.88.794-3.806.485-4.308-.692-.503-1.177.611-2.788 2.491-3.583 1.88-.794 3.806-.491 4.309.692Z"
      opacity={0.24}
    />
    <Path
      fill="url(#f)"
      d="M16.874 4.789c.715.788.274 2.348-.977 3.48-1.251 1.131-2.846 1.411-3.56.623-.714-.789-.274-2.349.977-3.48C14.566 4.28 16.16 4 16.874 4.789Z"
      opacity={0.24}
    />
    <Path
      fill="url(#g)"
      d="M16.223 5.046c2.514.857 4.914 4.571.857 9.2-2.428 2.771-5.08 4.171-8.451 3.623a30.45 30.45 0 0 0 3.377 2.457s9.143-5.492 9.143-11.6a5.023 5.023 0 0 0-5.018-5.012 5.005 5.005 0 0 0-4.13 2.177s2.382-1.474 4.222-.845Z"
      opacity={0.32}
    />
    <Defs>
      <RadialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(12.46295 -7.0248 5.57245 9.88628 9.385 8.348)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.248} stopColor="red" />
        <Stop offset={0.864} stopColor="#C20000" />
      </RadialGradient>
      <RadialGradient
        id="b"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(10.73016 -6.0481 4.7977 8.51177 9.739 7.47)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.248} stopColor="red" />
        <Stop offset={1} stopColor="#C20000" />
      </RadialGradient>
      <RadialGradient
        id="c"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(12.46295 -7.0248 5.57245 9.88628 9.385 8.348)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" stopOpacity={0.25} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </RadialGradient>
      <RadialGradient
        id="d"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="rotate(-26.296 35.528 -24.494) scale(10.4431 5.16038)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#BD2719" stopOpacity={0.25} />
        <Stop offset={1} stopColor="#BD2719" stopOpacity={0} />
      </RadialGradient>
      <RadialGradient
        id="e"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(3.44964 -1.37214 .85235 2.14287 7.347 7.195)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </RadialGradient>
      <RadialGradient
        id="f"
        cx={0}
        cy={0}
        r={1}
        gradientTransform="matrix(2.3281 -2.00697 1.24678 1.44628 14.6 6.846)"
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#fff" />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </RadialGradient>
      <LinearGradient
        id="g"
        x1={13.887}
        x2={15.658}
        y1={26.85}
        y2={2.964}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#860805" />
        <Stop offset={1} stopColor="#BD2719" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);
