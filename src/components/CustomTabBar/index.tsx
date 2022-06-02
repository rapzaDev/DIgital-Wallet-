import { View, TouchableOpacity } from "react-native";
import { useTheme } from "styled-components";
import { isIphoneX } from 'react-native-iphone-x-helper';
import { BottomTabBarProps, BottomTabBar } from "@react-navigation/bottom-tabs";

function CustomTabBar(props:BottomTabBarProps) {
    const theme = useTheme();

    if (isIphoneX()) {
        return(
            <View>
                <View
                    style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: 30,
                        backgroundColor: theme.colors.white
                    }}
                ></View>
                <BottomTabBar {...props}/>
            </View>
        )

    } else {
        return (
            <BottomTabBar {...props}/>
        )
    }
};

export default CustomTabBar;