import { useState } from "react";
import i18n from "../i18n";
import { LoginRequest } from "../model/auth.model";
import { authService } from "../model/services/auth.service";
import { useRouter } from "expo-router";
import useModal from "../hooks/useModal";
import useLoading from "../hooks/useLoading";

export default function useLoginViewModel() {
  const [userId, setUserId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState<string>("");

  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [openForgotPassword, setOpenForgotPassword] = useState<boolean>(false);

  const { isLoading, withLoading } = useLoading();

  const router = useRouter();
  const modal = useModal();

  const toggleOpenForgotPassword = () => {
    setOpenForgotPassword(!openForgotPassword);
  };

  const onForgotPasswordClose = () => {
    if (openForgotPassword) toggleOpenForgotPassword();
  };

  const handleLogin = async () => {
    if (!userId || !password) {
      modal.showError(i18n.t("errors.allFieldsMandatory"));
      return;
    }
    modal.setError(null);

    const requestData: LoginRequest = {
      email: userId,
      password: password,
    };

    const result = await withLoading(async () => {
      await authService.setRememberMe(rememberMe);
      return authService.login(requestData);
    });

    if (!result.ok) {
      modal.showError(result.message);
      return;
    }

    if (result.data.profile.status === "INCOMPLETE") {
      router.replace("/auth/completeInfo");
    }
    // Otherwise, AuthContext detects the new user and the root layout navigates to (tabs)
  };

  return {
    userId,
    setUserId,
    password,
    setPassword,
    rememberMe,
    setRememberMe,
    openForgotPassword,
    toggleOpenForgotPassword,
    onForgotPasswordClose,
    forgotPasswordEmail,
    setForgotPasswordEmail,
    modal,
    isLoading,
    handleLogin,
  };
}
