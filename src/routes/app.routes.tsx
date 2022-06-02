import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useTheme } from 'styled-components';

import SignUp from '../screens/SignUp';
import Home from '../screens/Home';
import Scan from '../screens/Scan';

const Stack = createStackNavigator();

function AppRoutes() {
    const theme = useTheme();

    return (
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'SignUp'}
            >
                <Stack.Screen 
                   name="SignUp" 
                   component={SignUp}
                />
            </Stack.Navigator >
        </NavigationContainer>
    );
};

export default AppRoutes;