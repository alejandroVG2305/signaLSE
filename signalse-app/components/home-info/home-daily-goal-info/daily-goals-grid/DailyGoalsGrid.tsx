import { View } from "react-native";
import { styles } from "./daily-goals-grid-styles";
import DailyGoal from "../daily-goal/DailyGoal";
import AnimatedEntry from "../../../utils/animated-entry/AnimatedEntry";
import {
  DAILY_GOALS_STAGGER,
  DELAYS,
} from "../../../../constants/animation-delays";
import { DailyGoal as DailyGoalModel } from "../../../../model/domain/goals/daily-goal";
import { useDailyGoals } from "../../../../hooks/useDailyGoals";

interface DailyGoalsGridProps {
  dailyGoalData: DailyGoalModel[];
}

export default function DailyGoalsGrid({ dailyGoalData }: DailyGoalsGridProps) {
  const dailyGoals = useDailyGoals(dailyGoalData);

  return (
    <View style={styles.grid}>
      {dailyGoals.map((goal, index) => (
        <AnimatedEntry
          key={goal.name}
          delay={DELAYS.dailyGoals + index * DAILY_GOALS_STAGGER}
        >
          <DailyGoal {...goal} onGoalStatusChange={() => {}} />
        </AnimatedEntry>
      ))}
    </View>
  );
}
