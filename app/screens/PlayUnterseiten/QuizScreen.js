//Librarys
import React, {Component, useState} from 'react';
import {Text, View, Image, TextInput} from 'react-native';
import Modal from 'react-native-modalbox';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {MaterialIcons} from '@expo/vector-icons';
import CheckBox from '@react-native-community/checkbox';

//Styles
import mainStyle from '../../components/Styles/mainStyleSheet.js';
import quizStyle from '../../components/Styles/QuizStyleSheet.js';
import Colors from '../../constants/colors';

export default class QuizHomeScreen extends Component {
  constructor(props) {
    super(props);

        this.state = {
            erstehilfe: true,
            brand: true,
            virus: true,
            verkehrsunfall: true,
            ueberschwemmung: true,
            terrorismus: true,
            anzahl: '10',
            modalOpen: false,
        };
    }

    getToQuiz() {
        this.props.navigation.navigate('ErsteFrage', {Settings: this.state});
    }
    render() {
        const {erstehilfe, brand, virus, verkehrsunfall, ueberschwemmung, terrorismus, anzahl, modalOpen} = this.state;
        return (
            <>
                <View style={mainStyle.container}>
                    <Text style={quizStyle.ShadowText}>Quiz</Text>
                    <View style={quizStyle.layout}>
                        <View style={[mainStyle.box, quizStyle.boxSize]}>
                            <View style={{flex: 4}}>
                                <Text style={[mainStyle.titel, {flex: 0}]}>Gefahren-Quiz</Text>
                                <Text style={mainStyle.h1}>Teste dein Wissen über gefahren</Text>
                            </View>
                            <View style={{flex: 4, flexDirection: 'row'}}>
                                <Image source={require('../../assets/QuizScreen/Feuer.png')} style={quizStyle.feuerImage} />
                                <View>
                                    <Text style={quizStyle.hindText}>Erfahere mehr über</Text>
                                    <Text style={quizStyle.hindText}>Brände in der Bibliothek</Text>
                                </View>
                            </View>
                            <View style={mainStyle.orangeBottomInBox}>
                                <Text style={quizStyle.hiScoreText}>Erreiche einen neunen</Text>
                                <Text style={quizStyle.hiScore}> Hi-Score</Text>
                            </View>
                            <View style={{elevation: 20, zIndex: 40}}>
                                <Image source={require('../../assets/QuizScreen/QuizPerson.png')} style={quizStyle.QuizPersonImage} />
                            </View>
                        </View>

                        <View style={{flexDirection: 'row'}}>
                            <TouchableOpacity style={[mainStyle.box, quizStyle.startButton]} onPress={() => this.getToQuiz()}>
                                <Text style={quizStyle.startText}>Jetzt Starten</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[mainStyle.box, quizStyle.settingButton]} onPress={() => this.setState({modalOpen: !modalOpen})}>
                                <Image source={require('../../assets/QuizScreen/Einstellungen.png')} style={quizStyle.settingImage} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <Modal
                    style={quizStyle.modal}
                    animationType="slide"
                    swipeArea={200}
                    backdropPressToClose={true}
                    swipeToClose={true}
                    swipeThreshold={150}
                    backdrop={true}
                    backdropOpacity={0.3}
                    backdropColor={Colors.orange}
                    position="bottom"
                    isOpen={modalOpen}
                >
                    <View style={quizStyle.centeredView}>
                        <View style={quizStyle.modalView}>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={mainStyle.titel}>Einstellungen</Text>
                                <MaterialIcons name="close" color={Colors.orange} size={35} onPress={() => this.setState({modalOpen: !modalOpen})} />
                            </View>
                            <View>
                                <View style={quizStyle.kategorienContainer}>
                                    <Text style={quizStyle.kategorieText}>Quizkategorien</Text>
                                    <View style={{flexDirection: 'row'}}>
                                        <CheckBox
                                            value={erstehilfe}
                                            onValueChange={() => {
                                                this.setState({erstehilfe: !erstehilfe});
                                            }}
                                            tintColors={{true: Colors.orange, false: '#ffffff'}}
                                        />
                                        <Text style={quizStyle.kategorien}>Erste Hilfe</Text>
                                    </View>
                                    <View style={{flexDirection: 'row'}}>
                                        <CheckBox
                                            value={brand}
                                            onValueChange={() => {
                                                this.setState({brand: !brand});
                                            }}
                                            tintColors={{true: Colors.orange, false: '#ffffff'}}
                                        />
                                        <Text style={quizStyle.kategorien}>Brand</Text>
                                    </View>
                                    <View style={{flexDirection: 'row'}}>
                                        <CheckBox
                                            value={virus}
                                            onValueChange={() => {
                                                this.setState({virus: !virus});
                                            }}
                                            tintColors={{true: Colors.orange, false: '#ffffff'}}
                                        />
                                        <Text style={quizStyle.kategorien}>Virus</Text>
                                    </View>
                                    <View style={{flexDirection: 'row'}}>
                                        <CheckBox
                                            value={verkehrsunfall}
                                            onValueChange={() => {
                                                this.setState({
                                                    verkehrsunfall: !verkehrsunfall,
                                                });
                                            }}
                                            tintColors={{true: Colors.orange, false: '#ffffff'}}
                                        />
                                        <Text style={quizStyle.kategorien}>Verkehrunfall</Text>
                                    </View>
                                    <View style={{flexDirection: 'row'}}>
                                        <CheckBox
                                            value={ueberschwemmung}
                                            onValueChange={() => {
                                                this.setState({
                                                    ueberschwemmung: !ueberschwemmung,
                                                });
                                            }}
                                            tintColors={{true: Colors.orange, false: '#ffffff'}}
                                        />
                                        <Text style={quizStyle.kategorien}>Überschwemmung</Text>
                                    </View>
                                    <View style={{flexDirection: 'row'}}>
                                        <CheckBox
                                            value={terrorismus}
                                            onValueChange={() => {
                                                this.setState({terrorismus: !terrorismus});
                                            }}
                                            tintColors={{true: Colors.orange, false: '#ffffff'}}
                                        />
                                        <Text style={quizStyle.kategorien}>Terrorismus</Text>
                                    </View>
                                </View>
                                <View style={quizStyle.nrQuestions}>
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
                            <TouchableOpacity onPress={() => this.setState({modalOpen: !modalOpen})} style={quizStyle.save}>
                                <Text style={quizStyle.saveText}>Speichern</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </>
        );
    }
}
