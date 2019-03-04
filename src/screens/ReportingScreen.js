
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class ReportingScreen extends React.Component {
    static navigationOptions = {
        title: 'Signalement',
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Reporting Screen</Text>
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