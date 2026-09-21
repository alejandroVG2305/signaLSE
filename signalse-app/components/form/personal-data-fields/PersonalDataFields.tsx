import AppFormField from "../app-form-field/AppFormField";
import i18n from "../../../i18n";

export interface PersonalDataFieldsProps {
  name: string;
  surname: string;
  username: string;
  editable?: boolean;
  onNameChange?: (text: string) => void;
  onSurnameChange?: (text: string) => void;
  onUsernameChange?: (text: string) => void;
}

export default function PersonalDataFields({
  name,
  surname,
  username,
  editable = true,
  onNameChange,
  onSurnameChange,
  onUsernameChange,
}: PersonalDataFieldsProps) {
  return (
    <>
      <AppFormField
        label={i18n.t("name").toUpperCase()}
        placeholder={i18n.t("name")}
        icon="person-outline"
        value={name}
        editable={editable}
        onChangeText={onNameChange}
      />
      <AppFormField
        label={i18n.t("surname").toUpperCase()}
        placeholder={i18n.t("surname")}
        icon="person-outline"
        value={surname}
        editable={editable}
        onChangeText={onSurnameChange}
      />
      <AppFormField
        label={i18n.t("username").toUpperCase()}
        placeholder={i18n.t("username")}
        icon="person-outline"
        value={username}
        editable={editable}
        onChangeText={onUsernameChange}
      />
    </>
  );
}
