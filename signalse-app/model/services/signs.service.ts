import { SignDetails, SignPreview } from "../domain/signs/sign";
import { Result } from "../result";
import {
  RelatedSignsRequest,
  SignCategoriesResponse,
  SignDetailsRequest,
  SignDetailsResponse,
  SignsRequest,
  SignsResponse,
} from "../sign.model";
import { apiClient, toResult } from "./api/api-client";

export const signService = {
  getSigns: (req: SignsRequest): Promise<Result<SignPreview[]>> => {
    const catString = req.categories.join(",");
    const initialsString = req.initialLetters.join(",");
    return toResult(
      apiClient.get<SignsResponse>(`/getSigns?categories=${catString}&initialLetters=${initialsString}`),
      (r) => (Array.isArray(r.signs) ? r.signs : []),
    );
  },

  getCategories: (): Promise<Result<string[]>> =>
    toResult(apiClient.get<SignCategoriesResponse>("/getSignCategories"), (r) => r.categories),

  getSignDetails: (req: SignDetailsRequest): Promise<Result<SignDetails>> =>
    toResult(apiClient.get<SignDetailsResponse>(`/getSignDetails/${req.signId}`), (r) => r.sign),

  getRelatedSigns: (req: RelatedSignsRequest): Promise<Result<SignPreview[]>> =>
    toResult(
      apiClient.get<SignsResponse>(`/getRelatedSigns?category=${encodeURIComponent(req.category)}`),
      (r) => r.signs,
    ),
};
