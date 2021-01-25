import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, StyleSheet, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SosScreen from '../SosScreen';
import Logo from '../../components/Header/Logo';

const Stack = createStackNavigator();

export default function RettungswagenScreen() {
    return (
        <Stack.Navigator screenOptions={headerStyle}>
            <Stack.Screen
                name="Rettungswagen"
                component={RettungswagenHomeScreen}
            />
            <Stack.Screen name="Sos" component={SosScreen} />
        </Stack.Navigator>
    );
}

function RettungswagenHomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <View style={kacheln.rufnummerBox}>
                <Text style={kacheln.h1}>Rettungsdienst</Text>
                <Text style={kacheln.nummerText}>112</Text>
                <TouchableOpacity style={kacheln.telefonButton}>
                    <Image
                        source={require('../../assets/SosHomeScreen/sos_telefon.png')}
                        style={kacheln.telefon}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.layout}>
                <TouchableOpacity
                    style={styles.box}
                    onPress={() => navigation.navigate('Sos')}
                >
                    <Image
                        source={require('../../assets/SosHomeScreen/Rettungswagen.png')}
                        style={kacheln.icons}
                    />
                    <Text style={kacheln.titel}>Rettungswagen</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.box}
                    onPress={() => navigation.navigate('Sos')}
                >
                    <Image
                        source={require('../../assets/SosHomeScreen/Polizei.png')}
                        style={kacheln.icons}
                    />
                    <Text style={kacheln.titel}>Polizei</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.layout}>
                <TouchableOpacity
                    style={styles.box}
                    onPress={() => navigation.navigate('Sos')}
                >
                    <Image
                        source={require('../../assets/SosHomeScreen/Gift.png')}
                        style={kacheln.icons}
                    />
                    <Text style={kacheln.titel}>Gift</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.box}
                    onPress={() => navigation.navigate('Sos')}
                >
                    <Image
                        source={require('../../assets/SosHomeScreen/feuerwehr.png')}
                        style={kacheln.icons}
                    />
                    <Text style={kacheln.titel}>Feuerwehr</Text>
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
        justifyContent: 'flex-end',
        flexDirection: 'column',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: 180,
    },
    containerMoved: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 150,
        flexDirection: 'column',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
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
        borderRadius: 15,
        margin: 10,
        shadowOffset: {width: 0, height: 0},
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
        alignItems: 'center',
    },
    layout: {
        flexDirection: 'row',
        margin: 10,
    },
});

const kacheln = StyleSheet.create({
    icons: {
        width: 160,
        height: 160,
        flex: 5,
    },
    titel: {
        justifyContent: 'center',
        color: '#14647f',
        flex: 1,
        fontSize: 16,
        marginBottom: 15,
    },
    h1: {
        justifyContent: 'center',
        color: '#fff',
        fontSize: 20,
        marginBottom: 5,
    },
    nummerText: {
        color: '#fff',
        fontSize: 30,
        marginBottom: 0,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    rufnummerBox: {
        transform: [{translateY: -30}],
    },
    telefonButton: {
        width: 60,
        height: 60,
        marginTop: 5,
        marginBottom: 20,
        alignSelf: 'center',
        backgroundColor: '#fff',
        borderRadius: 15,
        shadowOffset: {width: 0, height: 0},
        shadowColor: 'black',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
        justifyContent: 'center',
    },
    telefon: {
        width: 100,
        height: 100,
        marginTop: 0,
        alignSelf: 'center',
    },
});

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
