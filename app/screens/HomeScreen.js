//Librarys
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

//Components
import QuizScreen from "./PlayUnterseiten/QuizScreen";
import InfoContainerScreen from "./InfoContainerScreen";
import Logo from "../components/Header/Logo";

//Constants
import Colors from "../constants/colors.js";

//Styles
import mainStyle from "../components/Styles/mainStyleSheet.js";
import homeStyle from "../components/Styles/homeStyleSheet.js";

const Stack = createStackNavigator();

export default function HomeScreen() {
  return (
    <Stack.Navigator screenOptions={headerStyle}>
      <Stack.Screen name="Home" component={HomeHomeScreen} />
      <Stack.Screen name="Quiz" component={QuizScreen} />
      <Stack.Screen name="Info" component={InfoContainerScreen} />
    </Stack.Navigator>
  );
}

function HomeHomeScreen({ navigation }) {
  return (
    <View style={mainStyle.container}>
      <View style={homeStyle.tippDesTagesBox}>
        <Text style={homeStyle.tippDesTagesTitel}>Tipp des Tages</Text>
        <Text style={homeStyle.tippDesTagesText}>
          "Mit einem <Text style={{ fontWeight: "bold" }}>Feuerlöscher</Text>{" "}
          sprühen Sie am besten mit mehreren kurzen Stößen direkt auf das Feuer"
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
        <Text style={[mainStyle.h1, { marginBottom: 65 }]}>
          Wissenswertes für den nächsten Notfall
        </Text>
        <Text style={[mainStyle.orangeSchrift, { bottom: 30 }]}>Info</Text>
        <View style={[mainStyle.orangeBottomInBox, { height: 50 }]}></View>
      </TouchableOpacity>
      <TouchableOpacity
        style={[mainStyle.box, homeStyle.boxSize]}
        onPress={() => navigation.navigate("Quiz")}
      >
        <Text style={mainStyle.titel}>Teste dich!</Text>
        <Text style={[mainStyle.h1, { marginBottom: 65 }]}>
          Finde heraus was du weißt und lerne Neues
        </Text>
        <Text style={[mainStyle.orangeSchrift, { bottom: 30 }]}>Quiz AR</Text>
        <View style={[mainStyle.orangeBottomInBox, { height: 50 }]}></View>
      </TouchableOpacity>
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
