//Librarys
import React, {Component} from 'react';
import {View, StyleSheet, Dimensions, Animated} from 'react-native';
import * as shape from 'd3-shape';
import Svg, {Path} from 'react-native-svg';

//Components
import StaticTabbar, {tabHeight as height} from './staticTabbar';

const width = Dimensions.get('window').width;

const tabs = [{name: 'home'}, {name: 'play'}, {name: 'sos'}, {name: 'info'}, {name: 'search'}];
const tabWidth = width / tabs.length;
const AnimatedSvg = Animated.createAnimatedComponent(Svg);
const CurrentTab = React.createRef();

const left = shape
    .line()
    .x((d) => d.x)
    .y((d) => d.y)([
    {x: 0, y: 0},
    {x: width, y: 0},
]);

const tab = shape
    .line()
    .x((d) => d.x)
    .y((d) => d.y)
    .curve(shape.curveNatural)([
    {x: width - 7, y: 0},
    {x: width - 5, y: 1},
    {x: width + 8, y: 14},
    {x: width + 25, y: height - 20},
    {x: width + tabWidth - 25, y: height - 20},
    {x: width + tabWidth - 8, y: 14},
    {x: width + tabWidth + 5, y: 1},
    {x: width + tabWidth + 7, y: 0},
]);

const right = shape
    .line()
    .x((d) => d.x)
    .y((d) => d.y)([
    {x: width + tabWidth, y: 0},
    {x: width * 2.5, y: 0},
    {x: width * 2.5, y: height},
    {x: 0, y: height},
    {x: 0, y: 0},
]);

const d = `${left} ${tab} ${right}`;

export default class Tabbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: new Animated.Value(-width),
        };
    }

    changeCurrentTab = () => {
        let currentScreen = this.props.navigation.dangerouslyGetState().routes[this.props.navigation.dangerouslyGetState().index];
        switch (currentScreen.name) {
            case 'Home':
                CurrentTab.current.onChangeTab(0);
                break;
            case 'Play':
                CurrentTab.current.onChangeTab(1);
                break;
            case 'SOS':
                CurrentTab.current.onChangeTab(2);
                break;
            case 'Info':
                CurrentTab.current.onChangeTab(3);
                break;
            case 'Search':
                CurrentTab.current.onChangeTab(4);
                break;
        }
    };
    render() {
        const {value: translateX} = this.state;
        return (
            <View style={{backgroundColor: '#ff000000'}}>
                <View {...{width, height}}>
                    <AnimatedSvg width={width * 2.5} {...{height}} style={{transform: [{translateX}]}}>
                        <Path {...{d}} fill="#f79A42" />
                    </AnimatedSvg>
                    <View style={StyleSheet.absoluteFill}>
                        <StaticTabbar ref={CurrentTab} value={translateX} navigation={this.props.navigation} {...{tabs}} />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: '#f79A42',
        height: 15,
    },
});
