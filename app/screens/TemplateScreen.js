import React from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';

export default function TemplateScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text>Template Screen</Text>
            <Button
                title="Template"
                onPress={() => navigation.navigate('Template')}
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
