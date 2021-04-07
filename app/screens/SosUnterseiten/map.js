import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import MapView, { Marker } from "react-native-maps";

//Styles
import mainStyle from "../../components/Styles/mainStyleSheet.js";
import mapStyle from "../../components/Styles/mapStyleSheet.js";

import Colors from "../../constants/colors.js";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default class Map extends React.Component {
  state = {
    mapRegion: null,
    location: null,
    geocode: null,
    errorMessage: "",
  };

  componentDidMount() {
    this.getLocationAsync();
  }
  handleMapRegionChange = (mapRegion) => {
    this.setState({ mapRegion });
  };
  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    //asks for user permission
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied",
      });
    }

    let location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.BestForNavigation,
    });
    //centers Map on the location
    this.setState({
      mapRegion: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    });
    const { latitude, longitude } = location.coords;
    this.getGeocodeAsync({ latitude, longitude });
    this.setState({ location: { latitude, longitude } });
  };
  getGeocodeAsync = async (location) => {
    let geocode = await Location.reverseGeocodeAsync(location);
    this.setState({ geocode });
  };

  render() {
    const { location, geocode, errorMessage } = this.state;
    return (
      <View style={mapStyle.container}>
        <View style={[mainStyle.box, mapStyle.boxSize]}>
          <View>
            <Image
              source={require("../../assets/SosHomeScreen/location.png")}
              style={mapStyle.locationIcon}
            />
          </View>
          <View style={{ marginTop: 20 }}>
            <Text style={mainStyle.h1}>{geocode ? geocode[0].city : ""}</Text>
            <Text style={mainStyle.h1}>
              {geocode ? geocode[0].street : ""}{" "}
              {geocode ? geocode[0].name : ""}
            </Text>
            <Text style={mainStyle.h1}>
              {location ? `${location.latitude}, ${location.longitude}` : ""}
            </Text>
            <Text style={mainStyle.h1}>{errorMessage}</Text>
          </View>
        </View>
        <View style={mapStyle.mapContainer}>
          <MapView
            style={mapStyle.map}
            region={this.state.mapRegion}
            onRegionChange={this.handleMapRegionChange}
          >
            <Marker
              coordinate={{
                latitude: 0.0457,
                longitude: 0.0421,
              }}
              pinColor={Colors.orange}
            />
          </MapView>
        </View>
      </View>
    );
  }
}
