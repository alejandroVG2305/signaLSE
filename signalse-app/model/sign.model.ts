import { SignDetails, SignPreview } from "./domain/signs/sign";

export interface SignsRequest {
  categories: string[];
  initialLetters: string[];
}

export interface SignsResponse {
  signs: Array<SignPreview>;
}

export interface SignCategoriesResponse {
  categories: Array<string>;
}

export interface SignDetailsRequest {
  signId: string;
}

export interface SignDetailsResponse {
  sign: SignDetails;
}

export interface RelatedSignsRequest {
  category: string;
}
