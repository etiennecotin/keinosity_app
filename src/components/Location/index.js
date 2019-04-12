
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicator,
    StatusBar,
    Button,
    TouchableOpacity
} from 'react-native';
import Feathericons from "react-native-vector-icons/Feather";

export default class Location extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={{ width: '50%', height: 25, flexDirection: 'row', alignItems: 'center'}}>
                    <Feathericons name="map-pin" size={18} color="#383838" />
                    <Text style={{fontSize: 18, marginLeft: 10}}>Chantenay</Text>
                </View>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('Location')}} style={{width: 25, height: 25}}>
                    <Feathericons name="sliders" size={25} color="#383838"/>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        height: 30,
        marginBottom: 20
    },
});