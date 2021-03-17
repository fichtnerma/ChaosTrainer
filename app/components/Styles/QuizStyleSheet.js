//Librarys
import {StyleSheet} from "react-native";

export default StyleSheet.create({
    boxSize: {
        width: 340,
        height: 300,
    },
    layout: {
        height: "80%",
        flexDirection: "column",
        margin: 10,
    },

    //Text
    ShadowText: {
        color: "#fff",
        fontSize: 70,
        fontWeight: "bold",
        marginLeft: 40,
        alignSelf: "flex-start",
        position: "absolute",
        top: -5,
        zIndex: 40,
        textShadowOffset: {width: 0, height: 0},
        textShadowColor: "#CCC",
        textShadowRadius: 15,
        shadowOpacity: 0.5,
        elevation: 1,
    },

    hindText: {
        marginTop: 0,
        fontSize: 20,
        textAlignVertical: "center",
        marginLeft: 20,
        color: "#ffc185",
    },

    hiScoreText: {
        color: "#fff",
        fontSize: 15,
        textAlignVertical: "center",
        marginLeft: 80,
        marginTop: 5,
    },

    hiScore: {
        color: "#fff",
        fontSize: 40,
        textAlignVertical: "center",
        marginLeft: 80,
        fontWeight: "bold",
    },
    startText: {
        color: "#fff",
        fontSize: 25,
        textAlignVertical: "center",
        textAlign: "center",
    },

    //Buttons
    startButton: {
        backgroundColor: "#f79A42",
        width: 230,
        height: 80,
        marginTop: 70,
        overflow: "visible",
    },
    settingButton: {
        backgroundColor: "#f79A42",
        width: 80,
        height: 80,
        marginTop: 70,
    },

    //Images
    settingImage: {
        width: 50,
        height: 50,
        alignSelf: "center",
    },
    feuerImage: {
        width: 50,
        height: 70,
        alignSelf: "center",
        marginBottom: 70,
        marginLeft: 10,
    },
    QuizPersonImage: {
        width: 110,
        height: 150,
        position: "absolute",
        top: -69,
        left: -15,
        zIndex: 40,
    },
});
