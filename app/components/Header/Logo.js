import * as React from 'react';
import {Image, StyleSheet} from 'react-native';

export default function Logo() {
    return (
        <Image
            source={require('../../assets/headerLogo.png')}
            style={headerStyle.logo}
        ></Image>
    );
}

const headerStyle = StyleSheet.create({
    logo: {
        width: 91,
        height: 31,
        marginBottom: 12,
    },
});
