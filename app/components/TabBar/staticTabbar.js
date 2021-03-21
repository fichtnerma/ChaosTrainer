//Librarys
import React, {Component} from "react";
import {
    View,
    StyleSheet,
    TouchableWithoutFeedback,
    Animated,
    Dimensions,
} from "react-native";
import {Feather as Icon} from "@expo/vector-icons";

export const tabHeight = 60;
const width = Dimensions.get("window").width;

export default class StaticTabbar extends Component {
    constructor(props) {
        super(props);
        const {tabs} = this.props;

        this.values = tabs.map(
            (tab, index) => new Animated.Value(index === 0 ? 1 : 0)
        );
        this.navigation = this.props.navigation;
        this.state = {
            // values: new Animated.Value(0)
        };
    }
    onPress = (index) => {
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
    };
    render() {
        const {tabs, value} = this.props;
        const tabWidth = width / tabs.length;

        return (
            <View style={styles.container}>
                {tabs.map((item, key) => {
                    const activeValue = this.values[key];
                    const opacity = value.interpolate({
                        inputRange: [
                            -width + tabWidth * (key - 1),
                            -width + tabWidth * key,
                            -width + tabWidth * (key + 1),
                        ],
                        outputRange: [1, 0, 1],
                        extrapolate: "clamp",
                    });
                    const translateY = activeValue.interpolate({
                        inputRange: [0, 0.9],
                        outputRange: [tabHeight + 55, 0],
                    });
                    return (
                        <React.Fragment {...{key}}>
                            <TouchableWithoutFeedback
                                onPress={() => {
                                    let currentScreen = this.props.navigation;
                                    console.log(currentScreen);
                                    switch (key) {
                                        case 0:
                                            this.navigation.navigate("Home");
                                            break;
                                        case 1:
                                            this.navigation.navigate("Play");
                                            break;
                                        case 2:
                                            this.navigation.navigate("Sos");
                                            break;
                                        case 3:
                                            if (currentScreen == "Info") {
                                                this.navigation.goBack();
                                            } else {
                                                this.navigation.navigate(
                                                    "Info"
                                                );
                                            }
                                            break;
                                        case 4:
                                            this.navigation.navigate("Search");
                                            break;
                                    }
                                    this.onPress(key);
                                }}
                            >
                                <Animated.View style={[styles.tab, {opacity}]}>
                                    <Icon size={22} name={item.name} />
                                    {/* <Text style={{fontSize: 12}}>{item.title}</Text> */}
                                </Animated.View>
                            </TouchableWithoutFeedback>
                            <Animated.View
                                style={{
                                    position: "absolute",
                                    width: tabWidth,
                                    top: -8,
                                    left: tabWidth * key,
                                    height: tabHeight,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    transform: [{translateY}],
                                }}
                            >
                                <View style={styles.circle}>
                                    <Icon size={22} name={item.name} />
                                </View>
                            </Animated.View>
                        </React.Fragment>
                    );
                })}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
    },
    tab: {
        flex: 1,
        height: tabHeight,
        justifyContent: "center",
        alignItems: "center",
    },
    circle: {
        width: 50,
        height: 50,
        borderRadius: 60,
        backgroundColor: "#f79A42",
        justifyContent: "center",
        alignItems: "center",
    },
});
