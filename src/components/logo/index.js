import React from 'react'
import { Image } from 'react-native';
import logo from "../../assets/logo.png"

export default class LogoTitle extends React.Component {
    render() {
        return (
            <Image
                source={logo}
                style={{ width: 150, height: 45 }}
                resizeMode={'contain'}
            />
        );
    }
}