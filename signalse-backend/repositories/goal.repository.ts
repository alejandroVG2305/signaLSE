import { Goal } from "../domain/goal";
import { GoalModel } from "../models/goal.model";

export const goalRepository = {
  findAll: async (): Promise<Goal[]> => {
    try {
      const goals = GoalModel.find({}).exec();
      return goals;
    } catch (error) {
      throw error;
    }
  },
};
