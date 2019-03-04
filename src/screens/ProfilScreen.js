
import React from 'react';
import {StyleSheet, Text, View, Button, AsyncStorage} from 'react-native';


export default class ProfilScreen extends React.Component {
    static navigationOptions = {
        title: 'Profil',
    };

    _logout = async () => {

        const userToken = await AsyncStorage.getItem('userToken');
        if (userToken) {
            AsyncStorage.removeItem('userToken');
            AsyncStorage.removeItem('refreshToken');
            this.props.navigation.navigate('AuthLoading')
        }
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>profil Screen</Text>
                <Button
                    title="Déconnexion"
                    onPress={this._logout}
                />
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