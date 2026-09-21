import { StyleSheet } from "react-native";
import { colors } from "../../../styles/colors";

export const styles = StyleSheet.create({
    shadowContainer: {
        backgroundColor: colors.shadowGray,
        justifyContent: 'flex-start',
    },
    buttonBackground: {
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3, 
        shadowColor: colors.black,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
    },
    textStyle: {
        fontSize: 24,
        fontFamily: 'PoppinsBold'
    }
});