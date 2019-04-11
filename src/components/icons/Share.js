import {Path, Svg, G} from "react-native-svg";
import {StyleSheet, View} from "react-native";
import React from "react";
import PropTypes from 'prop-types';

export default class Share extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Svg
                viewBox="0 0 78.7 90.3"
                 style={styles.svg}>
            <G transform="translate(0,-952.36218)">
                <Path
                    fill={this.props.fill}
                    stroke={this.props.stroke}
                    d="M59,956c-7.7,0-14,6.3-14,14c0,1.5,0.2,2.9,0.6,4.2l-19.4,13.3c-2.5-2.2-5.7-3.5-9.2-3.5c-7.7,0-14,6.3-14,14s6.3,14,14,14
                    c3.5,0,6.7-1.3,9.2-3.5l19.5,13.2c-0.4,1.3-0.7,2.7-0.7,4.2c0,7.7,6.3,14,14,14s14-6.3,14-14s-6.3-14-14-14
                    c-4.8,0-9.1,2.5-11.6,6.2l-18.6-12.7c1.4-2.2,2.2-4.7,2.2-7.5c0-2.8-0.8-5.3-2.2-7.5l18.6-12.7c2.5,3.7,6.8,6.2,11.6,6.2
                    c7.7,0,14-6.3,14-14S66.7,956,59,956L59,956z M59,960c5.5,0,10,4.5,10,10s-4.5,10-10,10s-10-4.5-10-10S53.5,960,59,960z M17,988
                    c5.5,0,10,4.5,10,10s-4.5,10-10,10s-10-4.5-10-10S11.5,988,17,988z M59,1016c5.5,0,10,4.5,10,10c0,5.5-4.5,10-10,10s-10-4.5-10-10
                    C49,1020.5,53.5,1016,59,1016z"/>
            </G>
        </Svg>
        )
    }
}

Share.propTypes = {
    fill: PropTypes.string,
    stroke: PropTypes.string
};

Share.defaultProps = {
    fill: 'none',
    stroke: '#dc2c2c'
};

const styles = StyleSheet.create({
    svg: {
        width: 40,
        height: 40,
    }
});