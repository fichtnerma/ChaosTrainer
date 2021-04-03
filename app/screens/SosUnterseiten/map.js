import React from "react";
import { StyleSheet, Text, View, Dimensions, Image } from "react-native";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import MapView, { Marker } from "react-native-maps";
import mainStyle from "../../components/Styles/mainStyleSheet.js";

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
      <View style={styles.container}>
        <View style={[mainStyle.box, styles.boxSize]}>
          <View>
            <Image
              source={require("../../assets/SosHomeScreen/location.png")}
              style={styles.locationIcon}
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
        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            region={this.state.mapRegion}
            onRegionChange={this.handleMapRegionChange}
          >
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
    alignItems: "center",
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

  locationIcon: {
    width: windowWidth * 0.15,
    height: windowWidth * 0.15,
    marginRight: 20,
    marginLeft: -20,
  },
  map: {
    width: windowWidth * 0.9, //160
    height: windowWidth * 0.75,
  },
  heading: {
    justifyContent: "center",
    color: "#000",
    fontSize: 20,
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
