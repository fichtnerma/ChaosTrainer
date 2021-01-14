import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

export default function ErsteHilfeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Feuer2</Text>
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