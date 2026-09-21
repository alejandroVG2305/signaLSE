import { StyleProp, TextStyle, View } from "react-native";
import { AppText } from "../../../AppText";
import { styles } from "./total-stat-row-styles";

export function TotalStatRow({
  label,
  value,
  valueStyle,
}: {
  label: string;
  value: number | null | undefined;
  valueStyle?: StyleProp<TextStyle>;
}) {
  return (
    <View
      style={styles.totalStatRow}
      accessible={true}
      accessibilityLabel={`${label}: ${value ?? 0}`}
    >
      <AppText>{label}</AppText>
      <AppText style={valueStyle ?? styles.totalStatNumber}>{value ?? 0}</AppText>
    </View>
  );
}
