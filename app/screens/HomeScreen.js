//Librarys
import React from "react";
import {Text, View, Image} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";

//Styles
import mainStyle from "../components/Styles/mainStyleSheet.js";
import homeStyle from "../components/Styles/homeStyleSheet.js";

export default function HomeScreen({navigation}) {
    return (
        <View style={mainStyle.container}>
            <View style={homeStyle.tippDesTagesBox}>
                <Text style={homeStyle.tippDesTagesTitel}>Tipp des Tages</Text>
                <Text style={homeStyle.tippDesTagesText}>
                    "Mit einem{" "}
                    <Text style={{fontWeight: "bold"}}>Feuerlöscher</Text>{" "}
                    sprühen Sie am besten mit mehreren kurzen Stößen direkt auf
                    das Feuer"
                </Text>
                <Image
                    source={require("../assets/HomeScreen/Tipp.png")}
                    style={homeStyle.tippDesTagesImage}
                />
            </View>

            <TouchableOpacity
                style={[mainStyle.box, homeStyle.boxSize]}
                onPress={() => navigation.navigate("Info")}
            >
                <Text style={mainStyle.titel}>Weiterlesen?</Text>
                <Text style={[mainStyle.h1, {marginBottom: 65}]}>
                    Wissenswertes für den nächsten Notfall
                </Text>
                <Text style={[mainStyle.orangeSchrift, {bottom: 30}]}>
                    Info
                </Text>
                <View
                    style={[mainStyle.orangeBottomInBox, {height: 50}]}
                ></View>
            </TouchableOpacity>
            <TouchableOpacity
                style={[mainStyle.box, homeStyle.boxSize]}
                onPress={() => navigation.navigate("Play")}
            >
                <Text style={mainStyle.titel}>Teste dich!</Text>
                <Text style={[mainStyle.h1, {marginBottom: 65}]}>
                    Finde heraus was du weißt und lerne Neues
                </Text>
                <Text style={[mainStyle.orangeSchrift, {bottom: 30}]}>
                    Quiz AR
                </Text>
                <View
                    style={[mainStyle.orangeBottomInBox, {height: 50}]}
                ></View>
            </TouchableOpacity>
        </View>
    );
}
