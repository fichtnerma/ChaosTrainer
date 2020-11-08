import {createStackNavigator} from '@react-navigation/stack';

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
