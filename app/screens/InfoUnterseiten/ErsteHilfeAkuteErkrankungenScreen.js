import React from "react";
import {Text, StyleSheet, View, Image} from "react-native";
import {ScrollView, TouchableOpacity} from "react-native-gesture-handler";

export default function AkuteErkrankungenScreen({navigation}) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={kacheln.titel}>ERSTE HILFE</Text>
                <Text style={kacheln.h1}>Akute Erkrankungen</Text>
            </View>
            <View style={kacheln.infoBox}>
                <Text style={kacheln.infoText}>
                    Bei einer akuten Erkrankung liegt der Unterschied zu chronischen Krankheiten darin, dass sich sie sich plötzlich und meist in
                    kurzer Zeitdauer entwickeln - in der Regel ist ein Zeitraum von 3-14 Tagen gemeint.
                </Text>
                <Image source={require("../../assets/InfoScreen/Ausrufezeichen.png")} style={kacheln.ausrufezeichen} />
            </View>

            <ScrollView>
                <TouchableOpacity style={styles.box} onPress={() => navigation.navigate("Asthma")}>
                    <Text style={kacheln.h2}>Asthma Bronchiale</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}>
                    <Text style={kacheln.h2}>Diabetes Mellitus</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}>
                    <Text style={kacheln.h2}>Überzuckerung</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}>
                    <Text style={kacheln.h2}>Unterzuckerung</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}>
                    <Text style={kacheln.h2}>Schlaganfall</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}>
                    <Text style={kacheln.h2}>Fieberkrämpfe</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}>
                    <Text style={kacheln.h2}>Krampfanfälle</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}>
                    <Text style={kacheln.h2}>Herzinfarkt</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "column",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    background: {
        flex: 1,
        width: "100%",
        height: "100%",
    },

    box: {
        width: 330,
        height: 60,
        backgroundColor: "#fff",
        borderRadius: 15,
        margin: 10,
        shadowOffset: {width: 0, height: 0},
        shadowColor: "black",
        shadowOpacity: 0.5,
        justifyContent: "center",
        alignContent: "center",
        //shadowColor: '#000',
        //shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 10,
        alignItems: "center",
    },
    layout: {
        height: "28%",
        flexDirection: "row",
        margin: 10,
    },
});

const kacheln = StyleSheet.create({
    infoBox: {
        width: 330,
        height: 200,
        backgroundColor: "#fff",
        borderRadius: 15,
        margin: 10,
        shadowOffset: {width: 0, height: 0},
        shadowColor: "black",
        shadowOpacity: 0.5,
        justifyContent: "center",
        alignContent: "center",
        //shadowColor: '#000',
        //shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 10,
        alignItems: "center",
    },
    titel: {
        alignSelf: "center",
        marginTop: 10,
        marginBottom: 0,
        justifyContent: "center",
        color: "#f79A42",
        fontSize: 45,
    },
    infoText: {
        justifyContent: "flex-start",
        color: "#000",
        fontSize: 16,
        marginLeft: 80,
        marginRight: 20,
    },
    h1: {
        alignSelf: "center",
        margin: 0,
        justifyContent: "center",
        color: "#f79A42",
        fontSize: 24,
    },
    h2: {
        justifyContent: "flex-start",
        color: "#000",
        fontSize: 24,
    },

    ausrufezeichen: {
        width: 80,
        height: 190,
        position: "absolute",
        top: 0,
        left: 0,
        marginTop: 30,
    },
});
