import { model, Schema } from "mongoose";
import { Goal } from "../domain/goal";

const goalSchema = new Schema<Goal>({
  key: { type: String, required: true, unique: true },
  target: { type: Number, required: true },
  statKey: { type: String, required: true },
});

export const GoalModel = model<Goal>("Goal", goalSchema);
