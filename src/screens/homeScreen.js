
import React from 'react';
import {ScrollView, StyleSheet, Text, View, Image, ActivityIndicator, StatusBar} from 'react-native';
import ListCard from '../components/listCard';
import {Button} from "react-native-elements";
import Search from "../components/search";
import Location from "../components/Location";
import Api from "../config/Api";
import MenuAdd from "../components/MenuAdd";
import LogoTitle from "../components/logo"

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        // title: 'Projets',
        headerTitle: <LogoTitle />,
        headerTintColor: '#2E5CAE',
        headerTitleStyle: {
            fontWeight: "bold",
            color: '#2E5CAE'
        },
        headerRight: <Search />,
        animationEnabled: true,
    };

    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            loaded: false,
        };
    }

    componentDidMount(): void {
        this.getListOfProjects();
    }

    getListOfProjects = () => {
        Api.get('/projects')
            .then(function (response) {
                this.setState({projects: response.data});
                console.log(response.data);
                this.setState({loaded: true});
            }.bind(this))
            .catch(function (error) {
                console.log(error);
            });
     };

    render() {
        let isLoaded = this.state.loaded;
        const { navigate } = this.props.navigation;

        if (isLoaded) {
            return (
                <React.Fragment >
                    <MenuAdd/>
                    <View contentContainerStyle={{ flex: 1}}>
                        <ScrollView contentContainerStyle={{ padding: 18, }}>
                            <Location navigation={this.props.navigation}/>
                            <ListCard
                                dataList={this.state.projects}
                                navigate={navigate}
                                {...this.props}
                            />
                        </ScrollView>
                    </View>
                </React.Fragment>
            );
        } else {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <MenuAdd/>
                    <ActivityIndicator />
                    <StatusBar barStyle="default" />
                    <Text>Chargement</Text>
                </View>
            );
        }

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