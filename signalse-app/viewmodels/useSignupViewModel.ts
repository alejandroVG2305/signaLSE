import { useState } from "react";
import i18n from "../i18n";
import { RegisterRequest } from "../model/auth.model";
import { authService } from "../model/services/auth.service";
import useModal from "../hooks/useModal";
import useLoading from "../hooks/useLoading";

type LegalType = "terms" | "privacy";

export default function useSignupViewModel() {
  // Form states
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [acceptedTerms, setAcceptedTerms] = useState<boolean>(false);
  const [step, setStep] = useState<number>(1);
  const [legalModal, setLegalModal] = useState<LegalType | null>(null);
  const N_STEPS = 2;

  const { isLoading, withLoading } = useLoading();

  const modal = useModal();

  // Actions and logic
  const stepForward = () => {
    if (!name || !surname || !username) {
      modal.showError(i18n.t("errors.allFieldsMandatory"));
      return;
    }
    setStep(step + 1);
  };

  const stepBack = () => {
    setStep(step - 1);
  };

  const handleSignUp = async () => {
    if (!email || !password || !confirmPassword) {
      modal.showError(i18n.t("errors.allFieldsMandatory"));
      return;
    }
    if (password !== confirmPassword) {
      modal.showError(i18n.t("errors.passwordsDoNotMatch"));
      return;
    }
    if (!acceptedTerms) {
      modal.showError(i18n.t("errors.mustAcceptTermsAndConditions"));
      return;
    }
    modal.setError(null);

    const requestData: RegisterRequest = {
      name,
      surname,
      username,
      email,
      password,
      confirmPassword,
      acceptTerms: acceptedTerms,
      acceptPrivacy: acceptedTerms,
    };

    const result = await withLoading(() => authService.register(requestData));

    if (!result.ok) {
      modal.showError(result.message);
      return;
    }

    await authService.setRememberMe(true);
    // authSync.forceContextUpdate() (called inside register) updates AuthContext,
    // which triggers the root layout to navigate to (tabs)
  };

  // Expose what the view needs
  return {
    name,
    setName,
    surname,
    setSurname,
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    acceptedTerms,
    setAcceptedTerms,
    step,
    N_STEPS,
    isLoading,
    modal,
    legalModal,
    setLegalModal,
    stepForward,
    stepBack,
    handleSignUp,
  };
}
