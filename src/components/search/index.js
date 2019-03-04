import React from "react";
import {Button} from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome';

class Search extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Button
                icon={
                    <Icon
                        name="search"
                        size={20}
                        color="black"
                    />
                }
                containerStyle={{marginRight: 18}}
                buttonStyle={{backgroundColor: "transparent"}}
                // onPress={() => this.props.navigation.navigate('Details')}
            />
        );
    }
}

export default Search;