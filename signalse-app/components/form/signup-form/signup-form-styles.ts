import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

export const styles = StyleSheet.create({
    signUpForm:{
        margin: 20,
        padding: 18,
        borderWidth: 0.2,
        borderColor: colors.white
    },
    backLink: {
        textAlign: 'center',
        fontSize:17
    },
    dots:{
        alignItems: 'center', 
        marginBottom: 10, 
        height: 20,
    },
});