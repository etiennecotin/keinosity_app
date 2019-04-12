
import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    ActivityIndicator,
    StatusBar,
    Button,
    AsyncStorage, TextInput
} from 'react-native';
import Search from "../components/search";
import MapView, {PROVIDER_GOOGLE} from "react-native-maps";
import Feathericons from "react-native-vector-icons/Feather";

export default class LocationScreen extends React.Component {
    static navigationOptions = {
        title: 'Mon emplacement',
        headerTintColor: '#2E5CAE',
        headerTitleStyle: {
            fontWeight: "bold",
            color: '#2E5CAE'
        },
        headerRight: <Search />,
        animationEnabled: true,
    };

    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            loaded: false,
            location: ''
        };
    }

    render() {
        let isLoaded = this.state.loaded;
        return (
            <View style={styles.container}>
                <View
                    style={{zIndex: 500, height: 50, width: '90%', borderRadius: 2, backgroundColor: 'white', position: 'absolute', top: 30, flex: 1, flexDirection: 'row', alignItems: 'center', paddingLeft: 15}}>
                    <Feathericons name="map-pin" size={18} color="#383838" />
                    <TextInput // Inherit any props passed to it; e.g., multiline, numberOfLines below
                        editable = {true}
                        maxLength = {40}
                        value={this.state.location}
                        onChangeText={(location) => this.setState({location})}
                        placeholder={`Emplacement`}
                        style={{height: 50, width: '100%'}}
                    />
                </View>
                <MapView
                    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                    style={styles.map}
                    scrollEnabled={true}
                    zoomEnabled={true}
                    rotateEnabled={true}
                    showsUserLocation={true}
                    followsUserLocation={true}
                    region={{
                        latitude: 47.217549,
                        longitude: -1.565326,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
                >
                </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: '100%',
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});