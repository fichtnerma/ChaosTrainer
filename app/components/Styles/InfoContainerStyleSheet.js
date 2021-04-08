//Librarys
import { StyleSheet, Dimensions} from "react-native";

const windowWidth = Dimensions.get("window").width;

export default StyleSheet.create({
  boxSize: {
    height: windowWidth*0.42,
    width: windowWidth*0.42,
  },
  layout: {
    height: "28%",
    flexDirection: "row",
    margin: 10,
  },
});
