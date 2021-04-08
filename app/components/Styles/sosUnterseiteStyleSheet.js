//Librarys
import { StyleSheet, Dimensions } from "react-native";
import Colors from "../../constants/colors.js";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "column",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: windowHeight * 0.24,
  },

  boxSize: {
    width: windowWidth * 0.85, //160
    height: windowWidth * 0.3,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },

  fragezeichen: {
    fontSize: 120,
    fontWeight: "bold",
    color: Colors.orange,
    marginRight: 10,
    marginLeft: -20,
    marginBottom: 10,
  },

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
    justifyContent: "center",
    color: "#fff",
    fontSize: 20,
    marginBottom: 0,
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
