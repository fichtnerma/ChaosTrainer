//Librarys
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

//Components
import Logo from "../components/Header/Logo";
import ErsteHilfeScreen from "./InfoUnterseiten/ErsteHilfeScreen";
import InfoChildScreen from "./InfoChildScreen";

//Styles
import mainStyle from "../components/Styles/mainStyleSheet.js";
import infoStyle from "../components/Styles/InfoContainerStyleSheet.js";

const Stack = createStackNavigator();

export default function InfoContainerScreen() {
  return (
    <Stack.Navigator screenOptions={headerStyle}>
      <Stack.Screen name="Info" component={InfoScreen} />
      <Stack.Screen name="InfoChild" component={InfoChildScreen} />
      <Stack.Screen name="ErsteHilfe" component={ErsteHilfeScreen} />
    </Stack.Navigator>
  );
}

function InfoScreen({ navigation }) {
  return (
    <View style={mainStyle.container}>
      <View style={infoStyle.layout}>
        <TouchableOpacity
          style={[mainStyle.iconBox, infoStyle.boxSize]}
          onPress={() => navigation.navigate("ErsteHilfe")}
        >
          <Image
            source={require("../assets/InfoScreen/Erste_Hilfe.png")}
            style={mainStyle.icons}
          />
          <Text style={mainStyle.titleIcon}>Erste Hilfe</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[mainStyle.iconBox, infoStyle.boxSize]}
          onPress={() => navigation.navigate("InfoChild")}
        >
          <Image
            source={require("../assets/InfoScreen/Feuer.png")}
            style={mainStyle.icons}
          />
          <Text style={mainStyle.titleIcon}>Brand</Text>
        </TouchableOpacity>
      </View>
      <View style={infoStyle.layout}>
        <TouchableOpacity
          style={[mainStyle.iconBox, infoStyle.boxSize]}
          onPress={() => navigation.navigate("InfoChild")}
        >
          <Image
            source={require("../assets/InfoScreen/Virus.png")}
            style={mainStyle.icons}
          />
          <Text style={mainStyle.titleIcon}>Virus</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[mainStyle.iconBox, infoStyle.boxSize]}
          onPress={() => navigation.navigate("InfoChild")}
        >
          <Image
            source={require("../assets/InfoScreen/Unfall.png")}
            style={mainStyle.icons}
          />
          <Text style={mainStyle.titleIcon}>Verkehrsunfall</Text>
        </TouchableOpacity>
      </View>
      <View style={infoStyle.layout}>
        <TouchableOpacity
          style={[mainStyle.iconBox, infoStyle.boxSize]}
          onPress={() => navigation.navigate("InfoChild")}
        >
          <Image
            source={require("../assets/InfoScreen/Überschwemmung.png")}
            style={mainStyle.icons}
          />
          <Text style={mainStyle.titleIcon}>Überschwemmung</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[mainStyle.iconBox, infoStyle.boxSize]}
          onPress={() => navigation.navigate("InfoChild")}
        >
          <Image
            source={require("../assets/InfoScreen/Waffe.png")}
            style={mainStyle.icons}
          />
          <Text style={mainStyle.titleIcon}>Terroranschlag</Text>
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
