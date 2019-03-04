import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Api from "../../config/Api";
import { View, AsyncStorage} from "react-native";
import Card from "./card";

const getList = (values) => new Promise((resolve, reject) => {
    setTimeout(() => {

        Api.post(`projects`, values)
            .then(function (response) {
                resolve(response.data);
            })
            .catch(function (error) {
                reject();
            });
    }, 3000);
});

class ListCard extends Component {
    constructor(props) {
        super(props);
    }
    handleSubmit = async (values) => {
        // console.log(values);
        let response = await getList(values);
        if (response) {
            const token = response.token;
            const refreshToken = response.refresh_token;
            AsyncStorage.setItem('userToken', token);
            AsyncStorage.setItem('refreshToken', refreshToken);

            this.props.navigation.navigate('App');
        }
        throw new Error(); // TEST SUBMISSION ERROR
    };

    render() {
        const names = ['Jake', 'Jon', 'Thruster'];
        return (
            <View>
                {names.map(function(name, index){
                    return <Card key={index} />;
                })}
            </View>
        );
    };
}

export default ListCard;