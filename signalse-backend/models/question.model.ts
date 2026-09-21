import { model, Schema } from "mongoose";
import { Question } from "../domain/question";

const signOptionSchema = new Schema(
  {
    id: { type: String, required: true },
    mediaUrl: { type: String, required: true },
  },
  { _id: false },
);

const termOptionSchema = new Schema(
  {
    id: { type: String, required: true },
    text: { type: String, required: true },
  },
  { _id: false },
);

const optionSchema = new Schema(
  {
    id: { type: String, required: true, default: null },
    mediaUrl: { type: String, default: null }, // SignOption
    text: { type: String }, // TermOption
    mediaItems: { type: [signOptionSchema] }, // MatchChoiceOptions
    textItems: { type: [termOptionSchema] }, // MatchChoiceOptions
  },
  { _id: false },
);

const questionSchema = new Schema<Question>({
  questionId: { type: String, required: true, unique: true },
  signIds: { type: [String], ref: "Sign" },
  type: {
    type: String,
    enum: ["WORD_CHOICE", "SIGN_CHOICE", "MATCH_CHOICE"],
    required: true,
  },
  category: { type: String, required: true },
  minLevel: { type: Number, required: true, default: 1 },
  content: {
    question: { type: String, required: true },
    mediaUrl: { type: String },
    data: {
      options: { type: [optionSchema], default: undefined },
      correctOptionId: { type: String },
      correctMatches: { type: Map, of: String },
    },
  },
});

export const QuestionModel = model<Question>("Question", questionSchema);
