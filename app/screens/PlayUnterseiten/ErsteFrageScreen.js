import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
    Text,
    StyleSheet,
    View,
    Image,
    Pressable,
    TouchableHighlight,
} from 'react-native';
import {
    TouchableOpacity,
    TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {color} from 'react-native-reanimated';

const Stack = createStackNavigator();
let aPressed = false;
let bPressed = false;
let cPressed = false;
let dPressed = false;

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
                        underlayColor="#4694af"
                        style={kacheln.antwort}
                        onPress={() => (aPressed = true)}
                    >
                        <Text style={kacheln.antwortText}>A: Sand</Text>
                    </TouchableHighlight>
                    <TouchableWithoutFeedback style={kacheln.antwort}>
                        <Text style={kacheln.antwortText}>B: Wasser</Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback style={kacheln.antwort}>
                        <Text style={kacheln.antwortText}>C: Decke</Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback style={kacheln.antwort}>
                        <Text style={kacheln.antwortText}>D: Luftpumpe</Text>
                    </TouchableWithoutFeedback>
                </View>

                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity
                        style={kacheln.button}
                        onPress={() => navigation.navigate('Quiz')}
                    >
                        <Text style={kacheln.startText}>Fertig</Text>
                    </TouchableOpacity>
                </View>
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
        //alignItems: 'center',
        textAlign: 'left',
        //flex: 4,
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
        //flex: 1,
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
        //flex: 1,
        fontSize: 15,
        textAlignVertical: 'top',
        marginLeft: 15,
    },

    hinweis: {
        marginTop: 0,
        //flex: 0.5,
        fontSize: 20,
        textAlignVertical: 'center',
        marginLeft: 20,
        color: '#ffc185',
    },

    hiScoreText: {
        color: '#fff',
        //flex: 1,
        fontSize: 15,
        textAlignVertical: 'center',
        marginLeft: 80,
        marginTop: 5,
    },

    hiScore: {
        color: '#fff',
        //flex: 1,
        fontSize: 40,
        textAlignVertical: 'center',
        marginLeft: 80,
        fontWeight: 'bold',
    },

    button: {
        backgroundColor: '#4694af',
        //flex: 1,
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
        //alignItems: 'center',
        textAlign: 'center',
        marginTop: 10,
        overflow: 'visible',
        alignItems: 'center',
    },
    einstellungen: {
        backgroundColor: '#f79A42',
        //flex: 1,
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
        //alignItems: 'center',
        textAlign: 'left',
        marginTop: 70,
    },
    startText: {
        color: '#fff',
        //flex: 1,
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
        //bottom: 100,
        //textAlignVertical: 'bottom',
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
        backgroundColor: '#ffc185',
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
