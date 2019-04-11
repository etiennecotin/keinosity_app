import { Path, Svg, G, Circle } from "react-native-svg";
import {StyleSheet, View} from "react-native";
import React from "react";
import PropTypes from 'prop-types';

export default class MapPin extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Svg
                viewBox="0 0 56 87.5"
                style={styles.svg}>
                <G>
                    <Path
                        fill={this.props.fill}
                        stroke={this.props.stroke}
                        d="M27.8,80.5c-0.9,0-1.6-0.6-1.9-1.4c-4.2-12.6-9.7-19.7-14.5-26c-5.2-6.8-9.6-12.6-9.6-22.6c0-14.3,11.7-26,26-26
                s26,11.7,26,26c0,10-4.5,15.9-9.6,22.6c-4.8,6.3-10.2,13.4-14.5,26C29.4,79.9,28.6,80.5,27.8,80.5z M27.8,8.5c-12.1,0-22,9.9-22,22
                c0,8.7,3.7,13.5,8.8,20.2c4.1,5.3,9.1,11.8,13.2,22c4.1-10.2,9.1-16.7,13.2-22c5.1-6.7,8.8-11.5,8.8-20.2
                C49.8,18.4,39.9,8.5,27.8,8.5z"/>
                    <Circle fill={this.props.fill}
                            stroke={this.props.stroke}
                            cx="27.5"
                            cy="30.8"
                            r="8.3"/>
                </G>
            </Svg>
        )
    }
}

MapPin.propTypes = {
    fill: PropTypes.string,
    stroke: PropTypes.string
};

MapPin.defaultProps = {
    fill: 'none',
    stroke: '#dc2c2c'
};

const styles = StyleSheet.create({
    svg: {
        width: 40,
        height: 40,
    }
});