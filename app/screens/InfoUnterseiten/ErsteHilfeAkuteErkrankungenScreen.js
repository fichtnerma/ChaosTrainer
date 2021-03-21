import React, {useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
    Text,
    StyleSheet,
    View,
    Image,
    Modal,
    Alert,
    Dimensions,
} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import AsthmaScreen from './AsthmaScreen';
import Logo from '../../components/Header/Logo';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const data = require('../../assets/content/Infoseiten/Asthma.json');

const Stack = createStackNavigator();

export default function ErsteHilfeAkuteErkrankungenScreen() {
    return (
        <Stack.Navigator screenOptions={headerStyle}>
            <Stack.Screen
                name="Erste Hilfe"
                component={AkuteErkrankungenHomeScreen}
            />
            <Stack.Screen name="Asthma Bronchiale" component={AsthmaScreen} />
        </Stack.Navigator>
    );
}
function AkuteErkrankungenHomeScreen({navigation}) {
    const [modalVisible, setModalVisible] = useState(false);
    const [currentData, setCurrentData] = useState(data['asthma']);
    function openModal(content) {
        setModalVisible(!modalVisible);
        setCurrentData(data[content]);
    }
    return (
        <View style={styles.container}>
            <View>
                <Text style={kacheln.titel}>ERSTE HILFE</Text>
                <Text style={kacheln.h1}>Akute Erkrankungen</Text>
            </View>
            <View style={kacheln.infoBox}>
                <Text style={kacheln.infoText}>
                    Bei einer akuten Erkrankung liegt der Unterschied zu
                    chronischen Krankheiten darin, dass sich sie sich plötzlich
                    und meist in kurzer Zeitdauer entwickeln - in der Regel ist
                    ein Zeitraum von 3-14 Tagen gemeint.
                </Text>
                <Image
                    source={require('../../assets/InfoScreen/Ausrufezeichen.png')}
                    style={kacheln.ausrufezeichen}
                />
            </View>
            <View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert('Modal has been closed.');
                        setModalVisible(!modalVisible);
                    }}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <Text style={kacheln.h2}>{currentData.name}</Text>
                            <Text style={kacheln.h2}>{currentData.cause}</Text>
                            <Text style={kacheln.h2}>
                                {currentData.symptoms}
                            </Text>
                            <TouchableOpacity
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Hide Modal</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            </View>
            <ScrollView>
                <TouchableOpacity
                    style={styles.box}
                    onPress={() => openModal('asthma')}
                >
                    <Text style={kacheln.h2}>Asthma Bronchiale</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.box}
                    onPress={() => openModal('diabetes')}
                >
                    <Text style={kacheln.h2}>Diabetes Mellitus</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}>
                    <Text style={kacheln.h2}>Überzuckerung</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}>
                    <Text style={kacheln.h2}>Unterzuckerung</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}>
                    <Text style={kacheln.h2}>Schlaganfall</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}>
                    <Text style={kacheln.h2}>Fieberkrämpfe</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}>
                    <Text style={kacheln.h2}>Krampfanfälle</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.box}>
                    <Text style={kacheln.h2}>Herzinfarkt</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    modalView: {
        backgroundColor: '#fff',
        borderRadius: 20,
        width: windowWidth,
        height: windowHeight * 0.79,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 1,
    },
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: 22,
    },
    box: {
        width: 330,
        height: 60,
        backgroundColor: '#fff',
        borderRadius: 15,
        margin: 10,
        shadowOffset: {width: 0, height: 0},
        shadowColor: 'black',
        shadowOpacity: 0.5,
        justifyContent: 'center',
        alignContent: 'center',
        //shadowColor: '#000',
        //shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 10,
        alignItems: 'center',
    },
    layout: {
        height: '28%',
        flexDirection: 'row',
        margin: 10,
    },
});

const kacheln = StyleSheet.create({
    infoBox: {
        width: 330,
        height: 200,
        backgroundColor: '#fff',
        borderRadius: 15,
        margin: 10,
        shadowOffset: {width: 0, height: 0},
        shadowColor: 'black',
        shadowOpacity: 0.5,
        justifyContent: 'center',
        alignContent: 'center',
        //shadowColor: '#000',
        //shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 10,
        alignItems: 'center',
    },
    titel: {
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 0,
        justifyContent: 'center',
        color: '#f79A42',
        fontSize: 45,
    },
    infoText: {
        justifyContent: 'flex-start',
        color: '#000',
        fontSize: 16,
        marginLeft: 80,
        marginRight: 20,
    },
    h1: {
        alignSelf: 'center',
        margin: 0,
        justifyContent: 'center',
        color: '#f79A42',
        fontSize: 24,
    },
    h2: {
        justifyContent: 'flex-start',
        color: '#000',
        fontSize: 24,
    },

    ausrufezeichen: {
        width: 80,
        height: 190,
        position: 'absolute',
        top: 0,
        left: 0,
        marginTop: 30,
    },
});

const headerStyle = {
    headerStyle: {
        backgroundColor: '#f79A42',
        elevation: 0,
    },
    headerTintColor: '#fff',
    headerTitleAlign: 'center',
    headerTitle: (props) => <Logo {...props} />,
    headerTitleStyle: {
        fontWeight: 'bold',
    },
    cardStyle: {
        backgroundColor: '#f79A42',
    },
};
