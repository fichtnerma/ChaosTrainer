import React from "react";
import { Text, View, Image } from "react-native";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import MapView from "react-native-maps";

//Styles
import mainStyle from "../../components/Styles/mainStyleSheet.js";
import mapStyle from "../../components/Styles/mapStyleSheet.js";

import Colors from "../../constants/colors.js";

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

  //asks for user permission of location
  getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    //when not allowed error message is displayed
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied",
      });
    }
    //when granted gets user location
    let location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.BestForNavigation,
    });
    //centers Map on users current location
    this.setState({
      mapRegion: {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.02,
        longitudeDelta: 0.0421,
      },
    });
    const { latitude, longitude } = location.coords;
    this.getGeocodeAsync({ latitude, longitude });
    this.setState({ location: { latitude, longitude } });
  };

  //get Address of user from location and save in state geocode
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
            showsUserLocation={true}
            followsUserLocation={true}
          ></MapView>
        </View>
      </View>
    );
  }
}
