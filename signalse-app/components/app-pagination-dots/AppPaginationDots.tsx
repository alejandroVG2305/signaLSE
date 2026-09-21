import { View } from "react-native";
import { dotColors, styles } from "./app-pagination-dots-styles";
import Animated, {LinearTransition} from "react-native-reanimated";
import i18n from "../../i18n";

interface AppPaginationDotsProps{
    totalDots:number,
    activeDot?:number,
    activeColor?:string,
    passiveColor?:string
}

export default function AppPaginationDots({
    totalDots,
    activeDot = 0,
    activeColor = dotColors.defaultActiveColor,
    passiveColor = dotColors.defaultPassiveColor
} : AppPaginationDotsProps){
    return(
        <View
            style={styles.container}
            accessible={true}
            accessibilityRole="text"
            accessibilityLabel={i18n.t("stepXOfY", { step: activeDot, total: totalDots })}
        >
            {[...Array(totalDots)].map((_, index) => {
                const isActive = index === (activeDot - 1);
                return (
                    <Animated.View
                        key={index}
                        layout={LinearTransition.duration(400)}
                        style={[
                            styles.dot,
                            {
                                width: isActive ? 20 : 10,
                                backgroundColor: isActive ? activeColor : passiveColor
                            }
                        ]}
                    />
                );
                })}
        </View>
    );
}