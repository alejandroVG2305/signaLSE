import { model, Schema } from "mongoose";
import { Sign } from "../domain/sign";
import { isQuestionTerm } from "../utils/letter-normalizer";

const validator = <T>(array: Array<T>) => array.length <= 4;

const signSchema = new Schema<Sign>({
  signId: { type: String, required: true, unique: true },
  term: { type: String, required: true, unique: true },
  category: { type: String, required: true },
  complexity: { type: String, required: true },
  minLevel: { type: Number, required: true, default: 1 },
  videoUrl: { type: String, required: true, unique: true },
  meaning: { type: String, required: true },
  keySteps: {
    type: [String],
    default: [],
    required: true,
    validate: validator,
  },
  supportsAITraining: { type: Boolean, default: true, required: true },
  createdAt: { type: Date, default: Date.now, required: true },
});

signSchema.pre("validate", function () {
  if (isQuestionTerm(this.term)) {
    this.supportsAITraining = false;
  }
});

export const SignModel = model<Sign>("Sign", signSchema);
