//Librarys
import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors.js";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  boxSize: {
    width: windowWidth*0.9,
    height: windowHeight*0.245,
  },

  tippDesTagesBox: {
    width: windowWidth*0.9,
    height: 140,
    backgroundColor: Colors.white,
    borderRadius: 15,
    margin: 10,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "black",
    shadowOpacity: 0.5,
    justifyContent: "center",
    alignContent: "center",
    shadowRadius: 5,
    elevation: 10,
  },

  //Text
  tippDesTagesTitel: {
    color: Colors.orange,
    fontSize: 30,
    marginLeft: 15,
    marginBottom: 5,
    top: 8,
    position: "absolute",
    //fontWeight: "bold",
  },

  tippDesTagesText: {
    color: Colors.black,
    fontSize: 16,
    marginLeft: 15,
    marginRight: 100,
    marginTop: 25,
  },

  //Images
  tippDesTagesImage: {
    width: 100,
    height: 90,
    position: "absolute",
    top: 90,
    left: 230,
  },
});
