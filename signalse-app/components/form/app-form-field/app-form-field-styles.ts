import { StyleSheet } from "react-native"
import { colors } from "../../../styles/colors";

export const styles = StyleSheet.create({
    appTextInputContainer:{
        gap: 5,
    },
    appTextInput:{
        flex:1,
        color: colors.white,
        fontFamily: 'Poppins',
        fontSize:13,
    },
    label: {
        fontSize: 13
    },
    inputWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: colors.transparentMainBlue80,
        borderRadius: 8,
        color: colors.white,
        borderWidth: 1,
        padding: 13,
        borderColor: colors.white,
        gap: 10,
    }
});