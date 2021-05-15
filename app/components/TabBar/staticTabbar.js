//Librarys
import React, {Component} from 'react';
import {View, StyleSheet, TouchableWithoutFeedback, Animated, Dimensions, Image} from 'react-native';

export const tabHeight = 60;
const width = Dimensions.get('window').width;

export default class StaticTabbar extends Component {
    constructor(props) {
        super(props);
        const {tabs} = this.props;

        this.values = tabs.map((tab, index) => new Animated.Value(index === 0 ? 1 : 0));
        this.navigation = this.props.navigation;
        this.state = {
            currentTab: 0,
        };
    }
    onChangeTab = (index) => {
        if (!(this.state.currentTab == index)) {
            this.setState({currentTab: index});
            const {value, tabs} = this.props;
            const tabWidth = width / tabs.length;
            Animated.sequence([
                ...this.values.map((value) =>
                    Animated.timing(value, {
                        toValue: 0,
                        duration: 0,
                        useNativeDriver: true,
                    })
                ),
                Animated.parallel([
                    Animated.spring(this.values[index], {
                        toValue: 1,
                        useNativeDriver: true,
                    }),
                    Animated.spring(value, {
                        toValue: -width + tabWidth * index,
                        useNativeDriver: true,
                    }),
                ]),
            ]).start();
        }
    };
    render() {
        const {tabs, value, navigation} = this.props;
        const tabWidth = width / tabs.length;

        return (
            <View style={styles.container}>
                {tabs.map((item, key) => {
                    const activeValue = this.values[key];
                    const opacity = value.interpolate({
                        inputRange: [-width + tabWidth * (key - 1), -width + tabWidth * key, -width + tabWidth * (key + 1)],
                        outputRange: [1, 0, 1],
                        extrapolate: 'clamp',
                    });
                    const translateY = activeValue.interpolate({
                        inputRange: [0, 0.9],
                        outputRange: [tabHeight + 55, 0],
                    });
                    return (
                        <React.Fragment {...{key}}>
                            <TouchableWithoutFeedback
                                onPress={() => {
                                    switch (key) {
                                        case 0:
                                            navigation.navigate('Home');
                                            break;
                                        case 1:
                                            navigation.navigate('Play');
                                            break;
                                        case 2:
                                            navigation.navigate('Sos');
                                            break;
                                        case 3:
                                            navigation.navigate('Info');
                                            break;
                                        case 4:
                                            navigation.navigate('Search');
                                            break;
                                    }
                                    this.onChangeTab(key);
                                }}
                            >
                                <Animated.View style={[styles.tab, {opacity}]}>
                                    {/* <Icon size={22} name={item.name} /> */}
                                    <Image style={{height: 25, width: 25}} source={getIcon(item.name)} />
                                </Animated.View>
                            </TouchableWithoutFeedback>
                            <Animated.View
                                style={{
                                    position: 'absolute',
                                    width: tabWidth,
                                    top: -8,
                                    left: tabWidth * key,
                                    height: tabHeight,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    transform: [{translateY}],
                                }}
                            >
                                <View style={styles.circle}>
                                    <Image style={{height: 25, width: 25}} source={getIcon(item.name, true)} />
                                </View>
                            </Animated.View>
                        </React.Fragment>
                    );
                })}
            </View>
        );
    }
}
function getIcon(icon, focused = false) {
    if (!focused) {
        if (icon == 'home') {
            return home;
        } else if (icon == 'play') {
            return play;
        } else if (icon == 'sos') {
            return sos;
        } else if (icon == 'info') {
            return info;
        } else {
            return search;
        }
    } else {
        if (icon == 'home') {
            return home_fokus;
        } else if (icon == 'play') {
            return play_fokus;
        } else if (icon == 'sos') {
            return sos_fokus;
        } else if (icon == 'info') {
            return info_fokus;
        } else {
            return search_fokus;
        }
    }
}
const home = require('../../assets/Icons/Home.png');
const play = require('../../assets/Icons/Game.png');
const sos = require('../../assets/Icons/Notfall.png');
const info = require('../../assets/Icons/Info.png');
const search = require('../../assets/Icons/Suche.png');
const home_fokus = require('../../assets/Icons/FokusHome.png');
const play_fokus = require('../../assets/Icons/FokusGame.png');
const sos_fokus = require('../../assets/Icons/FokusNotfall.png');
const info_fokus = require('../../assets/Icons/FokusInfo.png');
const search_fokus = require('../../assets/Icons/FokusSuche.png');

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    tab: {
        flex: 1,
        height: tabHeight,
        justifyContent: 'center',
        alignItems: 'center',
    },
    circle: {
        width: 50,
        height: 50,
        borderRadius: 60,
        backgroundColor: '#f79A42',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
