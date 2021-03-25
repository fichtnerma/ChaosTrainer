//Librarys
import React from "react";
import {Text, StyleSheet, View, Image, Dimensions} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";

//Styles

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function RettungswagenScreen({navigation}) {
    return (
        <View style={styles.container}>            
            <View style={kacheln.rufnummerBox}>
                <Text style={kacheln.h1}>Rettungsdienst</Text>
                <Text style={kacheln.nummerText}>112</Text>
                <TouchableOpacity style={kacheln.telefonButton}>
                    <Image source={require("../../assets/SosHomeScreen/sos_telefon.png")} style={kacheln.telefon} />
                </TouchableOpacity>
            </View>
            <View style={styles.kacheln}>
            <View style={styles.layout}>
                <TouchableOpacity style={styles.box} onPress={() => navigation.navigate("Sos")}>
                    <Image source={require("../../assets/SosHomeScreen/Rettungswagen.png")} style={kacheln.icons} />
                    <Text style={kacheln.titel}>Rettungswagen</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.box} onPress={() => navigation.navigate("Sos")}>
                    <Image source={require("../../assets/SosHomeScreen/Polizei.png")} style={kacheln.icons} />
                    <Text style={kacheln.titel}>Polizei</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.layout}>
                <TouchableOpacity style={styles.box} onPress={() => navigation.navigate("Sos")}>
                    <Image source={require("../../assets/SosHomeScreen/Gift.png")} style={kacheln.icons} />
                    <Text style={kacheln.titel}>Gift</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box} onPress={() => navigation.navigate("Sos")}>
                    <Image source={require("../../assets/SosHomeScreen/feuerwehr.png")} style={kacheln.icons} />
                    <Text style={kacheln.titel}>Feuerwehr</Text>
                </TouchableOpacity>
            </View>
            </View>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-end",
        flexDirection: "column",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: windowHeight * 0.27,
    },

    kacheln: {
        //Die Kacheln müssen weiter nach oben bzw. in der weißen Fläche mittig angezeigt werden
        //justifyContent: "center",
        //margin: windowHeight * -0.02,
    },

    box: {
        width: windowWidth * 0.4, //160
        height: windowWidth * 0.4,
        backgroundColor: "#fff",
        borderRadius: 15,
        margin: 10,
        shadowOffset: {width: 0, height: 0},
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
        alignItems: "center",
    },
    layout: {
        flexDirection: "row",
        margin: 10,
    },
});

const kacheln = StyleSheet.create({
    icons: {
        width: windowWidth * 0.4,
        height: windowWidth * 0.4,
        flex: 5,
    },
    titel: {
        justifyContent: "center",
        color: "#14647f",
        flex: 1,
        fontSize: 16,
        marginBottom: 15,
    },
    h1: {
        //height: windowHeight,
        justifyContent: "center",
        color: "#fff",
        fontSize: 20,
        marginBottom: 5,
    },
    nummerText: {
        color: "#fff",
        fontSize: 30,
        marginBottom: 0,
        fontWeight: "bold",
        alignSelf: "center",
    },
    rufnummerBox: {
        transform: [{translateY: -30}],
        height: windowHeight * 0.25,
    },
    telefonButton: {
        width: windowWidth * 0.2,
        height: windowWidth * 0.2,
        marginTop: 5,
        marginBottom: 20,
        alignSelf: "center",
        backgroundColor: "#fff",
        borderRadius: 15,
        shadowOffset: {width: 0, height: 0},
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowRadius: 5,
        elevation: 10,
        justifyContent: "center",
    },
    telefon: {
        width: windowWidth * 0.3, //100
        height: windowWidth * 0.3,
        marginTop: 0,
        alignSelf: "center",
    },
});
