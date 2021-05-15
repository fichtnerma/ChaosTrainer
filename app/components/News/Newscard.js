import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';

import mainStyle from '../Styles/mainStyleSheet.js';
import homeStyle from '../Styles/homeStyleSheet.js';
import colors from '../../constants/colors.js';

function formateNumber(number) {
    let str = number.toString();
    if (str.length > 3) {
        str = str.substring(0, str.length - 3) + '.' + str.substring(str.length - 3, str.length);
    }
    if (str.length > 7) {
        str = str.substring(0, str.length - 7) + '.' + str.substring(str.length - 7, str.length);
    }
    return str;
}

export default function Newscard(props) {
    const {item} = props;
    return (
        <View style={[mainStyle.box, homeStyle.boxSize, {marginTop: 10}]}>
            <Text style={[homeStyle.tippDesTagesTitel, styles.newsTitel]}>{item.attributes.LAN_ew_GEN}</Text>
            <View style={{flexDirection: 'row'}}>
                <Image source={require('../../assets/InfoScreen/Virus.png')} style={styles.virusIcon}></Image>
                <View style={styles.newsBlock}>
                    <Text style={styles.newsText}>
                        7-Tagesinzidenz: <Text style={styles.zahlenText}>{item.attributes.cases7_bl_per_100k_txt}</Text>
                    </Text>
                    <Text style={styles.newsText}>
                        Fallzahlen: <Text style={styles.zahlenText}>{formateNumber(item.attributes.Fallzahl)}</Text>
                    </Text>
                    <Text style={styles.newsText}>
                        Todeszahlen: <Text style={styles.zahlenText}>{formateNumber(item.attributes.Death)}</Text>
                    </Text>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    virusIcon: {
        width: 120,
        height: 120,
    },

    newsBlock: {
        marginTop: 20,
    },

    newsText: {
        fontSize: 16,
    },

    newsTitel: {
        top: 5,
        fontSize: 25,
    },

    zahlenText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: colors.blue,
    },
});
