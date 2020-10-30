import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button} from 'react-native';
import  WelcomeScreen  from './app/screens/WelcomeScreen';

export default function App() {
  return (
    <View>
      <SafeAreaView style={containerStyles}>
        <Button
            title="Click Me" color= "black" />
      </SafeAreaView>
        <View style={styles.container}>
          <Text numberOfLines={1}>Hallo Leute</Text>
        </View>
        <WelcomeScreen />
      <View style={styles.container}>
        <Text numberOfLines={1}>Hallo Leute</Text>
      </View>
    </View>
  );
}
const containerStyles = {
  backgroundColor: "orange"
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
    width: "100%",
    height: "100%",
}
});
