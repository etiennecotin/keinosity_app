import {Path, Svg} from "react-native-svg";
import {StyleSheet, View} from "react-native";
import React from "react";
import PropTypes from 'prop-types';

export default class Heart extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Svg
                 viewBox="0 0 28.5 24"
                 style={{width: this.props.width, height: this.props.height}}>
                <Path
                    fill={this.props.fill}
                    stroke={this.props.stroke}
                    transform="translate(-6.5 -12.497)"
                    d="M29.605,12.9a5.539,5.539,0,0,0-2.514-.4,7.223,7.223,0,0,0-6.7,4.465A7.309,7.309,0,0,0,13.7,12.5,6.7,6.7,0,0,0,7,18.973v.112a6.7,6.7,0,0,0,.335,2.065c.781,2.958,3.014,5.916,5.637,8.651.641.657.732.794,1.563,1.563,2.009,1.9,4.074,3.683,5.86,5.135,4.688-3.963,11.5-10.158,13.06-15.348a6.586,6.586,0,0,0,.223-.949v-.112a6.753,6.753,0,0,0,.056-.949,6.877,6.877,0,0,0-2.145-4.982C30.23,12.887,29.605,12.9,29.605,12.9Z"/>
            </Svg>
        )
    }
}

Heart.propTypes = {
    fill: PropTypes.string,
    stroke: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
};

Heart.defaultProps = {
    fill: 'none',
    stroke: '#dc2c2c',
    width: 40,
    height: 40
};