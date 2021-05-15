//Librarys
import { StyleSheet, Dimensions } from "react-native";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  boxSize: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.325,
  },

  layout: {
    height: "40%",
    flexDirection: "row",
    margin: 10,
  },

  //Image
  ARPersonImage: {
    width: 150,
    height: 110,
    position: "absolute",
    top: windowHeight * 0.105,
    left: 150,
    zIndex: 20,
  },
  QuizPersonImage: {
    width: 110,
    height: 150,
    position: "absolute",
    top: 50,
    left: 220,
    zIndex: 20,
  },
});
