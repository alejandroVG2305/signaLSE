import { GoalUIConfig } from "../../../../model/domain/goals/goal-ui-config";
import { colors } from "../../../../styles/colors";
import { ABC } from "../../../svg/ABC";
import { Bullseye } from "../../../svg/Bullseye";
import { Lightning } from "../../../svg/Lightning";
import { Trophy } from "../../../svg/Trophy";

const iconSize = 32;

export const GOAL_UI_REGISTRY: GoalUIConfig[] = [
  {
    key: "daily_challenge",
    icon: <Lightning size={iconSize} />,
    labelKey: "dailyGoals.dailyChallenge",
    progressColor: undefined,
  },
  {
    key: "new_signs",
    icon: <ABC size={iconSize} />,
    labelKey: "dailyGoals.newSigns",
    progressColor: colors.lightOrange,
  },
  {
    key: "training",
    icon: <Bullseye size={iconSize} />,
    labelKey: "dailyGoals.training",
    progressColor: colors.lightOrange,
  },
  {
    key: "daily_xp",
    icon: <Trophy size={iconSize} />,
    labelKey: "dailyGoals.dailyXP",
    progressColor: undefined,
  },
];
