import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

export default function InfoChildScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Feuer</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
    },
});
