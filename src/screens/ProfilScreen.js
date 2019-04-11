
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    AsyncStorage,
    Image,
    ScrollView,
    Dimensions,
    TouchableOpacity,
    TouchableHighlight
} from 'react-native';
import img from "../assets/profil.jpg";
import {SceneMap, TabView} from "react-native-tab-view";
import Animated from 'react-native-reanimated';
import ListComments from "../components/listCard/card/ListComments";
import ListCard from "../components/listCard";
import Api from "../config/Api";
import Search from "../components/search";
import { SettingIcon } from "../components/icons";
import Feathericons from "react-native-vector-icons/Feather";


export default class ProfilScreen extends React.Component {
    static navigationOptions = {
        title: 'Profil',
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
            index: 0,
            routes: [
                { key: 'first', title: 'Projets suivis' },
                { key: 'second', title: 'Mes postes' },
            ],
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

    _renderTabBar = props => {
        const inputRange = props.navigationState.routes.map((x, i) => i);

        return (
            <View style={styles.tabBar}>
                {props.navigationState.routes.map((route, i) => {
                    const color = Animated.color(
                        Animated.round(
                            Animated.interpolate(props.position, {
                                inputRange,
                                outputRange: inputRange.map(inputIndex =>
                                    inputIndex === i ? 0 : 150
                                ),
                            })
                        ),
                        Animated.round(
                            Animated.interpolate(props.position, {
                                inputRange,
                                outputRange: inputRange.map(inputIndex =>
                                    inputIndex === i ? 0 : 150
                                ),
                            })
                        ),

                        Animated.round(
                            Animated.interpolate(props.position, {
                                inputRange,
                                outputRange: inputRange.map(inputIndex =>
                                    inputIndex === i ? 0 : 150
                                ),
                            })
                        ),
                    );

                    let focused = i === props.navigationState.index ? 1 : 0;

                    return (
                        <TouchableOpacity
                            key={i}
                            style={[styles.tabItem, { borderBottomWidth: focused ? 1:0}]}
                            onPress={() => this.setState({ index: i })}>
                            <Animated.Text style={{ color }}>{route.title}</Animated.Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    };

    render() {
        return (
            <ScrollView containerStyle={{ flex: 1 }}>
                <View style={styles.settings}>
                    <TouchableHighlight onPress={() => {this.props.navigation.navigate('Settings')}} style={{height: 40, width: 40}}>
                        <Feathericons name="settings" size={30} color="#383838"/>
                    </TouchableHighlight>
                </View>
                <View style={styles.profil}>
                    <View style={styles.profilPicture}>
                        <Image
                            style={styles.contentProfilPicture}
                            resizeMode='contain'
                            source={img}
                        />
                        <TouchableHighlight onPress={() => {this.props.navigation.navigate('Settings')}} style={styles.changePicture}>
                            <Feathericons name="plus" size={25} color="#2E5CAE"/>
                        </TouchableHighlight>
                    </View>
                    <Text style={styles.name}>Etienne Cotin</Text>
                    <Text style={styles.description}>A la conquête de l'espace et de terres inconnues. Un voyage pas comme les autres</Text>
                </View>
                <View style={styles.tabs}>
                    <TabView
                        navigationState={this.state}
                        renderScene={SceneMap({
                            first: () => <View style={{padding: 18,}}>
                                <ListCard dataList={this.state.projects}
                                         navigate={this.props.navigation.navigate}
                                         {...this.props}/>
                                </View>,
                            second: () => <View style={{padding: 18,}}>
                                <ListCard dataList={this.state.projects}
                                          navigate={this.props.navigation.navigate}
                                          {...this.props}/>
                            </View>,
                        })}
                        renderTabBar={this._renderTabBar}
                        onIndexChange={index => this.setState({ index })}
                        initialLayout={{ width: Dimensions.get('window').width }}
                    />
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    settings: {
      position: 'absolute',
      top: 20,
      right: 18,
    },
    profil: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 26
    },
    contentProfilPicture: {
        height: 140,
        width: 140,
        borderRadius: 150
    },
    changePicture: {
        position: 'absolute',
        bottom: 10,
        right: 15,
        height: 34,
        width: 34,
        backgroundColor: '#fff',
        borderColor: '#2E5CAE',
        borderWidth: 1,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    name: {
      fontSize: 35,
      color: '#383838'
    },
    description: {
      fontSize: 16,
      width: '80%',
      textAlign: 'center',
      color: '#383838',
      fontWeight: '100'
    },
    scene: {
        height: 'auto'
    },
    tabBar: {
        flexDirection: 'row',
        padding: 18
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
    },
    tabs: {
        flex: 1,
    }
});