import React, {Component} from "react";
import {Text, View, Image, TextInput, Modal} from "react-native";
import Colors from "../../constants/colors";

import {MaterialIcons} from "@expo/vector-icons";
import CheckBox from "@react-native-community/checkbox";

//Styles
import mainStyle from "../../components/Styles/mainStyleSheet.js";
import quizStyle from "../../components/Styles/QuizStyleSheet.js";

export default class einstellungen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            erstehilfe: true,
            brand: true,
            virus: true,
            verkehrsunfall: true,
            ueberschwemmung: true,
            terrorismus: true,
            anzahl: "10",
        };
    }

    render() {
        const {
            erstehilfe,
            brand,
            virus,
            verkehrsunfall,
            ueberschwemmung,
            terrorismus,
            anzahl,
        } = this.state;
        return (
            <View>
                <View style={quizStyle.kategorienContainer}>
                    <Text style={quizStyle.kategorieText}>Quizkategorien</Text>
                    <View style={{flexDirection: "row"}}>
                        <CheckBox
                            value={erstehilfe}
                            onValueChange={() => {
                                this.setState({erstehilfe: !erstehilfe});
                            }}
                            tintColors={{true: Colors.orange, false: "#ffffff"}}
                        />
                        <Text style={quizStyle.kategorien}>Erste Hilfe</Text>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <CheckBox
                            value={brand}
                            onValueChange={() => {
                                this.setState({brand: !brand});
                            }}
                            tintColors={{true: Colors.orange, false: "#ffffff"}}
                        />
                        <Text style={quizStyle.kategorien}>Brand</Text>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <CheckBox
                            value={virus}
                            onValueChange={() => {
                                this.setState({virus: !virus});
                            }}
                            tintColors={{true: Colors.orange, false: "#ffffff"}}
                        />
                        <Text style={quizStyle.kategorien}>Virus</Text>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <CheckBox
                            value={verkehrsunfall}
                            onValueChange={() => {
                                this.setState({verkehrsunfall: !verkehrsunfall});
                            }}
                            tintColors={{true: Colors.orange, false: "#ffffff"}}
                        />
                        <Text style={quizStyle.kategorien}>Verkehrunfall</Text>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <CheckBox
                            value={ueberschwemmung}
                            onValueChange={() => {
                                this.setState({ueberschwemmung: !ueberschwemmung});
                            }}
                            tintColors={{true: Colors.orange, false: "#ffffff"}}
                        />
                        <Text style={quizStyle.kategorien}>Überschwemmung</Text>
                    </View>
                    <View style={{flexDirection: "row"}}>
                        <CheckBox
                            value={terrorismus}
                            onValueChange={() => {
                                this.setState({terrorismus: !terrorismus});
                            }}
                            tintColors={{true: Colors.orange, false: "#ffffff"}}
                        />
                        <Text style={quizStyle.kategorien}>Terrorismus</Text>
                    </View>
                </View>
                <View style={{flexDirection: "row"}}>
                    <Text style={quizStyle.fragenText}>Wie viele Fragen?</Text>
                    <TextInput
                        style={quizStyle.textInput}
                        placeholder={anzahl}
                        placeholderTextColor="#f79A42"
                        keyboardType="numeric"
                        onChangeText={(text) => {
                            this.setState({anzahl: text.toString()});
                        }}
                    ></TextInput>
                </View>
            </View>
        );
    }
}
