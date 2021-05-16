//Librarys
import React from "react";
import { Text, Image, View } from "react-native";

//Styles
import homeStyle from "../Styles/homeStyleSheet.js";

const data = require("../../assets/Content/TagesTip.json");
const random = Math.floor(Math.random() * 31) + 0;

export default function TagesTip({ navigation }) {
  return (
    <View
      style={[homeStyle.tippDesTagesBox, homeStyle.boxSize]}
      onPress={() => navigation.navigate("Asthma")}
    >
      <Text style={homeStyle.tippDesTagesTitel}>Wissenswert</Text>
      <Text style={homeStyle.tippDesTagesText}>
        {data.TagesTip[random].Text}
      </Text>
      <Image
        source={require("../../assets/HomeScreen/Tipp.png")}
        style={homeStyle.tippDesTagesImage}
      />
    </View>
  );
}
