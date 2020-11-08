import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

export default function HomeScreen({navigation}) {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Text>Home Screen</Text>
            <Button
                title="Informationen"
                onPress={() => navigation.navigate('Info')}
            />
            <Button title="SOS" onPress={() => navigation.navigate('Sos')} />
        </View>
    );
}

const containerStyles = {
    backgroundColor: 'orange',
};

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