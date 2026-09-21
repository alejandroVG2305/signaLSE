import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

export const styles = StyleSheet.create({
    loginForm: {
        margin: 20,
        paddingHorizontal: 18,
        paddingVertical: 50,
        borderWidth: 0.2,
        borderColor: colors.white
    },
    loginOptionsContainer:{
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    forgotPassword:{
        fontSize: 12,
        textAlign: 'right',
        textDecorationLine: 'underline'
    }
});