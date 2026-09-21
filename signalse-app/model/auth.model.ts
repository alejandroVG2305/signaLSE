import { User } from "./domain/users/user";

// Data that viewModel is sending to service
export interface RegisterRequest {
  name: string;
  surname: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
  acceptPrivacy: boolean;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface UserDataCompletionRequest {
  name: string;
  surname: string;
  username: string;
}

// Data that viewModel receives from service
export interface RegisterResponse {
  message: string;
  user: User;
}

export interface LoginResponse {
  message: string;
  user: User;
}

export interface UserDataCompletionResponse {
  message: string;
  success: true;
}
