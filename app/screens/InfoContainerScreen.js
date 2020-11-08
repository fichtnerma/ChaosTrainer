import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import InfoChildScreen from './InfoChildScreen';
import {Text, StyleSheet, View, Button} from 'react-native';

const Stack = createStackNavigator();

export default function InfoContainerScreen() {
    return (
        <Stack.Navigator screenOptions={headerStyle}>
            <Stack.Screen name="Info" component={InfoScreen} />
            <Stack.Screen name="InfoChild" component={InfoChildScreen} />
        </Stack.Navigator>
    );
}

function InfoScreen({navigation}) {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Text>Info Screen</Text>
            <Button
                title="InfoChild"
                onPress={() => navigation.navigate('InfoChild')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
});

const headerStyle = {
    headerStyle: {
        backgroundColor: '#123456',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
};
