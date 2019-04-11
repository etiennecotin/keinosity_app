import {Path, Svg, G} from "react-native-svg";
import React from "react";
import PropTypes from 'prop-types';

export default class Event extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Svg
                x = "0px"
                y = "0px"
                viewBox = "0 0 100 99.8"
                style={{width: this.props.width, height: this.props.height, strokeWidth: 5}}>
                <G>
                <Path className="st0"
                      fill={this.props.fill}
                      stroke={this.props.stroke}
                      d="M87.7,34.1c0-9.6-4.9-18-12.8-21.7c-6.3-3.1-13.9-2.4-19.5,1.9C51.1,7.5,44,3,36.1,3
		c-7.4,0.1-14.2,3.8-18.4,9.9c-5.4,7.7-6.9,17.6-3.8,26.5l1.8,4.2c3.6,6.8,9.5,11.3,16.2,12.6l-1.6,7.7c-0.1,0.5,0.2,1.1,0.8,1.2
		c0.1,0,0.1,0,0.2,0h4.6c0.5,1.5,1.3,5.6-2.3,12c-5.2,9.3,2.4,16.5,2.7,16.8c0.4,0.4,1.1,0.4,1.5,0c0.4-0.4,0.4-1.1,0-1.5
		c-0.3-0.3-6.8-6.4-2.3-14.3c3.5-6.2,3.2-10.7,2.6-13h3.9c0.6,0,1-0.4,1-1c0-0.1,0-0.1,0-0.2L41.3,56c3.8-1,7.4-3,10.2-5.8
		c2.7,3.4,6.4,5.8,10.6,6.9l-1.6,7.8c-0.1,0.5,0.2,1.1,0.8,1.2c0.1,0,0.1,0,0.2,0h4.4c0.5,1.1,1.8,5.4-2.1,12.4
		c-5.2,9.3,2.4,16.5,2.7,16.8c0.4,0.4,1.1,0.4,1.5,0c0.4-0.4,0.4-1.1-0.1-1.5c-0.3-0.3-6.8-6.4-2.3-14.3s2.9-11.2,2.3-13.3h3.8
		c0.6,0,1-0.4,1-1c0-0.1,0-0.1,0-0.2l-1.6-7.7C80.6,55,87.7,45.5,87.7,34.1z M40.7,63.1h-3.6c-0.3,0-0.6,0-1,0h-3.6l1.4-6.6h2.2
		l3.3-0.3L40.7,63.1z M36,54.6c-7.7,0-14.6-4.5-18.6-11.9l-1.8-4.1c-2.8-8.3-1.5-17.4,3.5-24.6c3.8-5.6,10.1-8.9,16.8-9
		c12,0,21.7,11.1,21.7,24.8s-9.2,24.8-21.2,24.8L36,54.6z M70.4,64.1h-7.7l1.4-6.6l2.7,0.2h2.3L70.4,64.1z M66.7,55.7
		c-5.5-0.1-10.6-2.7-13.9-7c4.5-5.3,7-12,6.9-18.9c0-4.8-1.2-9.5-3.4-13.8c5-4,11.9-4.7,17.7-1.9c7.2,3.4,11.6,11.1,11.6,19.9
		c0.1,12-8.4,21.7-18.8,21.7H66.7z"/>
                </G>
            </Svg>
        )
    }
}

Event.propTypes = {
    fill: PropTypes.string,
    stroke: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
};

Event.defaultProps = {
    fill: 'none',
    stroke: '#dc2c2c',
    width: 25,
    height: 25
};