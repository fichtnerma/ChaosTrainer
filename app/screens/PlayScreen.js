import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, StyleSheet, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import QuizScreen from './PlayUnterseiten/QuizScreen';
import Logo from '../components/Header/Logo';

const Stack = createStackNavigator();

export default function PlayScreen() {
    return (
        <Stack.Navigator screenOptions={headerStyle}>
            <Stack.Screen name="Play" component={PlayHomeScreen} />
            <Stack.Screen name="Quiz" component={QuizScreen} />
        </Stack.Navigator>
    );
}

function PlayHomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <View style={styles.layout}>
                <TouchableOpacity
                    style={styles.box}
                    onPress={() => navigation.navigate('Quiz')}
                >
                    <Image
                        source={require('../assets/QuizScreen/ARPerson.png')}
                        style={kacheln.ARPerson}
                    />
                    <Text style={kacheln.titel}>Trainer-AR</Text>
                    <Text style={kacheln.h1}>Erste Hilfe virtuell üben</Text>
                    <Text style={kacheln.orangeSchrift}>AR</Text>
                    <View style={kacheln.bottom}>
                        <Text style={kacheln.hiScore}>
                            Hi-Score: 2100 Punkte
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.layout}>
                <TouchableOpacity
                    style={styles.box}
                    onPress={() => navigation.navigate('Quiz')}
                >
                    <Image
                        source={require('../assets/QuizScreen/QuizPerson.png')}
                        style={kacheln.QuizPerson}
                    />
                    <Text style={kacheln.titel}>Gefahren-Quiz</Text>
                    <Text style={kacheln.h1}>
                        Teste dein Wissen über Notfälle
                    </Text>
                    <Text style={kacheln.orangeSchrift}>Quiz</Text>
                    <View style={kacheln.bottom}>
                        <Text style={kacheln.hiScore}>
                            Hi-Score: 713 Punkte
                        </Text>
                    </View>
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
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },

    box: {
        width: 340,
        height: 240,
        backgroundColor: '#fff',
        borderRadius: 15,
        margin: 10,
        shadowOffset: {width: 0, height: 0},
        shadowColor: 'black',
        shadowOpacity: 0.5,
        justifyContent: 'center',
        alignContent: 'center',
        shadowRadius: 5,
        elevation: 10,
        //alignItems: 'center',
        textAlign: 'left',
    },
    layout: {
        height: '40%',
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
        color: '#000',
        flex: 1,
        fontSize: 30,
        marginTop: 10,
        marginLeft: 15,
    },

    orangeSchrift: {
        color: '#ffc185',
        fontSize: 70,
        fontWeight: 'bold',
        marginLeft: 15,
        position: 'absolute',
        bottom: 60,
        textAlignVertical: 'bottom',
    },

    bottom: {
        width: '100%',
        height: 80,
        backgroundColor: '#ffc185',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },

    hiScore: {
        color: '#fff',
        flex: 1,
        fontSize: 20,
        textAlignVertical: 'center',
        marginLeft: 15,
    },
    h1: {
        color: '#000',
        flex: 0,
        fontSize: 15,
        marginLeft: 15,
        marginBottom: 95,
    },
    ARPerson: {
        width: 150,
        height: 110,
        position: 'absolute',
        top: 75,
        left: 180,
        zIndex: 20,
    },
    QuizPerson: {
        width: 110,
        height: 150,
        position: 'absolute',
        top: 50,
        left: 220,
        zIndex: 20,
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
