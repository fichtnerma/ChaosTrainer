import React from 'react';
import {Text, View, Button} from 'react-native';

export default function InfoScreen({navigation}) {
    return (
        <View
            style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Text>Informationen</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.navigate('Home')}
            />
            <Button title="Go back" onPress={() => navigation.goBack()} />
        </View>
    );
}
