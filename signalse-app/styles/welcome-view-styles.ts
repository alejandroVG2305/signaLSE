import { StyleSheet, Dimensions } from "react-native"
import { colors } from "./colors";

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
    welcomeHeader: {
        fontSize: 25,
        fontFamily: 'PoppinsBold'
    },

    welcomeSubtitle:{
        fontSize: 14,
        paddingHorizontal: 25,
        textAlign: 'center',
        marginBottom: 25
    },

    welcomeSlogan:{
        fontSize: 13,
        fontFamily: 'PoppinsItalic',
        textAlign: 'center',
        paddingHorizontal: 10
    },
    
    welcomeContainer:{
        flex:1,
        alignItems: 'center',
        justifyContent:'center',
        gap: 10,
    },
    
    applogo:{
        marginBottom: 20
    },

    welcomeImageContainer:{
        backgroundColor: colors.lightMainBlue,
        borderTopRightRadius: 60,
        borderBottomLeftRadius: 60,
        padding: 8,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        marginBottom: 20,
    },

    welcomeImage: {
        width: width,
        height: width*0.6,
        borderRadius:25,
        resizeMode: 'contain'
    },

    divider: {
        width: width * 0.85,
        marginBottom:10
    },

    linkContainer:{
        flexDirection:'row',
        gap:20,
        alignItems:'center',
        justifyContent: 'center',
        marginVertical: 20
    },

    linkText:{
        fontSize:18
    }
});