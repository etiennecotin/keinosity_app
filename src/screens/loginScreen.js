
import React from 'react';
import {StyleSheet, Text, View, Button, StatusBar, TextInput, ImageBackground, Image} from 'react-native';
import Api from "../config/Api";
import LoginForm from '../form/login_form'
import splashScreen from '../assets/splashscreen.png'
import logo_mini from '../assets/logo_mini_white.png'

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Login',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <ImageBackground source={splashScreen} style={{width: '100%', height: '100%'}}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={logo_mini} style={{width: 60, height: 60}} resizeMode={`contain`}/>
                    <Text style={{marginTop: 15, marginBottom: 15, color: '#fff', fontSize: 18}}>Connexion</Text>
                    <LoginForm
                        navigate={navigate}/>
                </View>
            </ImageBackground>
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