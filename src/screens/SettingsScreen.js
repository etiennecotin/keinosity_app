
import React from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    StatusBar,
    Button,
    AsyncStorage
} from 'react-native';
import Search from "../components/search";

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Paramètres',
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

    _logout = async () => {
        const userToken = await AsyncStorage.getItem('userToken');
        if (userToken) {
            AsyncStorage.removeItem('userToken');
            AsyncStorage.removeItem('refreshToken');
            this.props.navigation.navigate('AuthLoading')
        }
    };

    render() {
        let isLoaded = this.state.loaded;
        return (
            <View style={styles.container}>
                <Text style={{fontSize: 30}}>Paramètres</Text>

                <TouchableOpacity
                    onPress={this._logout}
                    style={styles.button}>
                    <Text style={styles.buttonText}>Déconnexion</Text>
                </TouchableOpacity>
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
        padding: 18
    },
    button: {
        backgroundColor: '#4A4A4A',
        height: 40,
        width: 150,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 2,
        margin: 10
    },
    buttonText: {
        color: '#fff',
    }
});