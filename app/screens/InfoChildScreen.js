import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

export default function InfoChildScreen({navigation}) {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Text>InfoChild Screen</Text>
            <Button
                title="Info"
                onPress={() => navigation.navigate('Info')}
            />
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