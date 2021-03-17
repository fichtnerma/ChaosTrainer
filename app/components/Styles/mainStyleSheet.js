//Librarys
import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },

    box: {
        backgroundColor: "#fff",
        borderRadius: 15,
        margin: 10,
        shadowOffset: {width: 0, height: 0},
        shadowColor: "black",
        shadowOpacity: 0.5,
        justifyContent: "center",
        alignContent: "center",
        shadowRadius: 5,
        elevation: 10,
        textAlign: "left",
    },

    titel: {
        color: "#000",
        flex: 1,
        fontSize: 30,
        marginTop: 10,
        marginLeft: 15,
    },

    orangeSchrift: {
        color: "#ffc185",
        fontSize: 70,
        fontWeight: "bold",
        marginLeft: 15,
        position: "absolute",
        textAlignVertical: "bottom",
    },

    h1: {
        color: "#000",
        flex: 0,
        fontSize: 15,
        marginLeft: 15,
    },

    orangeBottomInBox: {
        width: "100%",
        height: 80,
        backgroundColor: "#ffc185",
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
    },

    hiScore: {
        color: "#fff",
        flex: 1,
        fontSize: 20,
        textAlignVertical: "center",
        marginLeft: 15,
    },
});
