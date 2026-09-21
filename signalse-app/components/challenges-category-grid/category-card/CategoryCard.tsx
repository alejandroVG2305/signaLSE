import { ComponentType } from "react";
import { TouchableOpacity } from "react-native";
import { AppText } from "../../AppText";
import { AppSvgProps } from "../../svg/app-svg-props";
import { styles } from "./category-card-styles";

interface CategoryCardProps {
  label: string;
  Icon: ComponentType<AppSvgProps>;
  iconSize?: number;
  isSelected: boolean;
  onPress: () => void;
  wide?: boolean;
}

export const CategoryCard = ({
  label,
  Icon,
  iconSize = 44,
  isSelected,
  onPress,
  wide = false,
}: CategoryCardProps) => (
  <TouchableOpacity
    style={[
      styles.card,
      wide && styles.wideCard,
      isSelected && styles.selectedCard,
    ]}
    onPress={onPress}
    activeOpacity={0.75}
    accessibilityRole="button"
    accessibilityLabel={label}
    accessibilityState={{ selected: isSelected }}
  >
    <Icon size={iconSize} />
    <AppText style={[styles.label, wide && styles.wideLabel]}>{label}</AppText>
  </TouchableOpacity>
);
