import { ReactNode } from "react";
import { View } from "react-native";
import SectionTitle from "../../../section-title/SectionTitle";
import { styles } from "./stat-section-styles";

export function StatSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <>
      <SectionTitle>{title}</SectionTitle>
      <View style={styles.statsSummary}>{children}</View>
    </>
  );
}
