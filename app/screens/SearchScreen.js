//Librarys
import React, {useState} from 'react';
import {Dimensions, StyleSheet, View, Text, Image} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {ScrollView, TextInput, TouchableNativeFeedback} from 'react-native-gesture-handler';

//Styles
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const searchContainer = [
    {
        terms: ['Gas', 'Feuer', 'Brand', 'Ölbrand', 'Wohnungsbrand', 'Autobrand', 'Waldbrand'],
        resultname: 'Brand & Feuer',
        resultImage: () => {
            return require('../assets/InfoScreen/Feuer.png');
        },
        nav: {
            parent: 'Info',
            screen: 'ErsteHilfe',
            params: {page: 'brand'},
        },
    },
    {
        terms: [
            'Verletzung',
            'Erste Hilfe',
            'Asthma',
            'Diabetes',
            'Schlaganfall',
            'Krampf',
            'Lebensmittelvergiftung',
            'Bruch',
            'Wunde',
            'Beatmung',
            'Vergiftung',
            'Insektenstiche',
            'Verbrennung',
        ],
        resultname: 'Erste Hilfe',
        resultImage: () => {
            return require('../assets/InfoScreen/Erste_Hilfe.png');
        },
        nav: {
            parent: 'Info',
            screen: 'ErsteHilfe',
            params: {page: 'ersteHilfe'},
        },
    },
    {
        terms: ['Überschwemmung', 'Erdbeben', 'Naturkatastrophen', 'Sturm', 'Gewitter', 'Wetter', 'Unwetter'],
        resultname: 'Naturkatastrophen',
        resultImage: () => {
            return require('../assets/InfoScreen/Ueberschwemmung.png');
        },
        nav: {
            parent: 'Info',
            screen: 'ErsteHilfe',
            params: {page: 'ueberschwemmung'},
        },
    },
    {
        terms: ['Amoklauf', 'Explosionen', 'Gewalt'],
        resultname: 'Terrorismus',
        resultImage: () => {
            return require('../assets/InfoScreen/Waffe.png');
        },
        nav: {
            parent: 'Info',
            screen: 'ErsteHilfe',
            params: {page: 'terror'},
        },
    },
    {
        terms: ['Unfall', 'Verkehr', 'Auto', 'Fahrzeug', 'Motorrad'],
        resultname: 'Verkehrsunfall',
        resultImage: () => {
            return require('../assets/InfoScreen/Unfall.png');
        },
        nav: {
            parent: 'Info',
            screen: 'ErsteHilfe',
            params: {page: 'unfall'},
        },
    },
    {
        terms: ['Virus', 'Corona', 'Covid', 'Quarantäne', 'Infektion'],
        resultname: 'Virus',
        resultImage: () => {
            return require('../assets/InfoScreen/Virus.png');
        },
        nav: {
            parent: 'Info',
            screen: 'ErsteHilfe',
            params: {page: 'virus'},
        },
    },
];

export default function SearchScreen({navigation}) {
    const [searchResults, setSearchResults] = useState([]);
    const getSearchResults = (searchInput) => {
        let searchOutput = [];
        searchContainer.forEach((searchElement) => {
            let found = false;
            searchElement.terms.forEach((term) => {
                if (term.includes(searchInput)) {
                    found = true;
                }
            });

            if (found) {
                searchOutput.push(searchElement);
            }
        });
        setSearchResults(searchOutput);
    };
    const output = searchResults.map((search, index) => {
        const {parent, screen, params} = search.nav;
        return (
            <TouchableWithoutFeedback
                onPress={() => navigation.navigate(parent, {screen: screen, params: params})}
                key={index}
                style={styles.searchRes}
            >
                <View style={styles.imageContainer}>
                    <Image style={styles.resImages} source={search.resultImage()}></Image>
                </View>
                <Text style={{fontWeight: 'bold', fontSize: 16}} key={'text' + index}>
                    {search.resultname}
                </Text>
            </TouchableWithoutFeedback>
        );
    });
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 22, marginTop: 15, fontWeight: 'bold', color: '#14647f', textAlign: 'left', width: windowWidth * 0.88}}>
                Suche nach Inhalten
            </Text>
            <View style={custom.searchContainer}>
                <TextInput
                    style={custom.textInput}
                    autoCapitalize="words"
                    placeholder="Suchen"
                    contextMenuHidden={true}
                    onChangeText={(val) => getSearchResults(val)}
                    placeholderTextColor="#f79A42"
                ></TextInput>
            </View>
            <Text style={{fontSize: 18, textAlign: 'left', width: windowWidth * 0.88, color: '#14647f', fontWeight: 'bold'}}>Suchergebnisse</Text>
            <ScrollView>{output}</ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        flexDirection: 'column',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    imageContainer: {
        height: 80,
        width: 80,
        alignSelf: 'flex-start',
        elevation: 3,
        marginRight: 20,
        borderRadius: 15,
        backgroundColor: '#fff',
        shadowRadius: 5,
        shadowOffset: {width: 0, height: 0},
        shadowColor: 'black',
        shadowOpacity: 0.2,
    },
    resImages: {
        height: 80,
        width: 80,
    },
    searchRes: {
        width: windowWidth * 0.88,
        height: 100,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderRadius: 25,
        backgroundColor: '#fff',
        padding: 10,
        alignContent: 'center',
        alignItems: 'center',
    },
});

const custom = StyleSheet.create({
    searchContainer: {
        width: windowWidth * 0.88, //340
        height: windowHeight * 0.07,
        backgroundColor: '#fff',
        borderRadius: 15,
        margin: 20,
        shadowOffset: {width: 0, height: 0},
        shadowColor: 'black',
        shadowOpacity: 0.2,
        justifyContent: 'flex-start',
        alignContent: 'flex-start',
        shadowRadius: 5,
        elevation: 5,
        textAlign: 'left',
        marginBottom: 20,
        paddingLeft: 20,
    },
    textInput: {
        justifyContent: 'center',
        color: '#000',
        flex: 1,
        fontSize: 16,
    },
});
