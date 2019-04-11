import React from 'react';
import {Image, StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity} from 'react-native';
import img from '../assets/profil.jpg';
import ListPicture from '../components/listPicture';

import { MapPinIcon, HeartIcon, ShareIcon } from "../components/icons";
import { TabView, SceneMap } from 'react-native-tab-view';
import Animated from 'react-native-reanimated';
import Resume from "../components/listCard/card/Resume";
import ListComments from "../components/listCard/card/ListComments";

export default class DetailsScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        const {params = {}} = navigation.state;
        return {
            title: params.project.name
        };
    };

    constructor(props) {
        super(props);
        this.state = {
            projectName: '',
            project: null,
            index: 0,
            routes: [
                { key: 'first', title: 'Description' },
                { key: 'second', title: 'Commentaires' },
            ],
            liked: Math.random() >= 0.3,
            numbLike: Math.floor(Math.random() * Math.floor(2000))
        };
    }

    componentDidMount(): void {
        const { navigation } = this.props;
        const project = navigation.getParam('project', 'NO-PROJECT');
        this.setState({project: project});
        this.setState({projectName: project.name});
    }

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

    like () {
        const isLiked = this.state.liked;
        const like = this.state.numbLike;
        this.setState({liked: !isLiked})
        this.setState({numbLike: isLiked? like-1:like+1})
    }

    render() {
        return (
            <View style={{ flex: 1}}>
                <ScrollView contentContainerStyle={{ padding: 18, }}>
                    <View style={styles.header}>
                        <View style={styles.thumbnails}>
                            <Image
                                style={styles.image}
                                resizeMode='contain'
                                source={{uri: 'https://picsum.photos/300/300/?random'}}
                            />
                        </View>
                        <View style={styles.title}>
                            <Text style={styles.titleText}>{ this.state.project && this.state.project.name }</Text>
                        </View>
                    </View>
                    <View style={styles.profil}>
                        <View style={styles.profilPicture}>
                            <Image
                                style={styles.contentProfilPicture}
                                resizeMode='contain'
                                source={img}
                            />
                        </View>
                        <View style={styles.profilInfo}>
                            <Text style={styles.profilName}>Profil</Text>
                            <Text style={styles.postDate}>le 20 février</Text>
                        </View>
                    </View>
                    <View style={styles.beforeLinks}>
                        <View style={styles.links}>
                            <TouchableOpacity style={styles.linkContent} onPress={this.like.bind(this)}>
                                <HeartIcon fill={this.state.liked? '#dc2c2c' : '#fff'} />
                                <Text>{this.state.numbLike}</Text>
                            </TouchableOpacity>
                            <View style={styles.linkContent}>
                                <MapPinIcon fill={`#2C3537`} stroke={`none`}/>
                                <Text>Chantenay</Text>
                            </View>
                            <View style={styles.linkContent}>
                                <ShareIcon fill={`#2C3537`} stroke={`none`}/>
                                <Text>Partager</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.projectPictures}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <ListPicture />
                        </ScrollView>
                    </View>
                    <View style={styles.tabs}>
                        <TabView
                            navigationState={this.state}
                            renderScene={SceneMap({
                                first: () => <Resume resume={this.state.project && this.state.project.description }/>,
                                second: () => <ListComments comments={[]}/>,
                            })}
                            renderTabBar={this._renderTabBar}
                            onIndexChange={index => this.setState({ index })}
                            initialLayout={{ width: Dimensions.get('window').width }}
                        />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    scene: {
      height: 100
    },
    tabBar: {
        flexDirection: 'row',
        marginBottom: 10
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
    },
    container: {
        // flex: 1,
        backgroundColor: '#fff',
        // flexDirection: 'column',
        paddingLeft: 18,
        paddingRight: 18,
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    header: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        height: 72,
    },
    thumbnails: {
        flex: 2,
        flexDirection: 'row',
        width: 72,
        height: 72,
        position: 'relative',
    },
    contentProfilPicture: {
        height: 47,
        width: 47,
        borderRadius: 150
    },
    image: {
        width: 72,
        height: 72,
        borderRadius: 2
    },
    title: {
        flex: 5,
        height: 72,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 22
    },
    titleText: {
        fontSize: 22,
        color: '#383838'
    },
    profil: {
        flex: 1,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
        marginBottom: 30
    },
    profilPicture: {
        flex: 2,
    },
    profilInfo: {
        flex: 7,
    },
    profilName: {
        color: '#383838',
    },
    postDate: {
      color: '#2E5CAE',
    },
    beforeLinks: {
        flex: 1,
        width: '100%',
        height: 'auto',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    links: {
        flex: 1,
        width: '80%',
        height: 'auto',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    linkContent: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    projectPictures: {
        flex: 1,
        width: '100%',
        height: 'auto',
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 30,
    },
    projectPicture: {
        marginLeft: '2%',
        marginRight: '2%',
        borderRadius: 2
    },
    tabs: {
        flex: 1,
    }
});

