import { Pressable, View } from "react-native";
import { AppText } from "../../AppText";
import { styles } from "./letter-button";
import i18n from "../../../i18n";

interface LetterButtonProps {
  letter: string;
  size: number;
  onPress?: () => void;
  pressed: boolean;
}

export default function LetterButton({
  letter,
  size,
  onPress = () => {},
  pressed,
}: LetterButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`${i18n.t("letter")} ${letter.toUpperCase()}`}
      accessibilityState={{ selected: pressed }}
    >
      <View
        style={[
          styles.buttonContainer,
          { width: size, height: size },
          pressed
            ? styles.buttonContainerSelected
            : styles.buttonContainerUnselected,
        ]}
      >
        <AppText
          style={[
            styles.letter,
            pressed ? styles.letterSelected : styles.letterUnselected,
          ]}
        >
          {letter}
        </AppText>
      </View>
    </Pressable>
  );
}
