
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class AddProjectScreen extends React.Component {
    static navigationOptions = {
        title: 'Créer un projet pour ma ville',
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>projet Screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});