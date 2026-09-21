import { TextInput, View } from "react-native";
import i18n from "../../i18n";
import { colors } from "../../styles/colors";
import { SearchIcon } from "../Icons";
import { styles } from "./app-search-bar";

export interface AppSearchBarProps {
  value?: string;
  onChangeText?: (text: string) => void;
  placeholder?: string;
  iconColor?: string;
  onSubmitEditing?: () => void;
}

export default function AppSearchBar({
  value = "",
  onChangeText,
  placeholder = `${i18n.t("search")}...`,
  iconColor = colors.shadowGray,
  onSubmitEditing,
}: AppSearchBarProps) {
  return (
    <View style={styles.container}>
      <SearchIcon color={iconColor} />
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={colors.shadowGray}
        onSubmitEditing={onSubmitEditing}
        returnKeyType="search"
        accessibilityRole="search"
        accessibilityLabel={i18n.t("search")}
      />
    </View>
  );
}
