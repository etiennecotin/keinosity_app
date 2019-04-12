import React from 'react';
import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';

import PropTypes from "prop-types";

export default class Comments extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const comments = this.props.comments;

        return (
            <View style={styles.projectPictures}>
                <Text>Liste des commentaires</Text>
            </View>
        );
    }
}


Comments.propTypes = {
};

Comments.defaultProps = {
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
