import { GoalModel } from "../../models/goal.model";

const goals = [
  { key: "daily_challenge", target: 1, statKey: "challengesToday" },
  { key: "new_signs", target: 10, statKey: "signsLearnedToday" },
  { key: "training", target: 5, statKey: "trainingToday" },
  { key: "daily_xp", target: 500, statKey: "xp.today" },
];

export const seedGoals = async () => {
  await GoalModel.deleteMany({});
  await GoalModel.insertMany(goals);
  console.log("Goals seeded");
};
