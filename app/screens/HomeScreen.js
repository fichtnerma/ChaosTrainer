import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, StyleSheet, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import QuizScreen from './PlayUnterseiten/QuizScreen';
import InfoContainerScreen from './InfoContainerScreen';

const Stack = createStackNavigator();

export default function HomeScreen() {
    return (
        <Stack.Navigator screenOptions={headerStyle}>
            <Stack.Screen name="Home" component={HomeHomeScreen} />
            <Stack.Screen name="Quiz" component={QuizScreen} />
            <Stack.Screen name="Info" component={InfoContainerScreen} />
        </Stack.Navigator>
    );
}

function HomeHomeScreen({navigation}) {
    return (
        <View style={styles.container} >
            <View style={kacheln.infoBox} > 
            <Text style={kacheln.orangeTitel} >Tipp des Tages</Text>
                    <Text style={kacheln.tippText} >"Mit einem <Text style={kacheln.fett} >Feuerlöscher</Text> sprühen Sie am besten mit mehreren kurzen Stößen direkt auf das Feuer"</Text>
                    <Image 
                        source={require('../assets/HomeScreen/Tipp.png')}
                        style={kacheln.tipp} />
                </View>
            
                <TouchableOpacity
                    style={styles.box}
                    onPress={() => navigation.navigate('Info')}> 
                    <Text style={kacheln.titel} >Weiterlesen?</Text>
                    <Text style={kacheln.h1}>Wissenswertes für den nächsten Notfall</Text>
                    <Text style={kacheln.orangeSchrift} >Info</Text>
                    <View style={kacheln.bottom} >
                    </View>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.box}
                    onPress={() => navigation.navigate('Quiz')}>
                    <Text style={kacheln.titel} >Teste dich!</Text>
                    <Text style={kacheln.h1}>Finde heraus was du weißt und lerne Neues</Text>
                    <Text style={kacheln.orangeSchrift} >Quiz AR</Text>
                    <View style={kacheln.bottom} >
                    </View>
                </TouchableOpacity>
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
        height: 180,
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
     infoBox: {
        width: 330,
        height: 140,
        backgroundColor: '#fff',
        borderRadius: 15,
        margin: 10,
        shadowOffset: {width: 0, height: 0},
        shadowColor: 'black',
        shadowOpacity: 0.5,
        justifyContent: 'flex-start',
        alignContent: 'center',
        //shadowColor: '#000',
        //shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 10,
    },
    titel: {
        color: '#000',
        flex: 1,
        fontSize: 30,
        marginTop: 10,
        marginLeft: 15,
    },
    orangeTitel: {
        color: '#f79A42',
        fontSize: 30,
        marginLeft: 15,
        marginBottom: 5,
        fontWeight: 'bold',
    },
    tippText: {
        color: '#000',
        fontSize: 16,
        marginLeft: 15,
        marginRight: 100,
    },

    orangeSchrift: {
        color: '#ffc185',
        fontSize: 70,
        fontWeight: 'bold',
        marginLeft: 15,
        position: 'absolute',
        bottom: 30,
        textAlignVertical: 'bottom',
    },

    bottom: {
        width: '100%',
        height: 50,
        backgroundColor: '#ffc185',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },

    h1: {
        color: '#000',
        flex: 0,
        fontSize: 15,
        marginLeft: 15,
        marginBottom: 65,
    },
    tipp: {
        width: 100,
        height: 90,
        position: 'absolute',
        top: 50,
        left: 220,
    },
    fett: {
        fontWeight: 'bold',
    }
});

const headerStyle = {
    headerStyle: {
        backgroundColor: '#f79A42',
        elevation: 0,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
    
    cardStyle: {
        backgroundColor: "#f79A42",
    },
    
};