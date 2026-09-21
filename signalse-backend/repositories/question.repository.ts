import { QuestionFilter } from "../domain/filters/question.filter";
import { Question } from "../domain/question";
import { QuestionModel } from "../models/question.model";

export const questionRepository = {
  async findQuestions(filter: QuestionFilter): Promise<Question[]> {
    const matchQuery: Record<string, any> = {};
    if (filter.categories.length > 0) {
      matchQuery.category = { $in: filter.categories };
    }
    if (filter.types.length > 0) {
      matchQuery.type = { $in: filter.types };
    }
    matchQuery.minLevel = { $lte: filter.maxLevel };

    const questions = await QuestionModel.aggregate<Question>([
      { $match: matchQuery },
      { $sample: { size: filter.count > 0 ? filter.count : 10 } },
    ]).exec();

    return questions;
  },
};
