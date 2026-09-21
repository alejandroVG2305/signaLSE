import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5,
        height: 30,
        marginBottom: 1
    },
    dot: {
        height: 10,
        borderRadius: 10
    }
});

export const dotColors = {
    defaultActiveColor: colors.white,
    defaultPassiveColor: colors.passiveGray
}