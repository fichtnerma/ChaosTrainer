//Librarys
import React from 'react';
import {Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

//Styles
import mainStyle from '../components/Styles/mainStyleSheet.js';
import infoStyle from '../components/Styles/InfoContainerStyleSheet.js';

export default function InfoScreen({navigation}) {
    return (
        <View style={mainStyle.container}>
            <View style={infoStyle.layout}>
                <TouchableOpacity
                    style={[mainStyle.iconBox, infoStyle.boxSize]}
                    onPress={() => navigation.navigate('ErsteHilfe', {page: 'ersteHilfe'})}
                >
                    <Image source={require('../assets/InfoScreen/Erste_Hilfe.png')} style={mainStyle.icons} />
                    <Text style={mainStyle.titleIcon}>Erste Hilfe</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[mainStyle.iconBox, infoStyle.boxSize]} onPress={() => navigation.navigate('ErsteHilfe', {page: 'brand'})}>
                    <Image source={require('../assets/InfoScreen/Feuer.png')} style={mainStyle.icons} />
                    <Text style={mainStyle.titleIcon}>Brand</Text>
                </TouchableOpacity>
            </View>
            <View style={infoStyle.layout}>
                <TouchableOpacity style={[mainStyle.iconBox, infoStyle.boxSize]} onPress={() => navigation.navigate('ErsteHilfe', {page: 'virus'})}>
                    <Image source={require('../assets/InfoScreen/Virus.png')} style={mainStyle.icons} />
                    <Text style={mainStyle.titleIcon}>Virus</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[mainStyle.iconBox, infoStyle.boxSize]} onPress={() => navigation.navigate('ErsteHilfe', {page: 'unfall'})}>
                    <Image source={require('../assets/InfoScreen/Unfall.png')} style={mainStyle.icons} />
                    <Text style={mainStyle.titleIcon}>Verkehrsunfall</Text>
                </TouchableOpacity>
            </View>
            <View style={infoStyle.layout}>
                <TouchableOpacity
                    style={[mainStyle.iconBox, infoStyle.boxSize]}
                    onPress={() => navigation.navigate('ErsteHilfe', {page: 'ueberschwemmung'})}
                >
                    <Image source={require('../assets/InfoScreen/Überschwemmung.png')} style={mainStyle.icons} />
                    <Text style={mainStyle.titleIcon}>Naturkatastrophen</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[mainStyle.iconBox, infoStyle.boxSize]} onPress={() => navigation.navigate('ErsteHilfe', {page: 'terror'})}>
                    <Image source={require('../assets/InfoScreen/Waffe.png')} style={mainStyle.icons} />
                    <Text style={mainStyle.titleIcon}>Terroranschlag</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
