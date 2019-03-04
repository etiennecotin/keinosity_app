
import React from 'react';
import {StyleSheet, Text, View, Button, StatusBar, TextInput} from 'react-native';
import Api from "../config/Api";
import LoginForm from '../form/login_form'

export default class LoginScreen extends React.Component {
    static navigationOptions = {
        title: 'Login',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Login Screen</Text>
                <LoginForm
                    navigate={navigate}/>
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