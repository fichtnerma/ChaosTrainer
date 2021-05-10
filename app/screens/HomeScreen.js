//Librarys
import React from "react";
import { Text, View, Dimensions } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

//Styles
import mainStyle from "../components/Styles/mainStyleSheet.js";
import homeStyle from "../components/Styles/homeStyleSheet.js";
import TagesTip from "../components/News/TagesTip.js";
import News from "../components/News/News.js";

//Screen dimensions
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={mainStyle.container}>
        <TagesTip navigation={navigation} />
        <News />
        <TouchableOpacity
          style={[mainStyle.box, homeStyle.boxSize]}
          onPress={() => navigation.navigate("Info")}
        >
          <Text style={mainStyle.titel}>Weiterlesen?</Text>
          <Text style={mainStyle.h1}>
            Wissenswertes für den nächsten Notfall
          </Text>
          <Text
            style={[mainStyle.orangeSchrift, { bottom: windowHeight * 0.05 }]}
          >
            Info
          </Text>
          <View
            style={[
              mainStyle.orangeBottomInBox,
              { height: windowHeight * 0.065 },
            ]}
          ></View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[mainStyle.box, homeStyle.boxSize]}
          onPress={() => navigation.navigate("Play")}
        >
          <Text style={mainStyle.titel}>Teste dich!</Text>
          <Text style={[mainStyle.h1]}>
            Finde heraus was du weißt und lerne Neues
          </Text>
          <Text
            style={[mainStyle.orangeSchrift, { bottom: windowHeight * 0.05 }]}
          >
            Quiz AR
          </Text>
          <View
            style={[
              mainStyle.orangeBottomInBox,
              { height: windowHeight * 0.065 },
            ]}
          ></View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
