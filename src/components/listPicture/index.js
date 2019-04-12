import React from 'react';
import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';

import PropTypes from "prop-types";

export default class ListPicture extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const pictures = this.props.pictures;

        return (
            pictures.map(function (data, key) {
                return <View style={styles.projectPictures}
                             key={key}>
                    <Image
                        style={[styles.image, styles.projectPicture]}
                        resizeMode='contain'
                        source={{uri: 'https://picsum.photos/300/300/?random'}}
                    />
                </View>;
            })
        );
    }
}


ListPicture.propTypes = {
    pictures: PropTypes.array,
};

ListPicture.defaultProps = {
    pictures: [
        '',
        '',
        '',
        '',
        ''
    ],
};

const styles = StyleSheet.create({
    image: {
        width: 72,
        height: 72,
        borderRadius: 2
    },
    projectPictures: {
        width: 72,
        height: 72,
        marginRight: 15
    },
});

