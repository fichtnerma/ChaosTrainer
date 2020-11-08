//Librarys
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


//Components
import HomeScreen from './app/screens/HomeScreen';
import InfoContainerScreen from './app/screens/InfoContainerScreen';
import SosScreen from './app/screens/SosScreen';

const Tab = createBottomTabNavigator();

function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Info') {
              iconName = 'ios-information-circle';
            } else if (route.name === 'Home') {
              iconName = 'ios-home';
            } else if (route.name === 'Sos') {
                iconName = 'ios-flame';
              }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#123456',
          inactiveTintColor: 'gray',
        }}>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Sos" component={SosScreen} />
                <Tab.Screen name="Info" component={InfoContainerScreen} />   
            </Tab.Navigator>
        </NavigationContainer>
    );
}










export default App;

