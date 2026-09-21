import { ReactNode } from "react";
import { View, ViewProps } from "react-native";
import { AppText } from "../../../AppText";
import i18n from "../../../../i18n";
import AppCheckbox from "../../../app-checkbox/AppCheckbox";
import { styles } from "./daily-goal-styles";
import { AppProgressBar } from "../../../app-progress-bar/AppProgressBar";

interface DailyGoalProps extends ViewProps {
  icon: ReactNode;
  name: string;
  current: number;
  goal: number;
  completed: boolean;
  progressColor?: string;
  onGoalStatusChange: () => void;
}

export default function DailyGoal(props: DailyGoalProps) {
  const progress = Math.min(
    Math.max((props.current / props.goal) * 100, 0),
    100,
  );
  return (
    <View
      style={styles.goalContainer}
      accessible={true}
      accessibilityLabel={`${props.name}. ${props.current} ${i18n.t("of")} ${props.goal}`}
    >
      <View style={styles.upperPart}>
        {props.icon}
        <AppCheckbox
          value={props.completed}
          onValueChange={props.onGoalStatusChange}
          style={styles.checkbox}
        />
      </View>
      <AppText style={styles.goalName}>{props.name}</AppText>
      <AppText style={styles.goalStatus}>
        {`${props.current} ${i18n.t("of")} ${props.goal}`}
      </AppText>
      <AppProgressBar progress={progress} fillColor={props.progressColor} />
    </View>
  );
}
