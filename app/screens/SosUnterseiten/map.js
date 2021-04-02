import React from "react";
import {StyleSheet, Text, View, Dimensions} from "react-native";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import MapView, {Marker} from "react-native-maps";
import mainStyle from "../../components/Styles/mainStyleSheet.js";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default class Map extends React.Component {
    state = {
        location: null,
        geocode: null,
        errorMessage: "",
    };
    componentDidMount() {
        this.getLocationAsync();
    }
    getLocationAsync = async () => {
        let {status} = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== "granted") {
            this.setState({
                errorMessage: "Permission to access location was denied",
            });
        }

        let location = await Location.getCurrentPositionAsync({
            accuracy: Location.Accuracy.BestForNavigation,
        });
        const {latitude, longitude} = location.coords;
        this.getGeocodeAsync({latitude, longitude});
        this.setState({location: {latitude, longitude}});
    };
    getGeocodeAsync = async (location) => {
        let geocode = await Location.reverseGeocodeAsync(location);
        this.setState({geocode});
    };

    render() {
        const {location, geocode, errorMessage} = this.state;
        return (
            <View style={styles.container}>
                <View style={[mainStyle.box, styles.boxSize]}>
                    <View>
                        <Text style={styles.fragezeichen}>?</Text>
                    </View>
                    <View style={{marginTop: 20}}>
                        <Text style={mainStyle.h1}>{geocode ? geocode[0].city : ""}</Text>
                        <Text style={mainStyle.h1}>
                            {geocode ? geocode[0].street : ""}, {geocode ? geocode[0].name : ""}
                        </Text>
                        <Text style={mainStyle.h1}>
                            {location ? `${location.latitude}, ${location.longitude}` : ""}
                        </Text>
                        <Text style={mainStyle.h1}>{errorMessage}</Text>
                    </View>
                </View>
                <View style={styles.mapContainer}>
                    <MapView style={styles.map}>
                        <Marker
                            coordinate={{
                                latitude: 0.0922,
                                longitude: 0.0421,
                            }}
                            pinColor="#f79A42"
                        />
                    </MapView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    mapContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        //borderRadius: 30,
        //overflow: "hidden",
    },
    containerText: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 20,
    },

    fragezeichen: {
        fontSize: 80,
        fontWeight: "bold",
        color: "#000",
        marginRight: 25,
        marginBottom: 5,
    },
    map: {
        width: windowWidth * 0.9, //160
        height: windowWidth * 0.63,
    },
    heading: {
        justifyContent: "center",
        color: "#000",
        fontSize: 20,
        marginBottom: 0,
    },
    boxSize: {
        width: windowWidth * 0.85, //160
        height: windowWidth * 0.2,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
    },
});
