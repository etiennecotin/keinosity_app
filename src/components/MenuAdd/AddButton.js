import React, {Component} from 'react';
import {Animated, TouchableHighlight, TouchableOpacity, View, Text} from "react-native";
import Feathericons from "react-native-vector-icons/Feather";
import EventEmitter from 'EventEmitter';
import {UPDATE_SHOWMENU} from "../../config/ActionTypes";
import store from '../../config/store';
import {connect} from "react-redux";
import {withNavigation} from "react-navigation";

const SIZE = 54;
const SIZEICON = 44;

function toggleMenu(bool) {
    return {
        type: 'UPDATE_SHOWMENU',
        value: bool
    }
}

class AddButton extends Component {
    constructor(props) {
        super(props);
        this.toggleView = this.toggleView.bind(this)
    }
    mode = new Animated.Value(0);
    toggleButton() {
        const showMenu = this.props.store.showMenu;
        Animated.timing(this.mode, {
            toValue: this.mode._value === 0 && !showMenu ? 1 : 0,
            duration: 300
        }).start();
    }

    toggleView() {
        this.toggleButton();
        store.dispatch(toggleMenu(this.mode._value === 0 ? 1 : 0))
    };

    goTo(route) {
        this.toggleView();
        this.props.navigation.navigate(route);
    }

    render() {
        const firstX = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -70]
        });
        const firstY = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [70, 70]
        });
        const secondX = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -10]
        });
        const secondY = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [70, -35]
        });
        const opacity = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1]
        });
        const rotation = this.mode.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '45deg']
        });
        return (
            <View style={{ position: 'absolute', right: 10, bottom: 10, justifyContent: 'center', alignItems: 'center'}}>
                <Animated.View style={{
                    position: 'relative',
                    left: firstX,
                    top: firstY,
                    zIndex: 9999,
                    opacity
                }}>
                    <TouchableOpacity
                        onPress={() => {this.goTo('AddProject')}}
                        style={{
                            position: 'relative',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: SIZEICON,
                            height: SIZEICON,
                            borderRadius: SIZEICON,
                            backgroundColor: '#fff',
                            zIndex: 9999,
                        }}
                    >
                        <React.Fragment>
                            <Feathericons name="briefcase" size={18} color="#9FB7E2"/>
                            <Text style={{
                                position: 'absolute',
                                top: 50,
                                color: '#fff',
                                width: 70,
                                textAlign: 'center'
                            }}>Projet</Text>
                        </React.Fragment>
                    </TouchableOpacity>
                </Animated.View>
                <Animated.View style={{
                    position: 'relative',
                    left: secondX,
                    top: secondY,
                    zIndex: 9999,
                    opacity
                }}>
                    <TouchableOpacity
                        onPress={() => {this.goTo('AddReporting')}}
                        style={{
                            position: 'relative',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: SIZEICON,
                            height: SIZEICON,
                            borderRadius: SIZEICON,
                            backgroundColor: '#fff',
                            zIndex: 9999,
                        }}
                    >
                        <React.Fragment>
                            <Feathericons name="bell" size={18} color="#9FB7E2"/>
                            <Text style={{
                                position: 'absolute',
                                top: 50,
                                color: '#fff',
                                width: 70,
                                textAlign: 'center'
                            }}>Signaler</Text>
                        </React.Fragment>
                    </TouchableOpacity>
                </Animated.View>
                <TouchableOpacity
                    onPress={this.toggleView}
                    underlayColor="#5b9dd8"
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: SIZE,
                        height: SIZE,
                        borderRadius: SIZE / 2,
                        backgroundColor: '#9FB7E2',
                        borderWidth: 1,
                        borderColor: '#D0DCF1',
                        zIndex: 9999,
                    }}
                >
                    <Animated.View style={{
                        transform: [
                            {rotate: rotation}
                        ],
                        zIndex: 9999,
                    }}>
                        <Feathericons name="plus" size={24} color="#F8F8F8"/>
                    </Animated.View>
                </TouchableOpacity>
            </View>
        );
    }
}


const mapStateToProps = (state) => {
    return { store: state.global }
};
export default connect(mapStateToProps)(withNavigation(AddButton));