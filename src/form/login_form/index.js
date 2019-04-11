import React, { Component } from 'react';
import HelloFormRF from './login_form_rf';
import { PropTypes } from 'prop-types';
import Api from "../../config/Api";
import jwtDecode from 'jwt-decode';
import {AsyncStorage} from "react-native";

const wait = (values) => new Promise((resolve, reject) => {
    setTimeout(() => {

        Api.post(`login_check`, values)
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                reject();
            });
    }, 100);
});

class LoginForm extends Component {
    constructor(props) {
        super(props);
    }
    handleSubmit = async (values) => {
        // console.log(values);
        let response = await wait(values);
        if (response) {
            const token = response.token;
            const refreshToken = response.refresh_token;
            AsyncStorage.setItem('userToken', token);
            AsyncStorage.setItem('refreshToken', refreshToken);

            this.props.navigate('App');
        }
        throw new Error(); // TEST SUBMISSION ERROR
    };

    render() {
        return <HelloFormRF onSubmit={this.handleSubmit} />;
    };
}

export default LoginForm;