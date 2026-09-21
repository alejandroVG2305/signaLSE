import i18n from "../i18n";

export const firebaseErrorParser = {
  parseError: (
    error: any,
    defaultMessage: string = "errors.errorAuthProvider",
  ) => {
    if (error.code === "auth/email-already-in-use") {
      return new Error(i18n.t("errors.emailAlreadyExists"));
    }
    if (error.code === "auth/weak-password") {
      return new Error(i18n.t("errors.weakPassword"));
    }

    if (error.code === "auth/invalid-email") {
      return new Error(i18n.t("errors.invalidEmail"));
    }

    if (error.code === "auth/invalid-credential") {
      return new Error(i18n.t("errors.wrongCredentials"));
    }

    if (error.code === "auth/too-many-requests") {
      return new Error(i18n.t("errors.tooManyRequests"));
    }

    return new Error(error.message || i18n.t(defaultMessage));
  },
};
