
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Dimensions,
    TextInput,
    KeyboardAvoidingView,
    TouchableOpacity
} from 'react-native';
import Carousel, {Pagination} from "react-native-snap-carousel";
import { ThemeProvider, Input } from 'react-native-elements';
import FeatherIcon from "react-native-vector-icons/Feather";
import ImagePicker from 'react-native-image-picker';
import Search from "../components/search";

const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};

export default class AddReportingScreen extends React.Component {
    static navigationOptions = {
        title: 'Nouveau signalement',
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
            entries: ['', ''],
            activeSlide: 0,
            reportingName: '',
            location: '',
            tag: '',
            priority: '',
            description: '',
            avatarSource: null
        }
    }

    _selectPictures () {
        ImagePicker.launchImageLibrary(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source = { uri: response.uri };

                // You can also display the image using data:
                // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source,
                });
            }
        });
    }

    _renderItem ({item, index}) {
        switch (index) {
            case 0 :
                return (
                    <View style={{justifyContent: 'center', alignItems: 'center', width: '100%', flex: 1}}>
                        <Input
                            placeholder={'Nom du signalement'}
                            containerStyle={{justifyContent: 'center', alignItems: 'center',}}
                            onChangeText={(reportingName) => this.setState({reportingName})}
                            value={this.state.reportingName}
                            inputContainerStyle={styles.inputStyle}
                            leftIcon={
                                <FeatherIcon
                                    name={'type'}
                                    size={24}
                                    color='#757575'/>
                            }
                        />
                        <Input
                            placeholder={'Emplacement'}
                            containerStyle={{justifyContent: 'center', alignItems: 'center',}}
                            onChangeText={(location) => this.setState({location})}
                            value={this.state.location}
                            inputContainerStyle={styles.inputStyle}
                            leftIcon={
                                <FeatherIcon
                                    name={'map-pin'}
                                    size={24}
                                    color='#757575'/>
                            }
                        />
                        <Input
                            placeholder={'Priorité'}
                            containerStyle={{justifyContent: 'center', alignItems: 'center',}}
                            onChangeText={(priority) => this.setState({priority})}
                            value={this.state.priority}
                            inputContainerStyle={styles.inputStyle}
                            leftIcon={
                                <FeatherIcon
                                    name={'git-merge'}
                                    size={24}
                                    color='#757575'/>
                            }
                        />
                        <Input
                            placeholder={'Description'}
                            containerStyle={{justifyContent: 'center', alignItems: 'center',}}
                            onChangeText={(description) => this.setState({description})}
                            value={this.state.description}
                            inputContainerStyle={styles.inputStyleDesc}
                        />
                    </View>
                );
            case 1 :
                return (
                    <View style={{justifyContent: 'center', alignItems: 'center', width: '100%', flex: 1}}>

                        <TouchableOpacity style={{height: 90, width: 90, borderColor: 'grey', borderRadius: 2, borderWidth: 1, justifyContent: 'center', alignItems: 'center'}} onPress={this._selectPictures.bind(this)}>
                            <FeatherIcon name="plus" size={30} color="#383838"/>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => {this.props.navigation.navigate('App')}}
                            style={styles.button}>
                            <Text style={styles.buttonText}>Partager</Text>
                        </TouchableOpacity>
                        {this.State && this.State.avatarSource}
                    </View>
                );
            default :
                return (
                    <View style={{backgroundColor: '#fa9b78'}}>
                        <Text style={styles.title}>lol {index}EFzgZGz</Text>
                    </View>
                );
        }
    }

     get pagination () {
        const {entries, activeSlide} = this.state;
        return (
            <Pagination
                dotsLength={entries.length}
                activeDotIndex={activeSlide}
                containerStyle={{backgroundColor: '#ffffff'}}
                dotStyle={{
                    width: 10,
                    height: 10,
                    borderRadius: 5,
                    marginHorizontal: 8,
                    backgroundColor: '#5ac7fe'
                }}
                inactiveDotStyle={{
                    // Define styles for inactive dots here
                }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
            />
        );
    }

    render() {
        const {width} = Dimensions.get('window');
        return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Carousel
                        ref={(c) => { this._carousel = c; }}
                        data={this.state.entries}
                        renderItem={this._renderItem.bind(this)}
                        sliderWidth={width}
                        itemWidth={width}
                        onSnapToItem={(index) => this.setState({ activeSlide: index }) }
                    />
                    { this.pagination }
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
    inputStyle: {
        borderColor: '#2E2E2E',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 2,
        width: '80%',
        marginTop: 15,
        marginBottom: 15,
    },
    inputStyleDesc: {
        borderColor: '#2E2E2E',
        borderWidth: 1,
        borderStyle: 'solid',
        borderRadius: 2,
        width: '80%',
        marginTop: 15,
        marginBottom: 15,
        height: 100
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