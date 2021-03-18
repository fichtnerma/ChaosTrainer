//Librarys
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, StyleSheet, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

//Components
import QuizScreen from "./PlayUnterseiten/QuizScreen";
import Logo from "../components/Header/Logo";

//Styles
import mainStyle from "../components/Styles/mainStyleSheet.js";
import playStyle from "../components/Styles/PlayStyleSheet.js";

const Stack = createStackNavigator();

export default function PlayScreen() {
  return (
    <Stack.Navigator screenOptions={headerStyle}>
      <Stack.Screen name="Play" component={PlayHomeScreen} />
      <Stack.Screen name="Quiz" component={QuizScreen} />
    </Stack.Navigator>
  );
}

function PlayHomeScreen({ navigation }) {
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
          <Text style={[mainStyle.h1, { marginBottom: 95 }]}>
            Erste Hilfe virtuell üben
          </Text>
          <Text style={[mainStyle.orangeSchrift, { bottom: 60 }]}>AR</Text>
          <View style={mainStyle.orangeBottomInBox}>
            <Text style={mainStyle.hiScore}>Hi-Score: 2100 Punkte</Text>
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
          <Text style={[mainStyle.h1, { marginBottom: 95 }]}>
            Teste dein Wissen über Notfälle
          </Text>
          <Text style={[mainStyle.orangeSchrift, { bottom: 60 }]}>Quiz</Text>
          <View style={mainStyle.orangeBottomInBox}>
            <Text style={mainStyle.hiScore}>Hi-Score: 713 Punkte</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const headerStyle = {
  headerStyle: {
    backgroundColor: "#f79A42",
    elevation: 0,
  },
  headerTintColor: "#fff",
  headerTitleAlign: "center",
  headerTitle: (props) => <Logo {...props} />,
  headerTitleStyle: {
    fontWeight: "bold",
  },
  cardStyle: {
    backgroundColor: "#f79A42",
  },
};
