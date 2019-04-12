import React from 'react';
import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';

import PropTypes from "prop-types";

export default class Resume extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const resume = this.props.resume;

        return (
             <View style={styles.resumeContainer}>
                <Text style={styles.resumeText}>{resume}</Text>
            </View>
        );
    }
}


Resume.propTypes = {
    pictures: PropTypes.array,
};

Resume.defaultProps = {
    pictures: [
        '',
        '',
        '',
        '',
        ''
    ],
};

const styles = StyleSheet.create({
    resumeContainer: {
        flex: 1,
        minHeight: 150
    },
    resumeText: {
        fontSize: 16,
        lineHeight: 22
    }
});
