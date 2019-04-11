import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Api from "../../config/Api";
import { ScrollView, StyleSheet, View, AsyncStorage} from "react-native";
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

    render() {
        let data = this.props.dataList;
        const navigate = this.props.navigate;
        return (
            data.map(function(data, index){
                return <Card
                    key={index}
                    data={data}
                    navigate={navigate}
                />;
            })
        );
    };
}

const styles = StyleSheet.create({
    container: {
        // flex:1,
        // justifyContent: 'center',
        // alignSelf: 'stretch',
        // textAlign: 'center',
        paddingVertical: 20,
    }
});

export default ListCard;