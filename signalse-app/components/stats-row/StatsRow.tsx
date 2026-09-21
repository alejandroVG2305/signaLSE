import { View } from "react-native";
import StatsItem from "./stats-item/StatsItem";
import { styles } from "./stats-row-styles";
import { StatsItemData } from "../../model/domain/users/userStats";

interface StatsRowProps {
  statItems: StatsItemData[];
  fullWidth?: boolean;
}

export default function StatsRow({ statItems, fullWidth }: StatsRowProps) {
  return (
    <View style={[styles.container]}>
      {statItems.map((item, key) => (
        <StatsItem
          key={key}
          itemData={item}
          style={fullWidth ? styles.itemFlex : undefined}
        />
      ))}
    </View>
  );
}
