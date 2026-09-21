import {
  createUserWithEmailAndPassword,
  deleteUser,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  UserDataCompletionRequest,
  UserDataCompletionResponse,
} from "../auth.model";
import { auth } from "../../firebase-config";
import { firebaseErrorParser } from "../../utils/firebase-error-parser";
import { apiClient, toResult } from "./api/api-client";
import { Result } from "../result";
import { User } from "../domain/users/user";

export const authSync = {
  isRegistering: false,
  forceContextUpdate: () => {},
};

export const authService = {
  register: async (userData: RegisterRequest): Promise<Result<User>> => {
    authSync.isRegistering = true;

    let firebaseUser = null;
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password,
      );
      firebaseUser = userCredential.user;
      const token = await firebaseUser.getIdToken();
      const response = await apiClient.post<RegisterResponse>(
        "/register",
        userData,
        true,
        token,
      );

      authSync.isRegistering = false; // Force manual update to avoid redirections while registering
      authSync.forceContextUpdate();

      return { ok: true, data: response.user };
    } catch (error: any) {
      if (firebaseUser) {
        try {
          await deleteUser(firebaseUser);
          console.log("ROLLBACK: ghost user deleted");
        } catch (rollbackError) {
          console.error("ROLLBACK ERROR: ", rollbackError);
        }
      }
      authSync.isRegistering = false;
      const parsed = firebaseErrorParser.parseError(
        error,
        "errors.errorCreatingAccount",
      );
      return { ok: false, statusCode: error.statusCode ?? 500, message: parsed.message };
    }
  },

  login: async (userData: LoginRequest): Promise<Result<User>> => {
    try {
      await signInWithEmailAndPassword(auth, userData.email, userData.password);
      const response = await apiClient.post<LoginResponse>("/login", userData);
      return { ok: true, data: response.user };
    } catch (error: any) {
      const parsed = firebaseErrorParser.parseError(error, "errors.errorLoggingIn");
      return { ok: false, statusCode: error.statusCode ?? 500, message: parsed.message };
    }
  },

  completeUserData: (userData: UserDataCompletionRequest): Promise<Result<UserDataCompletionResponse>> =>
    toResult(apiClient.post<UserDataCompletionResponse>("/completeUserInfo", userData), (r) => r),

  logout: async (): Promise<Result<void>> => {
    try {
      await signOut(auth);
      return { ok: true, data: undefined };
    } catch (error: any) {
      const parsed = firebaseErrorParser.parseError(error, "errors.errorLoggingOut");
      return { ok: false, statusCode: error.statusCode ?? 500, message: parsed.message };
    }
  },

  getRememberMe: (): Promise<string | null> =>
    AsyncStorage.getItem("rememberMe"),

  setRememberMe: (value: boolean): Promise<void> =>
    AsyncStorage.setItem("rememberMe", value.toString()),
};
