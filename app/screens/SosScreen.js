//Librarys
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Text, StyleSheet, View, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

//Components
import InfoChildScreen from "./InfoChildScreen";
import ErsteHilfeScreen from "./InfoUnterseiten/ErsteHilfeScreen";
import RettungswagenScreen from "./SosUnterseiten/RettungswagenScreen";
import Logo from "../components/Header/Logo";

//Styles
import mainStyle from "../components/Styles/mainStyleSheet.js";
import sosStyle from "../components/Styles/SosStyleSheet.js";

const Stack = createStackNavigator();
let cardTranslate = 0;

export default function SosScreen() {
  return (
    <Stack.Navigator screenOptions={headerStyle}>
      <Stack.Screen name="Sos" component={SosHomeScreen} />
      <Stack.Screen name="InfoChild" component={InfoChildScreen} />
      <Stack.Screen name="Rettungswagen" component={RettungswagenScreen} />
      <Stack.Screen name="ErsteHilfe" component={ErsteHilfeScreen} />
    </Stack.Navigator>
  );
}

function SosHomeScreen({ navigation }) {
  return (
    <View
      style={[
        mainStyle.container,
        { transform: [{ translateY: cardTranslate }] },
      ]}
    >
      <View style={sosStyle.layout}>
        <TouchableOpacity
          style={[mainStyle.iconBox, sosStyle.boxSize]}
          onPress={() => navigation.navigate("Rettungswagen")}
        >
          <Image
            source={require("../assets/SosHomeScreen/Rettungswagen.png")}
            style={mainStyle.icons}
          />
          <Text style={mainStyle.titleIcon}>Rettungswagen</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[mainStyle.iconBox, sosStyle.boxSize]}
          onPress={() => navigation.navigate("InfoChild")}
        >
          <Image
            source={require("../assets/SosHomeScreen/Polizei.png")}
            style={mainStyle.icons}
          />
          <Text style={mainStyle.titleIcon}>Polizei</Text>
        </TouchableOpacity>
      </View>
      <View style={sosStyle.layout}>
        <TouchableOpacity
          style={[mainStyle.iconBox, sosStyle.boxSize]}
          onPress={() => navigation.navigate("InfoChild")}
        >
          <Image
            source={require("../assets/SosHomeScreen/Gift.png")}
            style={mainStyle.icons}
          />
          <Text style={mainStyle.titleIcon}>Gift</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[mainStyle.iconBox, sosStyle.boxSize]}
          onPress={() => navigation.navigate("InfoChild")}
        >
          <Image
            source={require("../assets/SosHomeScreen/feuerwehr.png")}
            style={mainStyle.icons}
          />
          <Text style={mainStyle.titleIcon}>Feuerwehr</Text>
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
