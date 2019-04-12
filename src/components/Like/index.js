import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { StyleSheet, View, Text, Image, TouchableOpacity} from "react-native";
import {HeartIcon} from "../icons";
import TouchableItem from "react-native-tab-view/src/TouchableItem";


class Like extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity style={styles.card}>
                <HeartIcon height={20} width={20}/>
                <Text style={styles.likeNumber}>100</Text>
                <Text style={styles.likeNumber}>Il y a 5mn</Text>
            </TouchableOpacity>
        );
    };
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
    },
    likeNumber: {
        marginLeft: 10
    }
});

export default Like;