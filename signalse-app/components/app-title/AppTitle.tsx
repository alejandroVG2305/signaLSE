import { TextProps } from "react-native";
import { AppText } from "../AppText";
import { styles } from "./app-title-styles";

export default function AppTitle(props:TextProps){
    return (
        <AppText {...props} style={[styles.appTitle,props.style]}>{props.children}</AppText>
    );
}