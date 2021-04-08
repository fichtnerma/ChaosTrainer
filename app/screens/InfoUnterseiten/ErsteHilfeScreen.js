import React from "react";
import {Text, StyleSheet, View, Image} from "react-native";
import {ScrollView, TouchableOpacity} from "react-native-gesture-handler";

export default function ErsteHilfeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <View>
                <Text style={kacheln.titel}>Erste Hilfe</Text>
            </View>
            <View style={kacheln.infoBox}>
                <Text style={kacheln.infoText}>Rufe die 112 oder 110 an</Text>
                <Image source={require("../../assets/InfoScreen/Ausrufezeichen.png")} style={kacheln.ausrufezeichen} />
            </View>

            <ScrollView>
                <TouchableOpacity style={styles.box} onPress={() => navigation.navigate("AkuteErkrankungen")}>
                    <Text style={kacheln.h2}>Akute Erkrankungen</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}>
                    <Text style={kacheln.h2}>Lebensmittel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}>
                    <Text style={kacheln.h2}>Verletzungen</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}>
                    <Text style={kacheln.h2}>Atembeschwerden</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}>
                    <Text style={kacheln.h2}>Vergiftungen</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}>
                    <Text style={kacheln.h2}>Insektenstiche</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}>
                    <Text style={kacheln.h2}>Chemieunfälle</Text>
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
        height: 140,
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
        margin: 10,
        marginLeft: -163,
        marginTop: 20,
        justifyContent: "flex-start",
        color: "#f79A42",
        fontSize: 30,
    },
    infoText: {
        justifyContent: "flex-start",
        color: "#000",
        fontSize: 16,
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
    },
});
