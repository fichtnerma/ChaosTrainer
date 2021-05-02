//Librarys
import React, {Component} from "react";
import {Text, StyleSheet, View, Dimensions} from "react-native";
import {TouchableWithoutFeedback} from "react-native-gesture-handler";

//Styles
import mainStyle from "../../components/Styles/mainStyleSheet.js";
import quizStyle from "../../components/Styles/QuizStyleSheet.js";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default class ErsteFrageHomeScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            clicked: null,
            buttonText: "Fertig",
            buttonClicked: false,
            questionData: this.getQuestions(),
            rightAnswer: 0,
        };
    }

    getQuestions() {
        const {Settings} = this.props.route.params;
        const data = require("../../assets/Content/QuizFragen.json");
        let question = [];
        if (Settings.virus == true) {
            for (var i = 0; i < data.quizFragen[0].Virus.length; i++) {
                question.push(data.quizFragen[0].Virus[i]);
            }
        }
        if (Settings.verkehrsunfall == true) {
            for (var i = 0; i < data.quizFragen[1].Verkehrsunfall.length; i++) {
                question.push(data.quizFragen[1].Verkehrsunfall[i]);
            }
        }
        if (Settings.erstehilfe == true) {
            for (var i = 0; i < data.quizFragen[2].ErsteHilfe.length; i++) {
                question.push(data.quizFragen[2].ErsteHilfe[i]);
            }
        }
        if (Settings.ueberschwemmung == true) {
            for (var i = 0; i < data.quizFragen[3].Naturkatastrophen.length; i++) {
                question.push(data.quizFragen[3].Naturkatastrophen[i]);
            }
        }
        if (Settings.terrorismus == true) {
            for (var i = 0; i < data.quizFragen[4].Terrorismus.length; i++) {
                question.push(data.quizFragen[4].Terrorismus[i]);
            }
        }
        question = this.shuffle(question);
        question = this.cutArray(question);
        return question;
    }

    shuffle(array) {
        let curId = array.length;
        while (0 !== curId) {
            let randId = Math.floor(Math.random() * curId);
            curId -= 1;
            let tmp = array[curId];
            array[curId] = array[randId];
            array[randId] = tmp;
        }
        return array;
    }

    cutArray(array) {
        const {Settings} = this.props.route.params;
        let anzahl = Settings.anzahl < array.length ? Settings.anzahl : array.length;
        return array.slice(0, anzahl);
    }

    getStyle(index) {
        if (index == this.state.clicked) {
            if (this.state.buttonClicked == true) {
                if (
                    this.state.questionData[this.state.counter].Antworten[index].antwort[1] == true
                ) {
                    this.state.rightAnswer += 1;
                    return {
                        width: windowWidth * 0.8, //310
                        height: windowHeight * 0.07, //60
                        backgroundColor: "#abc94c",
                        borderRadius: 15,
                        marginLeft: 15,
                        marginBottom: 15,
                        justifyContent: "center",
                        alignContent: "center",
                        alignItems: "center",
                    };
                } else {
                    return {
                        width: windowWidth * 0.8,
                        height: windowHeight * 0.07,
                        backgroundColor: "#ff6042",
                        borderRadius: 15,
                        marginLeft: 15,
                        marginBottom: 15,
                        justifyContent: "center",
                        alignContent: "center",
                        alignItems: "center",
                    };
                }
            }
            return {
                width: windowWidth * 0.8,
                height: windowHeight * 0.07,
                backgroundColor: "#4694af",
                borderRadius: 15,
                marginLeft: 15,
                marginBottom: 15,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
            };
        } else {
            if (this.state.buttonClicked == true) {
                if (
                    this.state.questionData[this.state.counter].Antworten[index].antwort[1] == true
                ) {
                    return {
                        width: windowWidth * 0.8, //310
                        height: windowHeight * 0.07, //60
                        backgroundColor: "#abc94c",
                        borderRadius: 15,
                        marginLeft: 15,
                        marginBottom: 15,
                        justifyContent: "center",
                        alignContent: "center",
                        alignItems: "center",
                    };
                }
            }
            return {
                width: windowWidth * 0.8,
                height: windowHeight * 0.07,
                backgroundColor: "#ffc185",
                borderRadius: 15,
                marginLeft: 15,
                marginBottom: 15,
                justifyContent: "center",
                alignContent: "center",
                alignItems: "center",
            };
        }
    }

    getNextQuestion() {
        this.setState({buttonClicked: true});
        if (this.state.counter == this.state.questionData.length) {
            this.props.navigation.goBack();
        } else if (this.state.buttonText == "Weiter") {
            this.setState({counter: this.state.counter + 1});
            this.setState({buttonText: "Fertig"});
            this.setState({clicked: null});
            this.setState({buttonClicked: false});
        } else {
            this.setState({buttonText: "Weiter"});
        }
    }

    render() {
        return (
            <View style={mainStyle.container}>
                <Text style={quizStyle.ShadowText}>Quiz</Text>
                <View style={styles.layout}>
                    <View style={[mainStyle.box, styles.boxSize]}>
                        <Text>
                            {this.state.counter != this.state.questionData.length ? (
                                <>
                                    <View style={{flex: 1}}>
                                        <Text style={[mainStyle.h1, {marginTop: 5, flex: 0}]}>
                                            Markiere die richtige Antwort
                                        </Text>
                                        <Text style={styles.titel}>
                                            {this.state.questionData[this.state.counter].question}
                                        </Text>
                                    </View>
                                    <TouchableWithoutFeedback
                                        activeOpacity={1}
                                        onPress={() => {
                                            this.setState({clicked: 0});
                                        }}
                                        style={this.getStyle(0)}
                                    >
                                        <Text style={styles.antwortText}>
                                            A:{" "}
                                            {
                                                this.state.questionData[this.state.counter]
                                                    .Antworten[0].antwort
                                            }
                                        </Text>
                                    </TouchableWithoutFeedback>
                                    <TouchableWithoutFeedback
                                        activeOpacity={1}
                                        onPress={() => {
                                            this.setState({clicked: 1});
                                        }}
                                        style={this.getStyle(1)}
                                    >
                                        <Text style={styles.antwortText}>
                                            B:{" "}
                                            {
                                                this.state.questionData[this.state.counter]
                                                    .Antworten[1].antwort
                                            }
                                        </Text>
                                    </TouchableWithoutFeedback>
                                    <TouchableWithoutFeedback
                                        activeOpacity={1}
                                        onPress={() => {
                                            this.setState({clicked: 2});
                                        }}
                                        style={this.getStyle(2)}
                                    >
                                        <Text style={styles.antwortText}>
                                            C:{" "}
                                            {
                                                this.state.questionData[this.state.counter]
                                                    .Antworten[2].antwort
                                            }
                                        </Text>
                                    </TouchableWithoutFeedback>
                                    <TouchableWithoutFeedback
                                        activeOpacity={1}
                                        onPress={() => {
                                            this.setState({clicked: 3});
                                        }}
                                        style={this.getStyle(3)}
                                    >
                                        <Text style={styles.antwortText}>
                                            D:{" "}
                                            {
                                                this.state.questionData[this.state.counter]
                                                    .Antworten[3].antwort
                                            }
                                        </Text>
                                    </TouchableWithoutFeedback>{" "}
                                </>
                            ) : (
                                <View>
                                    <Text style={[mainStyle.h1, {marginTop: 5, flex: 0}]}>
                                        {this.state.rightAnswer} von{" "}
                                        {this.state.questionData.length}
                                    </Text>
                                </View>
                            )}
                        </Text>
                    </View>

                    <View style={{alignItems: "center"}}>
                        <TouchableWithoutFeedback
                            style={[mainStyle.box, styles.button]}
                            onPress={() => {
                                this.getNextQuestion();
                            }}
                        >
                            <Text style={styles.startText}>{this.state.buttonText}</Text>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    boxSize: {
        width: windowWidth * 0.88, //340
        height: windowHeight * 0.55, //420
    },

    layout: {
        height: windowHeight * 0.65, //"80%"
        flexDirection: "column",
        margin: 10,
    },

    button: {
        backgroundColor: "#4694af",
        width: windowWidth * 0.45, //180
        height: windowHeight * 0.07, //55
        marginTop: 10,
        overflow: "visible",
        alignItems: "center",
    },

    antwort: {
        width: windowWidth * 0.8,
        height: windowHeight * 0.07,
        backgroundColor: "#ffc185",
        borderRadius: 15,
        marginLeft: 15,
        marginBottom: 15,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
    },

    antwortClicked: {
        width: windowWidth * 0.8,
        height: windowHeight * 0.07,
        backgroundColor: "#4694af",
        borderRadius: 15,
        marginLeft: 15,
        marginBottom: 15,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
    },

    //Text
    titel: {
        color: "#000",
        fontSize: 25,
        marginTop: 5,
        marginLeft: 15,
        marginRight: 80,
    },

    startText: {
        color: "#fff",
        fontSize: 25,
        textAlignVertical: "center",
        textAlign: "center",
    },

    antwortText: {
        justifyContent: "flex-start",
        color: "#fff",
        fontSize: 20,
        alignSelf: "flex-start",
        marginLeft: 20,
    },
});
