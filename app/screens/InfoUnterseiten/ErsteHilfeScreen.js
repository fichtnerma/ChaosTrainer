import React, {useState} from 'react';
import {Text, StyleSheet, View, Image, numberOfLines} from 'react-native';
import {ScrollView, TouchableOpacity, TouchableWithoutFeedback} from 'react-native-gesture-handler';
import CustomModal from '../../components/CustomModal';

const ersteHilfe = require('../../assets/Content/InfoSeiten/ErsteHilfe.json');
const brand = require('../../assets/Content/InfoSeiten/Brand.json');
const terror = require('../../assets/Content/InfoSeiten/Terror.json');
const ueberschwemmung = require('../../assets/Content/InfoSeiten/Uberschwemmung.json');
const unfall = require('../../assets/Content/InfoSeiten/Unfall.json');
const virus = require('../../assets/Content/InfoSeiten/Virus.json');
const modal = React.createRef();

function setPage(page) {
    switch (page) {
        case 'ersteHilfe':
            return ersteHilfe.inhalt;
        case 'brand':
            return brand.inhalt;
        case 'terror':
            return terror.inhalt;
        case 'ueberschwemmung':
            return ueberschwemmung.inhalt;
        case 'unfall':
            return unfall.inhalt;
        case 'virus':
            return virus.inhalt;
        default:
            return ersteHilfe.inhalt;
    }
}

export default function ErsteHilfeScreen({route, navigation}) {
    const {page} = route.params;
    const currentData = setPage(page);
    const [modalContent, setModalContent] = useState(currentData.categories[0].subtext);
    const [currentFont, setCurrentFont] = useState(20);
    const listItems = currentData.categories.map((topic, index) => (
        <TouchableOpacity
            key={index}
            style={styles.box}
            onPress={() => {
                modal.current.setModalVisible();
                setModalContent(topic.subtext);
            }}
        >
            <Text
                numberOfLines={1}
                adjustsFontSizeToFit
                style={[kacheln.h2, {fontSize: currentFont}]}
                onTextLayout={(e) => {
                    const {lines} = e.nativeEvent;
                    if (lines.length > numberOfLines) {
                        setCurrentFont(currentFont - 1);
                    }
                }}
                key={index}
            >
                {topic.name}
            </Text>
        </TouchableOpacity>
    ));
    return (
        <View style={styles.container}>
            <View>
                <Text style={kacheln.titel}>{currentData.name}</Text>
            </View>
            <TouchableWithoutFeedback style={kacheln.infoBox}>
                <Text
                    numberOfLines={16}
                    adjustsFontSizeToFit
                    style={[kacheln.infoText, {fontSize: currentFont}]}
                    onTextLayout={(e) => {
                        const {lines} = e.nativeEvent;
                        if (lines.length > numberOfLines) {
                            setCurrentFont(currentFont - 1);
                        }
                    }}
                >
                    {currentData.infoText}
                </Text>
                <Image source={require('../../assets/InfoScreen/Ausrufezeichen.png')} style={kacheln.ausrufezeichen} />
            </TouchableWithoutFeedback>

            <ScrollView>
                {listItems}
                <View style={{height: 20}}></View>
            </ScrollView>

            <CustomModal ref={modal} content={modalContent} />
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
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
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
        height: 220,
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
        margin: 10,
        marginTop: 20,
        justifyContent: 'flex-start',
        color: '#f79A42',
        fontSize: 30,
    },
    infoText: {
        justifyContent: 'flex-start',
        color: '#000',
        marginLeft: 80,
        marginRight: 5,
    },
    h2: {
        justifyContent: 'flex-start',
        color: '#000',
        fontSize: 24,
    },
    ausrufezeichen: {
        width: 80,
        height: 200,
        position: 'absolute',
        top: 30,
        left: 0,
    },
});
