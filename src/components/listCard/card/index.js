import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { StyleSheet, View, Text, Image, TouchableNativeFeedback } from "react-native";
import Like from "../../Like";


class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            al: Math.floor(Math.random() * Math.floor(3))
        }
    }

    render() {
        const navigate = this.props.navigate;
        return (
            <TouchableNativeFeedback
                title="Go to Details"
                onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    navigate('Details', {
                        project: this.props.data,
                    });
                }}
            >
                <View style={styles.card}>
                    <View style={styles.cardheader}>
                        <View style={styles.cardImage}>
                            <View style={this.state.al === 1 ? styles.cardImageLayout : this.state.al === 2 ? styles.cardImageLayoutBlue : styles.cardImageLayoutGreen}/>
                            <Image
                                style={styles.image}
                                resizeMode='contain'
                                source={{uri: 'https://picsum.photos/300/300/?random'}}
                            />
                        </View>
                        <View style={styles.cardContent}>
                            <Text style={styles.cardContentTitle}>{ this.props.data.name }</Text>
                            <Text style={styles.cardContentAuthor}>{ this.props.data.author.username }</Text>
                        </View>
                    </View>
                    <View style={styles.cardAction} >
                        <Like />
                    </View>
                </View>
            </TouchableNativeFeedback>
        );
    };
}

const styles = StyleSheet.create({
    main_container: {
        flexDirection: 'row'
    },
    card: {
        // flex: 1,
        height: 121,
        marginBottom: 15,
        backgroundColor: '#fff',

        shadowColor: '#000',
        elevation: 5,
        shadowOpacity: 0.2,
        shadowRadius: 10,
        shadowOffset: { width: 0, height: 2 },

        borderRadius: 2,
    },
    cardheader: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#b6b1b4',
    },
    cardImage: {
        flex: 2,
        flexDirection: 'row',
        width: 86,
        height: 86,
        position: 'relative',
    },
    cardImageLayout: {
        position: 'absolute',
        backgroundColor: "#c289dd",
        opacity: 0.5,
        zIndex: 9999,
        width: 86,
        height: 86,
        borderTopLeftRadius: 2,
    },
    cardImageLayoutBlue: {
        position: 'absolute',
        backgroundColor: "#9FB7E2",
        opacity: 0.5,
        zIndex: 9999,
        width: 86,
        height: 86,
        borderTopLeftRadius: 2,
    },
    cardImageLayoutGreen: {
        position: 'absolute',
        backgroundColor: "#A3DDC0",
        opacity: 0.5,
        zIndex: 9999,
        width: 86,
        height: 86,
        borderTopLeftRadius: 2,
    },
    image: {
        width: 86,
        height: 86,
        borderTopLeftRadius: 2,
    },
    cardContent: {
        flex: 4,
        flexDirection: 'column',
        height: 86,
        paddingTop: 8,
        paddingRight: 18,
        paddingLeft: 18,
        position: 'relative',
    },
    cardContentTitle: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    cardContentAuthor: {
        position: 'absolute',
        bottom: 0,
        marginBottom: 10,
        marginLeft: 18,
        fontSize: 12,
        color: '#383838',
    },
    cardAction: {
        width: '100%',
        // flex: 1,
        height: 35,
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 18,
        marginRight: 18,
    }
});

export default Card;