import i18n from "../../../i18n";
import { constants } from "../../../constants/constants";
import AppButton from "../../buttons/app_button/AppButon";
import PersonalDataFields from "../personal-data-fields/PersonalDataFields";

export interface PersonalDataFormProps {
  name: string;
  surname: string;
  username: string;
  isLoading?: boolean;
  onNameChange: (text: string) => void;
  onSurnameChange: (text: string) => void;
  onUsernameChange: (text: string) => void;
  onNextPress: () => void;
  buttonText?: string;
}

export default function PersonalDataForm({
  name,
  surname,
  username,
  isLoading = false,
  onNameChange,
  onSurnameChange,
  onUsernameChange,
  onNextPress,
  buttonText,
}: PersonalDataFormProps) {
  const buttonWidth = constants.windowWidth - 76;
  return (
    <>
      <PersonalDataFields
        name={name}
        surname={surname}
        username={username}
        onNameChange={onNameChange}
        onSurnameChange={onSurnameChange}
        onUsernameChange={onUsernameChange}
      />
      <AppButton
        text={buttonText ?? i18n.t("next")}
        width={buttonWidth}
        fontSize={21}
        onPress={onNextPress}
        disabled={isLoading}
      />
    </>
  );
}
