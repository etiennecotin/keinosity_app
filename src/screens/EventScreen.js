
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class EventScreen extends React.Component {
    static navigationOptions = {
        title: 'Evenement',
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Evenement Screen</Text>
                {/*<Button*/}
                    {/*title="Add some friends"*/}
                    {/*onPress={() => this.props.navigation.navigate('Details')}*/}
                {/*/>*/}
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