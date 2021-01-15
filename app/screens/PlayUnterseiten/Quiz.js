import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, StyleSheet, View, Button, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function QuizScreen() {
    return (
        <View style={styles.container} >
            <View style={styles.layout}>
                <TouchableOpacity
                    style={styles.box}
                > 
                <View style={{ flex: 4 }}>
                    <Text style={kacheln.titel} >Gefahren-Quiz</Text>
                    <Text style={kacheln.unterueberschrift}>Teste dein Wissen über gefahren</Text>
                </View>  
                <View style={{ flex: 4 }}>
                    <Text style={kacheln.hinweis}>Erfahere mehr über</Text>
                    <Text style={kacheln.hinweis}>Brände in der Bibliothek</Text>
                </View>
                    <View style={kacheln.bottom} >
                    <Text style={kacheln.hiScoreText}>Dein erreicheter Hi-Score:</Text>
                    <Text style={kacheln.hiScore}>2100 Punkte</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
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
        width: 340,
        height: 300,
        backgroundColor: '#fff',
        borderRadius: 30,
        margin: 10,
        shadowOffset: {width: 0, height: 0},
        shadowColor: 'black',
        shadowOpacity: 0.5,
        justifyContent: 'center',
        alignContent: 'center',
        shadowRadius: 5,
        elevation: 10,
        //alignItems: 'center',
        textAlign: 'left',
    },
    layout: {
        height: '75%',
        flexDirection: 'row',
        margin: 10,
    },

});

const kacheln = StyleSheet.create({
    icons: {
        width: 160,
        height: 160,
        flex: 5,
    },
    titel: {
        color: '#14647f',
        //flex: 1,
        fontSize: 30,
        marginTop: 10,
        marginLeft: 15,
    },

    orangeSchrift: {
        color: '#ffc185',
        fontSize: 70,
        fontWeight: 'bold',
        marginLeft: 15,
        position: 'absolute',
        bottom: 60,
        textAlignVertical: 'bottom',
    },

    bottom: {
        width: '100%',
        height: 80,
        backgroundColor: '#ffc185',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        flex: 3,
    },

    unterueberschrift: {
        marginTop: 0,
        color: '#000',
        //flex: 1,
        fontSize: 15,
        textAlignVertical: 'top',
        marginLeft: 15,
    },

    hinweis: {
        marginTop: 0,
        color: '#000',
        //flex: 0.5,
        fontSize: 20,
        textAlignVertical: 'center',
        marginLeft: 80,
        color: '#ffc185',
    },

    hiScoreText: {
        color: '#fff',
        //flex: 1,
        fontSize: 15,
        textAlignVertical: 'center',
        marginLeft: 80,
        marginTop: 5,
    },

    hiScore: {
        color: '#fff',
        //flex: 1,
        fontSize: 40,
        textAlignVertical: 'center',
        marginLeft: 80,
    },
});

const headerStyle = {
    headerStyle: {
        backgroundColor: '#f79A42',
        elevation: 0,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
    
    cardStyle: {
        backgroundColor: "#f79A42",
    },
    
};