//Librarys
import React from "react";
import {Text, View, Image} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";
import Colors from "../../constants/colors";
import Map from "../../components/map";
import call from "react-native-phone-call";

//Styles
import mainStyle from "../../components/Styles/mainStyleSheet";
import sosUnterseiteStyle from "../../components/Styles/sosUnterseiteStyleSheet";

export default function RettungswagenScreen({navigation}) {
    const triggerCall = () => {
        const args = {
            // Nummer muss noch geändert werden
            number: "01739965411",
            prompt: true,
        };
        call(args).catch(console.error);
    };

    return (
        <View style={sosUnterseiteStyle.container}>
            <View style={sosUnterseiteStyle.rufnummerBox}>
                <Text style={sosUnterseiteStyle.h1}>Rettungsdienst</Text>
                <Text style={sosUnterseiteStyle.nummerText}>112</Text>
                <TouchableOpacity style={sosUnterseiteStyle.telefonButton} onPress={triggerCall}>
                    <Image
                        source={require("../../assets/SosHomeScreen/sos_telefon.png")}
                        style={sosUnterseiteStyle.telefon}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <View>
                    <View style={[mainStyle.box, sosUnterseiteStyle.boxSize]}>
                        <View>
                            <Text style={sosUnterseiteStyle.fragezeichen}>?</Text>
                        </View>
                        <View>
                            <Text style={mainStyle.h1}>
                                <Text style={{color: Colors.orange}}>Wo </Text>ist das Ereignis?
                            </Text>
                            <Text style={mainStyle.h1}>
                                <Text style={{color: Colors.orange}}>Wer </Text>ruft an?
                            </Text>
                            <Text style={mainStyle.h1}>
                                <Text style={{color: Colors.orange}}>Was </Text>ist geschehen?
                            </Text>
                            <Text style={mainStyle.h1}>
                                <Text style={{color: Colors.orange}}>Wie </Text>viele Betroffene?
                            </Text>
                            <Text style={mainStyle.h1}>
                                <Text style={{color: Colors.orange}}>Warten </Text>auf Rückfragen!
                            </Text>
                        </View>
                    </View>
                </View>
                <Map />
            </View>
        </View>
    );
}
