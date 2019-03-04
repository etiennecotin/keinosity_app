
import React from 'react';
import { StyleSheet, View, StatusBar, ActivityIndicator, Text, AsyncStorage } from 'react-native';
import Api from "../config/Api";
import jwtDecode from "jwt-decode";

export default class AuthLoadingScreen extends React.Component {
    static navigationOptions = {
        title: 'login',
    };
    constructor(props) {
        super(props);
        this._bootstrapAsync();
    }

    _checkTokenExpiration = (tokenDecoded) => {
        const exp = tokenDecoded.exp;
        const expDate = new Date(exp * 1000);
        const now = new Date();

        return now <expDate;
    };

    refresh_token = (refreshToken) => new Promise((resolve, reject) => {
        setTimeout(() => {
            Api.post(`token/refresh`, {refresh_token: refreshToken})
                .then(function (response) {
                    resolve(response.data);
                })
                .catch(function (error) {
                    return false;
                });
        }, 3000);
    });

    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
        let userToken = null;
        try {
            userToken = await AsyncStorage.getItem('userToken');
            if (userToken !== null) {
                const decoded = jwtDecode(userToken);

                const isValid = this._checkTokenExpiration(decoded);

                if (isValid) {
                    this.props.navigation.navigate('App');
                } else {
                    const refreshToken = await AsyncStorage.getItem('refreshToken');

                    if (refreshToken !== null) {
                        const response = await this.refresh_token(refreshToken);
                        if (response) {
                            AsyncStorage.setItem('userToken', response.token);
                            AsyncStorage.setItem('refreshToken', response.refreshToken);
                            this.props.navigation.navigate('App');
                        }
                        this.props.navigation.navigate('LoginNavigator');
                    }
                    this.props.navigation.navigate('LoginNavigator');
                }
            }
        } catch (error) {
            // Error retrieving data
            console.error(error);
        }
        this.props.navigation.navigate(userToken ? 'App' : 'LoginNavigator');
    };

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ActivityIndicator />
                <StatusBar barStyle="default" />
                <Text>Keïnosity</Text>
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