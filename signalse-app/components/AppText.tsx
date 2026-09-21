import {Text, TextProps} from 'react-native'
import { globalStyles } from '../styles/global-styles'

export function AppText(props: TextProps){
    return (
        <Text
            {...props} 
            style={[globalStyles.appText, props.style]}>
            {props.children}
        </Text>
    )
}