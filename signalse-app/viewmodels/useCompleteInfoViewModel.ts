import { useState } from "react";
import useModal from "../hooks/useModal";
import useLoading from "../hooks/useLoading";
import i18n from "../i18n";
import { UserDataCompletionRequest } from "../model/auth.model";
import { authService } from "../model/services/auth.service";
import { useRouter } from "expo-router";

export default function useCompleteInfoViewModel() {
  const [name, setName] = useState<string>("");
  const [surname, setSurname] = useState<string>("");
  const [username, setUsername] = useState<string>("");

  const { isLoading, withLoading } = useLoading();
  const modal = useModal();
  const router = useRouter();

  const saveInfo = async () => {
    if (!name || !surname || !username) {
      modal.showError(i18n.t("errors.allFieldsMandatory"));
      return;
    }

    const req: UserDataCompletionRequest = {
      name: name,
      surname: surname,
      username: username,
    };

    const result = await withLoading(() => authService.completeUserData(req));

    if (!result.ok) {
      modal.showError(result.message);
      return;
    }

    router.replace("/(tabs)/");
  };

  return {
    name,
    surname,
    username,
    isLoading,
    setName,
    setSurname,
    setUsername,
    saveInfo,
    modal,
  };
}
