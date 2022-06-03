import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import SignUp from '../screens/SignUp';
import Tabs from './tabs';

const Stack = createStackNavigator();

function AppRoutes() {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName={'SignUp'}
            >
                <Stack.Screen name="SignUp" component={SignUp}/>

                <Stack.Screen  name="Home" component={Tabs} />
            </Stack.Navigator >
        </NavigationContainer>
    );
};

export default AppRoutes;