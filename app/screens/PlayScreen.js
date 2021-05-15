//Librarys
import React from "react";
import { Text, View, Image, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

//Styles
import mainStyle from "../components/Styles/mainStyleSheet.js";
import playStyle from "../components/Styles/PlayStyleSheet.js";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function PlayScreen({ navigation }) {
  return (
    <View style={mainStyle.container}>
      <View style={playStyle.layout}>
        <TouchableOpacity
          style={[mainStyle.box, playStyle.boxSize]}
          onPress={() => navigation.navigate("Quiz")}
        >
          <Image
            source={require("../assets/QuizScreen/ARPerson.png")}
            style={playStyle.ARPersonImage}
          />
          <Text style={mainStyle.titel}>Trainer-AR</Text>
          <Text style={[mainStyle.h1, { marginBottom: 32 }]}>
            Erste Hilfe virtuell üben
          </Text>
          <Text
            style={[mainStyle.orangeSchrift, { bottom: windowHeight * 0.09 }]}
          >
            AR
          </Text>

          <View style={mainStyle.orangeBottomInBox}>
            {/* <Text style={mainStyle.hiScore}>
                            Hi-Score: 2100 Punkte
                        </Text> */}
          </View>
        </TouchableOpacity>
      </View>
      <View style={playStyle.layout}>
        <TouchableOpacity
          style={[mainStyle.box, playStyle.boxSize]}
          onPress={() => navigation.navigate("Quiz")}
        >
          <Image
            source={require("../assets/QuizScreen/QuizPerson.png")}
            style={playStyle.QuizPersonImage}
          />
          <Text style={mainStyle.titel}>Gefahren-Quiz</Text>
          <Text style={[mainStyle.h1, { marginBottom: 32 }]}>
            Teste dein Wissen über Notfälle
          </Text>
          <Text
            style={[mainStyle.orangeSchrift, { bottom: windowHeight * 0.09 }]}
          >
            Quiz
          </Text>

          <View style={mainStyle.orangeBottomInBox}>
            {/* <Text style={mainStyle.hiScore}>Hi-Score: 713 Punkte</Text> */}
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
