//Librarys
import {StyleSheet, Dimensions} from "react-native";
import Colors from "../../constants/colors.js";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },

    mapContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 20,
        overflow: "hidden",
    },

    containerText: {
        flex: 1,
        backgroundColor: Colors.white,
        alignItems: "center",
        justifyContent: "center",
        zIndex: 20,
    },

    locationIcon: {
        width: windowWidth * 0.15,
        height: windowWidth * 0.15,
        marginRight: 20,
        marginLeft: 25,
    },

    map: {
        width: windowWidth * 0.9, //160
        height: windowHeight * 0.37,
    },

    boxSize: {
        width: windowWidth * 0.85, //160
        height: windowHeight * 0.11,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        zIndex: 90,
        marginTop: 22,
    },
});
