//Librarys
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  boxSize: {
    width: 340,
    height: 240,
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
    top: 75,
    left: 180,
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
