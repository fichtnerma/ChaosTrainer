//Librarys
import React, {useState} from "react";
import {Text, View, Image, TextInput, Modal} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";
import {MaterialIcons} from "@expo/vector-icons";
import CheckBox from "@react-native-community/checkbox";

//Styles
import mainStyle from "../../components/Styles/mainStyleSheet.js";
import quizStyle from "../../components/Styles/QuizStyleSheet.js";
import Colors from "../../constants/colors";

import Einstellungen from "../../components/Quiz/einstellungen.js";

export default function QuizHomeScreen({navigation}) {
    const [modalOpen, setModalOpen] = useState(false);

    return (
        <View style={mainStyle.container}>
            <Text style={quizStyle.ShadowText}>Quiz</Text>
            <View style={quizStyle.layout}>
                <View style={[mainStyle.box, quizStyle.boxSize]}>
                    <View style={{flex: 4}}>
                        <Text style={[mainStyle.titel, {flex: 0}]}>Gefahren-Quiz</Text>
                        <Text style={mainStyle.h1}>Teste dein Wissen über gefahren</Text>
                    </View>
                    <View style={{flex: 4, flexDirection: "row"}}>
                        <Image
                            source={require("../../assets/QuizScreen/Feuer.png")}
                            style={quizStyle.feuerImage}
                        />
                        <View>
                            <Text style={quizStyle.hindText}>Erfahere mehr über</Text>
                            <Text style={quizStyle.hindText}>Brände in der Bibliothek</Text>
                        </View>
                    </View>
                    <View style={mainStyle.orangeBottomInBox}>
                        <Text style={quizStyle.hiScoreText}>Dein erreicheter Hi-Score:</Text>
                        <Text style={quizStyle.hiScore}>2100 Punkte</Text>
                    </View>
                    <View style={{elevation: 20, zIndex: 40}}>
                        <Image
                            source={require("../../assets/QuizScreen/QuizPerson.png")}
                            style={quizStyle.QuizPersonImage}
                        />
                    </View>
                </View>

                <Modal visible={modalOpen} animationType="slide" transparent={true}>
                    <View style={quizStyle.centeredView}>
                        <View style={[mainStyle.box, quizStyle.modalView]}>
                            <View style={{flexDirection: "row"}}>
                                <Text style={mainStyle.titel}>Einstellungen</Text>
                                <MaterialIcons
                                    name="close"
                                    color={Colors.orange}
                                    size={35}
                                    onPress={() => setModalOpen(false)}
                                />
                            </View>

                            <Einstellungen />
                        </View>
                    </View>
                </Modal>

                <View style={{flexDirection: "row"}}>
                    <TouchableOpacity
                        style={[mainStyle.box, quizStyle.startButton]}
                        onPress={() => navigation.navigate("ErsteFrage")}
                    >
                        <Text style={quizStyle.startText}>Jetzt Starten</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[mainStyle.box, quizStyle.settingButton]}
                        onPress={() => setModalOpen(true)}
                    >
                        <Image
                            source={require("../../assets/QuizScreen/Einstellungen.png")}
                            style={quizStyle.settingImage}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
