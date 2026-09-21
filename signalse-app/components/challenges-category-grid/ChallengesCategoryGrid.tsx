import { View } from "react-native";
import { CategoryCard } from "./category-card/CategoryCard";
import { styles } from "./challenges-category-grid-styles";
import { CHALLENGE_CATEGORIES } from "../../constants/challenge-configuration-params";
import { RandomIcon } from "../svg/RandomIcon";

const RANDOM_CATEGORY_ID = "aleatorio";

interface ChallengesCategoryGridProps {
  isCategorySelected: (id: string) => boolean;
  onCategorySelect: (id: string) => void;
}

export const ChallengesCategoryGrid = ({
  isCategorySelected,
  onCategorySelect,
}: ChallengesCategoryGridProps) => {
  const ITEMS_PER_ROW = 3;

  return (
    <View style={styles.container}>
      {Array.from(
        { length: Math.ceil(CHALLENGE_CATEGORIES.length / ITEMS_PER_ROW) },
        (_, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {CHALLENGE_CATEGORIES.slice(
              rowIndex * ITEMS_PER_ROW,
              rowIndex * ITEMS_PER_ROW + ITEMS_PER_ROW,
            ).map((cat) => (
              <CategoryCard
                key={cat.id}
                label={cat.label}
                Icon={cat.Icon}
                iconSize={32}
                isSelected={isCategorySelected(cat.id)}
                onPress={() => onCategorySelect(cat.id)}
              />
            ))}
          </View>
        ),
      )}
      <CategoryCard
        label="Aleatorio"
        Icon={RandomIcon}
        iconSize={26}
        isSelected={isCategorySelected(RANDOM_CATEGORY_ID)}
        onPress={() => onCategorySelect(RANDOM_CATEGORY_ID)}
        wide
      />
    </View>
  );
};
