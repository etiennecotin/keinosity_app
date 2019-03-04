
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class DetailsScreen extends React.Component {
    // static navigationOptions = {
    //     title: 'Welcome',
    // };
    render() {
        // const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>Je suis le détail</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});