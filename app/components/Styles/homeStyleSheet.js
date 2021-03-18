//Librarys
import { StyleSheet } from "react-native";
import Colors from "../../constants/colors.js";

export default StyleSheet.create({
  boxSize: {
    width: 340,
    height: 180,
  },

  tippDesTagesBox: {
    width: 330,
    height: 140,
    backgroundColor: Colors.white,
    borderRadius: 15,
    margin: 10,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "black",
    shadowOpacity: 0.5,
    justifyContent: "flex-start",
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
    fontWeight: "bold",
  },

  tippDesTagesText: {
    color: Colors.black,
    fontSize: 16,
    marginLeft: 15,
    marginRight: 100,
  },

  //Images
  tippDesTagesImage: {
    width: 100,
    height: 90,
    position: "absolute",
    top: 50,
    left: 220,
  },
});
