import { View, ViewProps } from "react-native";
import { AppText } from "../../AppText";
import { globalStyles } from "../../../styles/global-styles";
import { styles } from "./stats-item-styles";
import { StatsItemData } from "../../../model/domain/users/userStats";

interface StatsItemProps extends ViewProps {
  itemData: StatsItemData;
}

export default function StatsItem({ itemData, style }: StatsItemProps) {
  return (
    <View
      style={[styles.container, style]}
      accessible={true}
      accessibilityLabel={`${itemData.data} ${itemData.subtitle}`}
    >
      <View style={styles.dataRow}>
        {itemData.icon}
        <AppText
          style={[
            styles.data,
            globalStyles.highlightedData,
            itemData.textColor ? { color: itemData.textColor } : undefined,
          ]}
        >
          {itemData.data}
        </AppText>
      </View>
      <View style={styles.subtitleContainer}>
        <AppText style={styles.subtitle}>
          {itemData.subtitle.toUpperCase()}
        </AppText>
      </View>
    </View>
  );
}
