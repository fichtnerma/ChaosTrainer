import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import InfoChildScreen from './InfoChildScreen';
import {Text, StyleSheet, View, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

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
        <View style={styles.container}>
            <View style={styles.layout}>
                <TouchableOpacity
                    style={styles.box}
                    onPress={() => navigation.navigate('InfoChild')}
                >
                    <Text>Erste Hilfe</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.box}
                    onPress={() => navigation.navigate('InfoChild')}
                >
                    <Text>Erste Hilfe</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.layout}>
                <TouchableOpacity
                    style={styles.box}
                    onPress={() => navigation.navigate('InfoChild')}
                >
                    <Text>Erste Hilfe</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.box}
                    onPress={() => navigation.navigate('InfoChild')}
                >
                    <Text>Erste Hilfe</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.layout}>
                <TouchableOpacity
                    style={styles.box}
                    onPress={() => navigation.navigate('InfoChild')}
                >
                    <Text>Erste Hilfe</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.box}
                    onPress={() => navigation.navigate('InfoChild')}
                >
                    <Text>Erste Hilfe</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
    },
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },

    box: {
        width: 160,
        height: 160,
        backgroundColor: '#fff',
        borderRadius: 30,
        margin: 10,
        shadowOffset: {width: 0, height: 0},
        shadowColor: 'black',
        shadowOpacity: 0.5,
        justifyContent: 'center',
        alignContent: 'center',
        //shadowColor: '#000',
        //shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 10,
    },
    layout: {
        height: '28%',
        flexDirection: 'row',
        margin: 10,
    },
});

const headerStyle = {
    headerStyle: {
        backgroundColor: '#f79A42',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
};
