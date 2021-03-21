//Librarys
import React from "react";
import {Text, View, Image} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";

//Styles
import mainStyle from "../components/Styles/mainStyleSheet.js";
import sosStyle from "../components/Styles/SosStyleSheet.js";

let cardTranslate = 0;

export default function SosScreen({navigation}) {
    return (
        <View style={[mainStyle.container, {transform: [{translateY: cardTranslate}]}]}>
            <View style={sosStyle.layout}>
                <TouchableOpacity style={[mainStyle.iconBox, sosStyle.boxSize]} onPress={() => navigation.navigate("Rettungswagen")}>
                    <Image source={require("../assets/SosHomeScreen/Rettungswagen.png")} style={mainStyle.icons} />
                    <Text style={mainStyle.titleIcon}>Rettungswagen</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[mainStyle.iconBox, sosStyle.boxSize]} onPress={() => navigation.navigate("Rettungswagen")}>
                    <Image source={require("../assets/SosHomeScreen/Polizei.png")} style={mainStyle.icons} />
                    <Text style={mainStyle.titleIcon}>Polizei</Text>
                </TouchableOpacity>
            </View>
            <View style={sosStyle.layout}>
                <TouchableOpacity style={[mainStyle.iconBox, sosStyle.boxSize]} onPress={() => navigation.navigate("Rettungswagen")}>
                    <Image source={require("../assets/SosHomeScreen/Gift.png")} style={mainStyle.icons} />
                    <Text style={mainStyle.titleIcon}>Gift</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[mainStyle.iconBox, sosStyle.boxSize]} onPress={() => navigation.navigate("Rettungswagen")}>
                    <Image source={require("../assets/SosHomeScreen/feuerwehr.png")} style={mainStyle.icons} />
                    <Text style={mainStyle.titleIcon}>Feuerwehr</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
