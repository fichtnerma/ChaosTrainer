//Librarys
import React from "react";
import {createStackNavigator} from "@react-navigation/stack";
import {Text, StyleSheet, View, Image, TouchableHighlight} from "react-native";
import {
    TouchableOpacity,
    TouchableWithoutFeedback,
} from "react-native-gesture-handler";

//Components
import Logo from "../../components/Header/Logo";

//Styles
import mainStyle from "../../components/Styles/MainStyleSheet.js";
import quizStyle from "../../components/Styles/QuizStyleSheet.js";

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
        <View style={mainStyle.container}>
            <Text style={quizStyle.ShadowText}>Quiz</Text>
            <View style={styles.layout}>
                <View style={[mainStyle.box, styles.boxSize]}>
                    <View style={{flex: 4}}>
                        <Text style={[mainStyle.h1, {marginTop: 5}]}>
                            Markiere die richtige Antwort
                        </Text>
                        <View style={{flexDirection: "row"}}>
                            <View>
                                <Text style={styles.titel}>
                                    Wie kann man einen Brand nicht löschen?
                                </Text>
                            </View>
                            <Image
                                source={require("../../assets/QuizScreen/Feuer.png")}
                                style={styles.feuerImage}
                            />
                        </View>
                    </View>
                    <TouchableHighlight
                        activeOpacity={1}
                        //underlayColor="#4694af"
                        onPress={() => {
                            aPressed = true;
                            navigation.push("ErsteFrage");
                        }}
                        style={getStyle()}
                    >
                        <Text style={styles.antwortText}>A: Luftpumpe</Text>
                    </TouchableHighlight>
                    <TouchableWithoutFeedback style={getRedButton()}>
                        <Text style={styles.antwortText}>B: Wasser</Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback style={getRedButton()}>
                        <Text style={styles.antwortText}>C: Decke</Text>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback style={getRedButton()}>
                        <Text style={styles.antwortText}>D: Sand</Text>
                    </TouchableWithoutFeedback>
                </View>

                <View style={{alignItems: "center"}}>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            fertig = true;
                            getStyle();
                            navigation.push("ErsteFrage");
                        }}
                    >
                        <Text style={styles.startText}>Fertig</Text>
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
            backgroundColor: "#ff6042",
            borderRadius: 15,
            marginLeft: 15,
            marginBottom: 15,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
        };
    } else {
        return {
            width: 310,
            height: 60,
            backgroundColor: "#ffc185",
            borderRadius: 15,
            marginLeft: 15,
            marginBottom: 15,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
        };
    }
}
function getStyle() {
    if (fertig) {
        return {
            width: 310,
            height: 60,
            backgroundColor: "#abc94c",
            borderRadius: 15,
            marginLeft: 15,
            marginBottom: 15,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
        };
    } else if (aPressed) {
        return {
            width: 310,
            height: 60,
            backgroundColor: "#4694af",
            borderRadius: 15,
            marginLeft: 15,
            marginBottom: 15,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
        };
    } else {
        return {
            width: 310,
            height: 60,
            backgroundColor: "#ffc185",
            borderRadius: 15,
            marginLeft: 15,
            marginBottom: 15,
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
        };
    }
}

const styles = StyleSheet.create({
    boxSize: {
        width: 340,
        height: 420,
    },

    layout: {
        height: "80%",
        flexDirection: "column",
        margin: 10,
    },

    //muss noch angepasst werden, konnte noch nicht gemacht werden da Button nicht sichtbar ist
    button: {
        backgroundColor: "#4694af",
        width: 180,
        height: 55,
        borderRadius: 15,
        margin: 10,
        shadowOffset: {width: 0, height: 0},
        shadowColor: "black",
        shadowOpacity: 0.5,
        justifyContent: "center",
        alignContent: "center",
        shadowRadius: 5,
        elevation: 10,
        textAlign: "center",
        marginTop: 10,
        overflow: "visible",
        alignItems: "center",
    },

    antwort: {
        width: 310,
        height: 60,
        backgroundColor: fertig ? "#ff6042" : "#ffc185",
        borderRadius: 15,
        marginLeft: 15,
        marginBottom: 15,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
    },

    //Text
    titel: {
        color: "#000",
        fontSize: 25,
        marginTop: 5,
        marginLeft: 15,
        marginRight: 80,
    },

    startText: {
        color: "#fff",
        fontSize: 25,
        textAlignVertical: "center",
        textAlign: "center",
    },

    antwortText: {
        justifyContent: "flex-start",
        color: "#fff",
        fontSize: 20,
        alignSelf: "flex-start",
        marginLeft: 20,
    },

    //Images
    feuerImage: {
        width: 40,
        height: 55,
        alignSelf: "center",
        marginBottom: 70,
        marginLeft: -65,
    },
});

const headerStyle = {
    headerStyle: {
        backgroundColor: "#f79A42",
        elevation: 0,
    },
    headerTintColor: "#fff",
    headerTitleAlign: "center",
    headerTitle: (props) => <Logo {...props} />,
    headerTitleStyle: {
        fontWeight: "bold",
    },
    cardStyle: {
        backgroundColor: "#f79A42",
    },
};
