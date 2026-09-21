import { SignFilter } from "../domain/filters/sign.filter";
import { Sign } from "../domain/sign";
import { SignModel } from "../models/sign.model";

export const signRepository = {
  /**
   * Returns <count> terms from Sign collection, provided they have <maxLetters> or less letters
   * @param maxLetters greatest number of letters the query can reach
   * @param count the number of terms to return by the query
   * @returns
   */
  findRandomByTermLength: async (maxLetters: number, count: number) => {
    return SignModel.aggregate([
      {
        $match: {
          supportsAITraining: true,
          $expr: {
            $allElementsTrue: {
              $map: {
                input: { $split: ["$term", " "] },
                as: "word",
                in: { $lte: [{ $strLenCP: "$$word" }, maxLetters] },
              },
            },
          },
        },
      },
      { $sample: { size: count } },
    ]).exec();
  },

  /**
   * Returns signs from Sign collection which satisfy conditions in filter.
   * If filter is not provided, returns every sign in the system
   * @param filter
   * @returns
   */
  findSigns: async (filter: SignFilter): Promise<Sign[]> => {
    const query: Record<string, any> = {};
    if (filter.initialLetters?.length) {
      query.$or = filter.initialLetters.map((letter) => ({
        // A regex per initial letter, combined with $or
        term: { $regex: `^${letter}`, $options: "i" },
      }));
    }
    if (filter.categories?.length) {
      query.category = { $in: filter.categories };
    }
    return SignModel.find(query).sort({ term: 1 }).lean().exec() as Promise<
      Sign[]
    >;
  },

  /**
   * Retrieves distinct categories from every Sign in system
   * @returns list of categories
   */
  findCategories: async (): Promise<string[]> => {
    return await SignModel.distinct("category").exec();
  },

  /**
   * Retrieves a sign given its functional id
   * @param signId functional id
   * @returns sign identified by signId
   */
  findSignById: async (signId: string): Promise<Sign | null> => {
    const sign = await SignModel.findOne({ signId: signId }).lean();
    return sign as Sign | null;
  },

  countTotalSigns: async (): Promise<number> => {
    return SignModel.countDocuments().exec();
  },

  countSignsByMinLevel: async (level: number): Promise<number> => {
    return SignModel.countDocuments({ minLevel: level }).exec();
  },
};
