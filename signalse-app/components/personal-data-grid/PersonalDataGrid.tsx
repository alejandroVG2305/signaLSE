import { View } from "react-native";
import AppFormField from "../form/app-form-field/AppFormField";
import i18n from "../../i18n";
import { styles } from "./personal-data-grid-styles";

export interface PersonalDataGridProps {
  name: string;
  surname: string;
  username: string;
  editable?: boolean;
  onNameChange?: (text: string) => void;
  onSurnameChange?: (text: string) => void;
  onUsernameChange?: (text: string) => void;
}

export default function PersonalDataGrid({
  name,
  surname,
  username,
  editable = true,
  onNameChange,
  onSurnameChange,
  onUsernameChange,
}: PersonalDataGridProps) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.field}>
          <AppFormField
            label={i18n.t("name").toUpperCase()}
            placeholder={i18n.t("name")}
            value={name}
            icon="person-outline"
            editable={editable}
            onChangeText={onNameChange}
          />
        </View>
        <View style={styles.field}>
          <AppFormField
            label={i18n.t("surname").toUpperCase()}
            placeholder={i18n.t("surname")}
            value={surname}
            editable={editable}
            onChangeText={onSurnameChange}
            icon="person-outline"
          />
        </View>
      </View>
      <AppFormField
        label={i18n.t("username").toUpperCase()}
        placeholder={i18n.t("username")}
        value={username}
        editable={editable}
        onChangeText={onUsernameChange}
        icon="person-outline"
      />
    </View>
  );
}
