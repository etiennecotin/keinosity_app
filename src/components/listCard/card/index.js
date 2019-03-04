import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { View, Text} from "react-native";


class Card extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text>Je suis une card</Text>
            </View>
        );
    };
}

export default Card;