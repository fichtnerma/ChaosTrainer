//Librarys
import React from "react";
import {Dimensions, StyleSheet, View} from "react-native";
import {ScrollView, TextInput} from "react-native-gesture-handler";

//Styles

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function SearchScreen({navigation}) {
    return (
        <View style={styles.container}>
            <View style={custom.searchContainer}>
                <TextInput style={custom.textInput} placeholder="Suchen" placeholderTextColor="#f79A42"></TextInput>
            </View>
            <View style={custom.results}>
                <ScrollView></ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
});

const custom = StyleSheet.create({
    searchContainer: {
        width: windowWidth * 0.88, //340
        height: windowHeight * 0.07,
        backgroundColor: "#fff",
        borderRadius: 15,
        margin: 10,
        shadowOffset: {width: 0, height: 0},
        shadowColor: "black",
        shadowOpacity: 0.5,
        justifyContent: "center",
        alignContent: "center",
        shadowRadius: 5,
        elevation: 10,
        textAlign: "left",
        marginBottom: 20,
        paddingLeft: 20,
    },
    textInput: {
        justifyContent: "center",
        color: "#000",
        flex: 1,
        fontSize: 16,
    },
    results: {
        width: windowWidth * 0.88, //340
        height: windowHeight * 0.65,
        backgroundColor: "#fff",
        borderRadius: 15,
        margin: 10,
        shadowOffset: {width: 0, height: 0},
        shadowColor: "black",
        shadowOpacity: 0.5,
        justifyContent: "center",
        alignContent: "center",
        shadowRadius: 5,
        elevation: 10,
        textAlign: "left",
    },
});
