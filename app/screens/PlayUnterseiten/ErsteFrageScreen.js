import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, StyleSheet, View, Image, TouchableHighlight} from 'react-native';
import {
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

const Stack = createStackNavigator();
let aPressed = false;
let fertig = false;

export default function ErsteFrageScreen() {
    return (
        <Stack.Navigator screenOptions={headerStyle}>
            <Stack.Screen name="ErsteFrage" component={ErsteFrageHomeScreen} />
        </Stack.Navigator>
    );
}
function ErsteFrageHomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={kacheln.weißeSchrift}>Quiz</Text>
            <View style={styles.layout}>
                <View style={styles.box}>
                    <View style={{flex: 4}}>
                        <Text style={kacheln.unterueberschrift}>
                            Markiere die richtige Antwort
                        </Text>
                        <View style={{flexDirection: 'row'}}>
                            <View>
                                <Text style={kacheln.titel}>
                                    Wie kann man einen Brand nicht löschen?
                                </Text>
                            </View>
                            <Image
                                source={require('../../assets/QuizScreen/Feuer.png')}
                                style={kacheln.feuer}
                            />
                        </View>
                    </View>
                    <TouchableHighlight
                        activeOpacity={1}
                        //underlayColor="#4694af"
                        onPress={() => {
                            aPressed = true;
                            navigation.push('ErsteFrage');
                        }}
                        style={getStyle()}
                    >
                        <Text style={kacheln.antwortText}>A: Luftpumpe</Text>
                    </TouchableHighlight>
                    <TouchableWithoutFeedback style={getRedButton()}>
                        <Text style={kacheln.antwortText}>B: Wasser</Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback style={getRedButton()}>
                        <Text style={kacheln.antwortText}>C: Decke</Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback style={getRedButton()}>
                        <Text style={kacheln.antwortText}>D: Sand</Text>
                    </TouchableWithoutFeedback>
                </View>

                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity
                        style={kacheln.button}
                        onPress={() => {
                            fertig = true;
                            getStyle();
                            navigation.push('ErsteFrage');
                        }}
                    >
                        <Text style={kacheln.startText}>Fertig</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
function getRedButton() {
    if (fertig) {
        return {
            width: 310,
            height: 60,
            backgroundColor: '#ff6042',
            borderRadius: 15,
            marginLeft: 15,
            marginBottom: 15,
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
        };
    } else {
        return {
            width: 310,
            height: 60,
            backgroundColor: '#ffc185',
            borderRadius: 15,
            marginLeft: 15,
            marginBottom: 15,
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
        };
    }
}
function getStyle() {
    if (fertig) {
        return {
            width: 310,
            height: 60,
            backgroundColor: '#abc94c',
            borderRadius: 15,
            marginLeft: 15,
            marginBottom: 15,
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
        };
    } else if (aPressed) {
        return {
            width: 310,
            height: 60,
            backgroundColor: '#4694af',
            borderRadius: 15,
            marginLeft: 15,
            marginBottom: 15,
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
        };
    } else {
        return {
            width: 310,
            height: 60,
            backgroundColor: '#ffc185',
            borderRadius: 15,
            marginLeft: 15,
            marginBottom: 15,
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
        };
    }
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
        height: 420,
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
        textAlign: 'left',
    },
    layout: {
        height: '80%',
        flexDirection: 'column',
        margin: 10,
    },
});

const kacheln = StyleSheet.create({
    titel: {
        color: '#000',
        fontSize: 25,
        marginTop: 5,
        marginLeft: 15,
        marginRight: 80,
    },

    bottom: {
        width: '100%',
        height: 80,
        backgroundColor: '#ffc185',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        flex: 3,
    },

    unterueberschrift: {
        marginTop: 5,
        color: '#000',
        fontSize: 15,
        textAlignVertical: 'top',
        marginLeft: 15,
    },

    hinweis: {
        marginTop: 0,
        fontSize: 20,
        textAlignVertical: 'center',
        marginLeft: 20,
        color: '#ffc185',
    },

    hiScoreText: {
        color: '#fff',
        fontSize: 15,
        textAlignVertical: 'center',
        marginLeft: 80,
        marginTop: 5,
    },

    hiScore: {
        color: '#fff',
        fontSize: 40,
        textAlignVertical: 'center',
        marginLeft: 80,
        fontWeight: 'bold',
    },

    button: {
        backgroundColor: '#4694af',
        width: 180,
        height: 55,
        borderRadius: 15,
        margin: 10,
        shadowOffset: {width: 0, height: 0},
        shadowColor: 'black',
        shadowOpacity: 0.5,
        justifyContent: 'center',
        alignContent: 'center',
        shadowRadius: 5,
        elevation: 10,
        textAlign: 'center',
        marginTop: 10,
        overflow: 'visible',
        alignItems: 'center',
    },
    einstellungen: {
        backgroundColor: '#f79A42',
        width: 80,
        height: 80,
        borderRadius: 15,
        margin: 10,
        shadowOffset: {width: 0, height: 0},
        shadowColor: 'black',
        shadowOpacity: 0.5,
        justifyContent: 'center',
        alignContent: 'center',
        shadowRadius: 5,
        elevation: 10,
        textAlign: 'left',
        marginTop: 70,
    },
    startText: {
        color: '#fff',
        fontSize: 25,
        textAlignVertical: 'center',
        textAlign: 'center',
    },
    feuer: {
        width: 40,
        height: 55,
        alignSelf: 'center',
        marginBottom: 70,
        marginLeft: -65,
    },
    weißeSchrift: {
        color: '#fff',
        fontSize: 70,
        fontWeight: 'bold',
        marginLeft: 40,
        alignSelf: 'flex-start',
        position: 'absolute',
        top: -5,
        zIndex: 40,
        textShadowOffset: {width: 0, height: 0},
        textShadowColor: '#CCC',
        textShadowRadius: 15,
        shadowOpacity: 0.5,
        elevation: 1,
    },
    antwort: {
        width: 310,
        height: 60,
        backgroundColor: fertig ? '#ff6042' : '#ffc185',
        borderRadius: 15,
        marginLeft: 15,
        marginBottom: 15,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
    antwortText: {
        justifyContent: 'flex-start',
        color: '#fff',
        fontSize: 20,
        alignSelf: 'flex-start',
        marginLeft: 20,
    },
});

const headerStyle = {
    headerStyle: {
        backgroundColor: '#f79A42',
        elevation: 0,
    },
    headerShown: false,
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },

    cardStyle: {
        backgroundColor: '#f79A42',
    },
};
