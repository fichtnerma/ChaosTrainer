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
        flexDirection: 'column',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    background: {
        flex: 1,
        width: '100%',
        height: '100%',
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