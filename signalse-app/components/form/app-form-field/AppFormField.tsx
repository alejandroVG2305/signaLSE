import {
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./app-form-field-styles";
import { AppText } from "../../AppText";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { colors } from "../../../styles/colors";
import i18n from "../../../i18n";

interface AppFormFieldProps extends TextInputProps {
  label: string;
  icon?: keyof typeof Ionicons.glyphMap;
  isPassword?: boolean;
}

export default function AppFormField(props: AppFormFieldProps) {
  const [isPasswordVisible, setPasswordVissible] = useState<boolean>(false);

  return (
    <View style={styles.appTextInputContainer}>
      <AppText style={styles.label}>{props.label}</AppText>
      <View style={[styles.inputWrapper, props.style]}>
        {props.icon && (
          <Ionicons name={props.icon} size={20} color={colors.white} />
        )}
        <TextInput
          accessibilityLabel={props.label}
          {...props}
          style={styles.appTextInput}
          placeholderTextColor={colors.white}
          secureTextEntry={
            props.isPassword ? !isPasswordVisible : props.secureTextEntry
          }
        />
        {props.isPassword && (
          <TouchableOpacity
            onPress={() => setPasswordVissible(!isPasswordVisible)}
            accessibilityRole="button"
            accessibilityLabel={
              isPasswordVisible ? i18n.t("hidePassword") : i18n.t("showPassword")
            }
            accessibilityState={{ expanded: isPasswordVisible }}
          >
            <Ionicons
              name={isPasswordVisible ? "eye-off-outline" : "eye-outline"}
              size={20}
              color={colors.white}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
