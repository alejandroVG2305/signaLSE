import { auth } from "../../../firebase-config";
import i18n from "../../../i18n";
import { Result } from "../../result";
import { ApiError } from "./api-error";

const BACKEND_URL = process.env.EXPO_PUBLIC_LOCAL_IP_URL;

export const backendStatusSync = {
  reportDown: () => {},
  reportUp: () => {},
};

const getAuthToken = async (): Promise<string> => {
  const currentUser = auth.currentUser;
  if (!currentUser) throw new Error(i18n.t("errors.userNotAuthenticated"));
  return currentUser.getIdToken();
};

const request = async <T>(
  endpoint: string,
  options: RequestInit,
  withAuth: boolean = true,
  token?: string, // Just in case it is necessary to pass token explicitly
): Promise<T> => {
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
  };

  if (withAuth) {
    const authToken = token ?? (await getAuthToken());
    headers["Authorization"] = `Bearer ${authToken}`;
  }

  const url = `${BACKEND_URL}${endpoint}`;

  let response: Response;
  try {
    response = await fetch(url, { ...options, headers });
  } catch (networkErr: any) {
    backendStatusSync.reportDown();
    throw networkErr;
  }

  backendStatusSync.reportUp();

  if (!response.ok) {
    const errorData = await response.json();
    throw new ApiError(
      i18n.t(errorData.message) || i18n.t("errors.serverInternalError"),
      response.status,
    );
  }

  const data = await response.json();
  return data as T;
};

export const toResult = async <TRaw, TData>(
  promise: Promise<TRaw>,
  map: (raw: TRaw) => TData,
): Promise<Result<TData>> => {
  try {
    return { ok: true, data: map(await promise) };
  } catch (error: any) {
    return {
      ok: false,
      statusCode: error.statusCode ?? 500,
      message: error.message,
    };
  }
};

export const apiClient = {
  get: <T>(endpoint: string, withAuth: boolean = true) =>
    request<T>(endpoint, { method: "GET" }, withAuth),
  post: <T>(
    endpoint: string,
    body?: any,
    withAuth: boolean = true,
    token?: string,
  ) =>
    request<T>(
      endpoint,
      { method: "POST", body: JSON.stringify(body) },
      withAuth,
      token,
    ),
};
