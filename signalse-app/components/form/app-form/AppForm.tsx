import { ReactNode } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { styles } from "./app-form-styles";

interface AppFormProps{
    children: ReactNode,
    style?: StyleProp<ViewStyle>
}

export default function AppForm(props : AppFormProps){
    return (
        <View style={[styles.formContainer, props.style]}>
            {props.children}
        </View>
    );
}