import { View } from "react-native";
import Checkbox from "expo-checkbox";
import { AppText } from "../AppText"
import { styles } from "./terms-and-privacy-checkbox-styles";
import i18n from "../../i18n";
import { globalStyles } from "../../styles/global-styles";

interface TermsAndPrivacyCheckboxProps{
    value: boolean,
    onValueChange: (newValue: boolean) => void;
    onTermsPress: () => void;
    onPrivacyPress: () => void;
}

export default function TermsAndPrivacyCheckbox(props : TermsAndPrivacyCheckboxProps){
    const acceptTermsLabel = `${i18n.t('iAcceptThe')} ${i18n.t('termsOfService')} ${i18n.t('andThe')} ${i18n.t('privatePolicy')} ${i18n.t('ofSignaLSE')}.`;

    return(
      <View style={styles.termsAndPolicyCheckboxContainer}>
            <Checkbox
                value={props.value}
                onValueChange={props.onValueChange}
                style={globalStyles.checkBox}
                accessibilityRole="checkbox"
                accessibilityLabel={acceptTermsLabel}
                accessibilityState={{ checked: props.value }}
                />
            <AppText style={styles.baseTermsAndPolicyText}>
                {i18n.t('iAcceptThe') +' '}
                    <AppText
                        style={styles.linkText}
                        onPress={props.onTermsPress}
                        accessibilityRole="link"
                    >
                        {i18n.t('termsOfService')}
                    </AppText>
                {' ' + i18n.t('andThe') + ' '}
                    <AppText
                        style={styles.linkText}
                        onPress={props.onPrivacyPress}
                        accessibilityRole="link"
                    >
                        {i18n.t('privatePolicy')}
                    </AppText>
                {' ' + i18n.t('ofSignaLSE') + '.'}
            </AppText>
        </View>
    );
}