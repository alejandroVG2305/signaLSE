import { Image, View } from "react-native";
import { TRAINING_STEPS } from "./training-steps";
import { AppText } from "../AppText";
import { styles } from "./training-steps-styles";

export default function TrainingSteps() {
  return (
    <View style={styles.stepsContainer}>
      {TRAINING_STEPS.map((item) => (
        <View
          key={item.id}
          style={styles.stepCell}
          accessible={true}
          accessibilityLabel={`${item.step}. ${item.label}`}
        >
          <AppText style={styles.stepNumber}>{item.step}</AppText>
          <Image
            style={styles.stepImage}
            source={item.image}
            resizeMode="contain"
          />
          <AppText style={styles.stepLabel}>{item.label}</AppText>
        </View>
      ))}
    </View>
  );
}
