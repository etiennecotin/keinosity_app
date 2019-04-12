import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { ScrollView, StyleSheet, View, AsyncStorage, TouchableWithoutFeedback} from "react-native";
import store from "../../../config/store";
import {connect} from "react-redux";

function toggleMenu(bool) {
    return {
        type: 'UPDATE_SHOWMENU',
        value: bool
    }
}

class Layout extends Component {
    constructor(props) {
        super(props);
    }

    test () {
        const showMenu = this.props.store.showMenu;
        store.dispatch(toggleMenu(!showMenu));
    }

    render() {
        let showMenu = this.props.store.showMenu;
        // const navigate = this.props.navigate;
        return (
            <React.Fragment>
                {showMenu ?
                    <TouchableWithoutFeedback onPress={this.test.bind(this)}>
                         <View style={styles.layout} />
                    </TouchableWithoutFeedback> : null
                }
            </React.Fragment>
        );
    };
}

const styles = StyleSheet.create({
    layout: {
        position: 'absolute',
        flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: '#000000',
        opacity: 0.6,
        // bottom: 50,
        zIndex: 9998,
    }
});
const mapStateToProps = (state) => {
    return { store: state.global }
};
export default connect(mapStateToProps)(Layout);