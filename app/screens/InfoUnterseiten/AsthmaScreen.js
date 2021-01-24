import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

export default function AsthmaScreen() {
return(
<View style={styles.container}> 
    <Text style={kacheln.titel} >ERSTE HILFE</Text>
    <Text style={kacheln.h1} >Akute Erkrankungen</Text>
    <View style={kacheln.infoBox} > 
        <ScrollView style={{marginBottom:10}}>
            <Text style={kacheln.h2} >ASTHMA BRONCHIALE</Text>
            <Text style={kacheln.infoText} >Ursache sind allergische Reaktionen, psychische Einflüsse und 
            wiederkehrende Infektionen der Luftwege. Dabei entsteht die Atemnot durch eine Verkrampfung oder
             Verschleimung der tieferliegenden feinen Bronchialäste in der Lunge.</Text>
             <Text style={kacheln.h2} >ERKENNEN</Text>
             <Text style={kacheln.infoText} >• Mühe beim Lufteinatmen, das Ausatmen fällt ihm schwer </Text>
             <Text style={kacheln.infoText} >• Betroffene ringt keuchend nach Luft - infolge des Sauerstoffmangels blau im Gesicht (besonders an den Lippen erkennbar)  </Text>
             <Text style={kacheln.infoText} >• Betroffener hat Angst und ist sehr unruhig  </Text>
             <Text style={kacheln.h2} >MAßNAHMEN</Text>
             <Text style={kacheln.infoText} >• Betroffenen beruhigen und ihn auffordern, bei aufrechtem Oberkörper (stehend oder sitzend) ruhig zu atmen   </Text>
             <Text style={kacheln.infoText} >• Einnahme von Medikamenten (Inhalation) unterstützen  </Text>
             <Text style={kacheln.infoText} >• Für Arztbehandlung sorgen  </Text>
             <Text style={kacheln.infoText} >• Evtl. Notruf   </Text>
             <Text style={kacheln.infoText} >Weitere Informationen finden Sie unter: https://www.drk.de/hilfe-in-deutschland/erste-hilfe/ </Text>
        </ScrollView>
     </View>    
</View>
)
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
        height: '75%',
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
        marginLeft: 20,
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
        alignSelf: 'center',
        margin: 5,
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