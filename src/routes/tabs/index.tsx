import React from 'react';
import { Image } from 'react-native';
import { useTheme } from 'styled-components';
import { createBottomTabNavigator, BottomTabBar } from '@react-navigation/bottom-tabs';
import { icons } from '../../utils';

import Home from '../../screens/Home';
import Scan from '../../screens/Scan';
import TabBarCustomButton from '../../components/TabBarCustomButton';
import CustomTabBar from '../../components/CustomTabBar';

const { Navigator, Screen } = createBottomTabNavigator();

function Tabs() {
    const theme = useTheme();

    return (
        <Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    backgroundColor: "transparent",
                    elevation: 0
                },
                headerShown: false,
            }}
            tabBar={(props) => (
                <CustomTabBar {...props} />
            )}
        >
            <Screen 
                name='Home'
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image 
                            source={icons.more}
                            resizeMode='contain'
                            style={{
                             width: 25,
                             height: 25,
                             tintColor: focused 
                                ? theme.colors.white 
                                : theme.colors.secondary
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                       <TabBarCustomButton 
                            {...props}
                       /> 
                    ),
                }}
            />

            <Screen 
                name='Scan'
                component={Scan}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image 
                            source={icons.scan}
                            resizeMode='contain'
                            style={{
                             width: 25,
                             height: 25,
                             tintColor: focused 
                                ? theme.colors.white 
                                : theme.colors.secondary
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                       <TabBarCustomButton 
                            {...props}
                       /> 
                    ),
                }}
            />

            <Screen 
                name='User'
                component={Home}
                options={{
                    tabBarIcon: ({focused}) => (
                        <Image 
                            source={icons.user}
                            resizeMode='contain'
                            style={{
                             width: 25,
                             height: 25,
                             tintColor: focused 
                                ? theme.colors.white 
                                : theme.colors.secondary
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                       <TabBarCustomButton 
                            {...props}
                       /> 
                    ),
                }}
            />
        </Navigator>
    );
};

export default Tabs;