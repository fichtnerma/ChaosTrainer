//Librarys
import React, {useState} from 'react';
import {Dimensions, StyleSheet, View, Text} from 'react-native';
import {ScrollView, TextInput, TouchableOpacity} from 'react-native-gesture-handler';

//Styles
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const searchContainer = [
    {
        terms: ['Gas', 'Feuer', 'Brand', 'Ölbrand', 'Wohnungsbrand', 'Autobrand', 'Waldbrand'],
        resultname: 'Info Seite Brand',
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
        nav: {
            parent: 'Info',
            screen: 'ErsteHilfe',
            params: {page: 'ersteHilfe'},
        },
    },
    {
        terms: ['Überschwemmung', 'Erdbeben', 'Naturkatastrophen', 'Sturm', 'Gewitter', 'Wetter', 'Unwetter'],
        resultname: 'Naturkatastrophen',
        nav: {
            parent: 'Info',
            screen: 'ErsteHilfe',
            params: {page: 'ueberschwemmung'},
        },
    },
    {
        terms: ['Amoklauf', 'Explosionen', 'Gewalt'],
        resultname: 'Terrorismus',
        nav: {
            parent: 'Info',
            screen: 'ErsteHilfe',
            params: {page: 'terror'},
        },
    },
    {
        terms: ['Unfall', 'Verkehr', 'Auto', 'Fahrzeug', 'Motorrad'],
        resultname: 'Verkehrsunfall',
        nav: {
            parent: 'Info',
            screen: 'ErsteHilfe',
            params: {page: 'unfall'},
        },
    },
    {
        terms: ['Virus', 'Corona', 'Covid', 'Quarantäne', 'Infektion'],
        resultname: 'Virus',
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
            <TouchableOpacity onPress={() => navigation.navigate(parent, {screen: screen, params: params})} key={index} style={styles.searchRes}>
                <Text key={'text' + index}>{search.resultname}</Text>
            </TouchableOpacity>
        );
    });
    return (
        <View style={styles.container}>
            <Text>Suche nach Inhalten</Text>
            <View style={custom.searchContainer}>
                <TextInput
                    style={custom.textInput}
                    placeholder="Suchen"
                    onChangeText={(val) => getSearchResults(val)}
                    placeholderTextColor="#f79A42"
                ></TextInput>
            </View>
            <Text>Suchergebnisse</Text>
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
    searchRes: {
        width: windowWidth * 0.88,
        height: 80,
        elevation: 1,
        borderRadius: 25,
        backgroundColor: '#fff',
        margin: 10,
        shadowRadius: 5,
        shadowOffset: {width: 0, height: 0},
        shadowColor: 'black',
        shadowOpacity: 0.2,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
    },
});

const custom = StyleSheet.create({
    searchContainer: {
        width: windowWidth * 0.88, //340
        height: windowHeight * 0.07,
        backgroundColor: '#fff',
        borderRadius: 25,
        margin: 20,
        shadowOffset: {width: 0, height: 0},
        shadowColor: 'black',
        shadowOpacity: 0.2,
        justifyContent: 'center',
        alignContent: 'center',
        shadowRadius: 5,
        elevation: 10,
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
