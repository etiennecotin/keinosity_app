
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ListCard from '../components/listCard';
import {Button} from "react-native-elements";
import Search from "../components/search";

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Projets',
        // headerStyle: {
        //     // backgroundColor: "#03A9F4",
        // },
        // headerTintColor: "#fff",
        headerTitleStyle: {
            fontWeight: "bold"
        },
        headerRight: <Search />,
        animationEnabled: true,
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Home Screen</Text>
                <Button
                    title="Add some friends"
                    onPress={() => this.props.navigation.navigate('Details')}
                />

                <ListCard />
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