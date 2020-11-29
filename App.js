//Librarys
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Components
import HomeScreen from './app/screens/HomeScreen';
import InfoContainerScreen from './app/screens/InfoContainerScreen';
import SosScreen from './app/screens/SosScreen';
import MyTabbar from './app/components/TabBar/MyTabbar';
import SearchScreen from './app/screens/SearchScreen';
import PlayScreen from './app/screens/PlayScreen';

const Tab = createBottomTabNavigator();

function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                style={{backgroundColor: 'red'}}
                tabBar={(props) => <MyTabbar {...props} />}
            >
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Sos" component={SosScreen} />
                <Tab.Screen name="Info" component={InfoContainerScreen} />
                <Tab.Screen name="Search" component={SearchScreen} />
                <Tab.Screen name="Play" component={PlayScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default App;
