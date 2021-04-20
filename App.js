//Librarys
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//Components
import Logo from './app/components/Header/Logo';

//Components
import HomeScreen from './app/screens/HomeScreen';
import InfoScreen from './app/screens/InfoScreen';
import SosScreen from './app/screens/SosScreen';
import SearchScreen from './app/screens/SearchScreen';
import PlayScreen from './app/screens/PlayScreen';
import QuizScreen from './app/screens/PlayUnterseiten/QuizScreen';
import ErsteFrageScreen from './app/screens/PlayUnterseiten/ErsteFrageScreen';
import RettungswagenScreen from './app/screens/SosUnterseiten/RettungswagenScreen';
import ErsteHilfeScreen from './app/screens/InfoUnterseiten/ErsteHilfeScreen';
import AkuteErkrankungenScreen from './app/screens/InfoUnterseiten/ErsteHilfeAkuteErkrankungenScreen';
import AsthmaScreen from './app/screens/InfoUnterseiten/AsthmaScreen';
import Tabbar from './app/components/TabBar/tabbar';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const CurrentTab = React.createRef();

function App() {
    return (
        <NavigationContainer onStateChange={() => changeFocus()}>
            <Tab.Navigator tabBar={(props) => <Tabbar {...props} ref={CurrentTab} />}>
                <Tab.Screen name="Home" component={HomeStack} />
                <Tab.Screen name="Sos" component={SosStack} />
                <Tab.Screen name="Info" component={InfoStack} />
                <Tab.Screen name="Search" component={SearchStack} />
                <Tab.Screen name="Play" component={PlayStack} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

function changeFocus() {
    CurrentTab.current.changeCurrentTab();
}

function HomeStack() {
    return (
        <Stack.Navigator screenOptions={headerStyle}>
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    );
}

function PlayStack() {
    return (
        <Stack.Navigator screenOptions={headerStyle}>
            <Stack.Screen name="Play" component={PlayScreen} />
            <Stack.Screen name="Quiz" component={QuizScreen} />
            <Stack.Screen name="ErsteFrage" component={ErsteFrageScreen} />
        </Stack.Navigator>
    );
}

function SosStack() {
    return (
        <Stack.Navigator screenOptions={headerStyle}>
            <Stack.Screen name="Sos" component={SosScreen} />
            <Stack.Screen name="Rettungswagen" component={RettungswagenScreen} />
        </Stack.Navigator>
    );
}

function InfoStack() {
    return (
        <Stack.Navigator screenOptions={headerStyle}>
            <Stack.Screen name="Info" component={InfoScreen} />
            <Stack.Screen name="ErsteHilfe" component={ErsteHilfeScreen} />
            <Stack.Screen name="AkuteErkrankungen" component={AkuteErkrankungenScreen} />
            <Stack.Screen name="Asthma" component={AsthmaScreen} />
        </Stack.Navigator>
    );
}

function SearchStack() {
    return (
        <Stack.Navigator screenOptions={headerStyle}>
            <Stack.Screen name="Search" component={SearchScreen} />
        </Stack.Navigator>
    );
}

const headerStyle = {
    headerStyle: {
        backgroundColor: '#f79A42',
        elevation: 0,
    },
    headerTintColor: '#fff',
    headerTitleAlign: 'center',
    headerTitle: (props) => <Logo {...props} />,
    headerTitleStyle: {
        fontWeight: 'bold',
    },
    cardStyle: {
        backgroundColor: '#f79A42',
    },
};

export default App;
