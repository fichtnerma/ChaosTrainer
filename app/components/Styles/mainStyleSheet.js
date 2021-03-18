//Librarys
import { StyleSheet } from "react-native";
import Colors from "../../constants/colors.js";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },

  box: {
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
    textAlign: "left",
  },

  iconBox: {
    backgroundColor: Colors.white,
    borderRadius: 30,
    margin: 10,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "black",
    shadowOpacity: 0.5,
    justifyContent: "center",
    alignContent: "center",
    //shadowColor: '#000',
    //shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 10,
    alignItems: "center",
  },

  titel: {
    color: Colors.black,
    flex: 1,
    fontSize: 30,
    marginTop: 10,
    marginLeft: 15,
  },

  titleIcon: {
    color: Colors.blue,
    flex: 1,
    fontSize: 16,
    marginBottom: 15,
  },

  icons: {
    width: 160,
    height: 160,
    flex: 5,
  },

  orangeSchrift: {
    color: Colors.lightOrange,
    fontSize: 70,
    fontWeight: "bold",
    marginLeft: 15,
    position: "absolute",
    textAlignVertical: "bottom",
  },

  h1: {
    color: Colors.black,
    flex: 0,
    fontSize: 15,
    marginLeft: 15,
  },

  orangeBottomInBox: {
    width: "100%",
    height: 80,
    backgroundColor: Colors.lightOrange,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
  },

  hiScore: {
    color: Colors.white,
    flex: 1,
    fontSize: 20,
    textAlignVertical: "center",
    marginLeft: 15,
  },
});
