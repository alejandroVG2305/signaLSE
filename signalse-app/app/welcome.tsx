import {Image, View} from "react-native";
import { AppText } from "../components/AppText";
import AppLogo from "../components/app-logo/AppLogo";
import { Divider } from "react-native-paper";
import AppButton from "../components/buttons/app_button/AppButon";
import { styles } from "../styles/welcome-view-styles";
import i18n from "../i18n";
import { Link } from "expo-router";


export default function WelcomeView(){
    return(
        <View style={styles.welcomeContainer}>
            <AppLogo
                style={styles.applogo}
                accessibilityRole="image"
                accessibilityLabel="SignaLSE"
            ></AppLogo>
            <AppText style={styles.welcomeHeader} accessibilityRole="header">{i18n.t('welcomeHeader')}</AppText>
            <AppText style={styles.welcomeSubtitle}>{i18n.t('welcomeSubtitle')}</AppText>
            <View style={styles.welcomeImageContainer}>
                <Image
                    style={styles.welcomeImage}
                    source={require('../assets/welcomeImage.png')}
                    accessible={false}
                    accessibilityElementsHidden={true}
                    importantForAccessibility="no-hide-descendants">
                </Image>
            </View>
            <Link asChild href='/auth/signup'>
                <AppButton text={i18n.t('begin')}></AppButton>
            </Link>
            <View style={styles.linkContainer}>
                <Link href='auth/login' asChild>
                    <AppText
                        style={styles.linkText}
                        accessibilityRole="link"
                        accessibilityLabel={i18n.t('login')}
                    >{i18n.t('login')}</AppText>
                </Link>
                <AppText
                    style={styles.linkText}
                    accessible={false}
                    accessibilityElementsHidden={true}
                    importantForAccessibility="no-hide-descendants"
                >|</AppText>
                <Link href='/auth/signup' asChild>
                    <AppText
                        style={styles.linkText}
                        accessibilityRole="link"
                        accessibilityLabel={i18n.t('signUp')}
                    >{i18n.t('signUp')}</AppText>
                </Link>
            </View>
            <Divider
                style={styles.divider}
                accessible={false}
                accessibilityElementsHidden={true}
                importantForAccessibility="no-hide-descendants"
            ></Divider>
            <AppText style={styles.welcomeSlogan}>{i18n.t('welcomeSlogan')}</AppText>
        </View>
    );
}