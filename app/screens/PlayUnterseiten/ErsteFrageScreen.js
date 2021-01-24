import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Text, StyleSheet, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Stack = createStackNavigator();

export default function ErsteFrageScreen() {
    return (
    <Stack.Navigator screenOptions={headerStyle}>
        <Stack.Screen name="ErsteFrage" component={ErsteFrageHomeScreen}/>
    </Stack.Navigator>
   );
}
function ErsteFrageHomeScreen({navigation}) {
    return (
        <View style={styles.container} >            
        <Text style={kacheln.weißeSchrift} >Frage</Text>
            <View style={styles.layout}>
                <View
                    style={styles.box}
                > 
                <View style={{ flex: 4 }}>
                    <Text style={kacheln.titel} >Gefahren-Quiz</Text>
                    <Text style={kacheln.unterueberschrift}>Teste dein Wissen über gefahren</Text>
                </View>  
                <View style={{ flex: 4, flexDirection:'row' }}>
                <Image 
                        source={require('../../assets/QuizScreen/Feuer.png')}
                        style={kacheln.feuer} />
                    <View>
                        <Text style={kacheln.hinweis}>Erfahere mehr über</Text>
                        <Text style={kacheln.hinweis}>Brände in der Bibliothek</Text>
                    </View>
                </View>
                    <View style={kacheln.bottom} >
                    <Text style={kacheln.hiScoreText}>Dein erreicheter Hi-Score:</Text>
                    <Text style={kacheln.hiScore}>2100 Punkte</Text>
                    </View> 
                    <View style={{elevation: 20, zIndex: 40}}>
                    <Image 
                        source={require('../../assets/QuizScreen/QuizPerson.png')}
                        style={kacheln.QuizPerson} /></View>
                </View>

                <View style={{flexDirection: 'row'}} >
                    <TouchableOpacity style={kacheln.button}                    
                    onPress={() => navigation.navigate('Quiz')}>
                       
                    <Text style={kacheln.startText}>Jetzt Starten</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={kacheln.einstellungen}>
                    <Image 
                        source={require('../../assets/QuizScreen/Einstellungen.png')}
                        style={kacheln.zahnrad} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );

};

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
        borderRadius: 15,
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
        //flex: 4,
    },
    layout: {
        height: '80%',
        flexDirection: 'column',
        margin: 10,
    },

});

const kacheln = StyleSheet.create({
    titel: {
        color: '#000',
        //flex: 1,
        fontSize: 30,
        marginTop: 10,
        marginLeft: 15,
    },


    bottom: {
        width: '100%',
        height: 80,
        backgroundColor: '#ffc185',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
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
        //flex: 0.5,
        fontSize: 20,
        textAlignVertical: 'center',
        marginLeft: 20,
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
        fontWeight: 'bold',
    },

    button:{
        backgroundColor: '#f79A42',
        //flex: 1,
        width: 230,
        height: 80,
        borderRadius: 15,
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
        marginTop: 70,
        overflow: 'visible',
    },
    einstellungen:{
        backgroundColor: '#f79A42',
        //flex: 1,
        width: 80,
        height: 80,
        borderRadius: 15,
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
        marginTop: 70,
    },
    startText: {
        color: '#fff',
        //flex: 1,
        fontSize: 25,
        textAlignVertical: 'center',
        textAlign: 'center',
    },

    zahnrad:{
        width: 50,
        height: 50, 
        alignSelf:'center',
    },
    feuer:{
        width: 50,
        height: 70, 
        alignSelf:'center',
        marginBottom: 70,
        marginLeft: 10,
    },
    QuizPerson: {
        width: 110,
        height: 150,
        position: 'absolute',
        top: -69,
        left: -15,
        zIndex: 40,
    },
    weißeSchrift: {
        color: '#fff',
        fontSize: 70,
        fontWeight: 'bold',
        marginLeft: 40,
        alignSelf: 'flex-start',
        position: 'absolute',
        top: -5,
        //bottom: 100,
        //textAlignVertical: 'bottom',
        zIndex: 40,
        textShadowOffset: {width: 0, height: 0},
        textShadowColor: '#CCC',
        textShadowRadius: 15,
        shadowOpacity: 0.5,
        elevation: 1,
    },
});

const headerStyle = {
    headerStyle: {
        backgroundColor: '#f79A42',
        elevation: 0,
    },
    headerShown: false,
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
    
    cardStyle: {
        backgroundColor: "#f79A42",
    },
    
};