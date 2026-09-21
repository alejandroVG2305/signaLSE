import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        gap:20,
        backgroundColor: colors.mainBlue,
        paddingHorizontal:40,
        paddingVertical: 30,
        borderRadius:40
    },
    bottomSheet: {
        backgroundColor: colors.mainBlue,
        borderRadius:40
    },
    indicatorStyle:{
        backgroundColor: colors.transparentMainBlue80
    }
});