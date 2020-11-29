import * as React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Tabbar from './tabbar';

export default function MyTabBar({state, descriptors, navigation}) {
    return <Tabbar nav={navigation}></Tabbar>;
}
