import { ReactNode } from "react";
import { AppText } from "../AppText";
import { styles } from "./section-title";
import { TextProps } from "react-native";

interface SectionTitleProps extends TextProps {
  children: ReactNode;
}

export default function SectionTitle({
  children,
  ...props
}: SectionTitleProps) {
  return (
    <AppText
      accessibilityRole="header"
      {...props}
      style={[styles.sectionTitle, props.style]}
    >
      {children}
    </AppText>
  );
}
