//Librarys
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//Components
import HomeScreen from './app/screens/HomeScreen';
import InfoScreen from './app/screens/InfoScreen';
import SosScreen from './app/screens/SosScreen';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={headerStyle}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Info" component={InfoScreen} />
                <Stack.Screen name="Sos" component={SosScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
const headerStyle = {
    headerStyle: {
        backgroundColor: '#123456',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
};

export default App;
