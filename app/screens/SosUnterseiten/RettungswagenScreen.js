//Librarys
import React from "react";
import { Text, StyleSheet, View, Image, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import Colors from "../../constants/colors";
import Map from "./map";

//Styles
import mainStyle from "../../components/Styles/mainStyleSheet";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function RettungswagenScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={kacheln.rufnummerBox}>
        <Text style={kacheln.h1}>Rettungsdienst</Text>
        <Text style={kacheln.nummerText}>112</Text>
        <TouchableOpacity style={kacheln.telefonButton}>
          <Image
            source={require("../../assets/SosHomeScreen/sos_telefon.png")}
            style={kacheln.telefon}
          />
        </TouchableOpacity>
      </View>
      <View /*style={styles.kacheln}*/>
        <View>
          <View style={[mainStyle.box, styles.boxSize]}>
            <View>
              <Text style={styles.fragezeichen}>?</Text>
            </View>
            <View>
              <Text style={mainStyle.h1}>
                <Text style={{ color: Colors.orange }}>Wo </Text>ist das
                Ereignis?
              </Text>
              <Text style={mainStyle.h1}>
                <Text style={{ color: Colors.orange }}>Wer </Text>ruft an?
              </Text>
              <Text style={mainStyle.h1}>
                <Text style={{ color: Colors.orange }}>Was </Text>ist geschehen?
              </Text>
              <Text style={mainStyle.h1}>
                <Text style={{ color: Colors.orange }}>Wie </Text>viele
                Betroffene?
              </Text>
              <Text style={mainStyle.h1}>
                <Text style={{ color: Colors.orange }}>Warten </Text>auf
                Rückfragen!
              </Text>
            </View>
          </View>
        </View>
        <Map />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "column",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: windowHeight * 0.27,
  },

  /*kacheln: {
    flex: 4,
  },*/

  boxSize: {
    width: windowWidth * 0.9, //160
    height: windowWidth * 0.3,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },

  fragezeichen: {
    fontSize: 120,
    fontWeight: "bold",
    color: Colors.orange,
    marginRight: 25,
  },
});

const kacheln = StyleSheet.create({
  icons: {
    width: windowWidth * 0.4,
    height: windowWidth * 0.4,
    flex: 5,
  },
  titel: {
    justifyContent: "center",
    color: "#14647f",
    flex: 1,
    fontSize: 16,
    marginBottom: 15,
  },
  h1: {
    //height: windowHeight,
    justifyContent: "center",
    color: "#fff",
    fontSize: 20,
    marginBottom: 5,
  },
  nummerText: {
    color: "#fff",
    fontSize: 30,
    marginBottom: 0,
    fontWeight: "bold",
    alignSelf: "center",
  },
  rufnummerBox: {
    transform: [{ translateY: -30 }],
    height: windowHeight * 0.2,
  },
  telefonButton: {
    width: windowWidth * 0.2,
    height: windowWidth * 0.2,
    marginTop: 5,
    marginBottom: 20,
    alignSelf: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "black",
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
    justifyContent: "center",
  },
  telefon: {
    width: windowWidth * 0.3, //100
    height: windowWidth * 0.3,
    marginTop: 0,
    alignSelf: "center",
  },
});
