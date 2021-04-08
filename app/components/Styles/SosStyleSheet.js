//Librarys
import {StyleSheet, Dimensions} from "react-native";

const windowWidth = Dimensions.get("window").width;

export default StyleSheet.create({
    boxSize: {
        width: windowWidth*0.43,
        height: windowWidth*0.43,
    },
    layout: {
        flexDirection: "row",
        margin: 10,
    },
});
