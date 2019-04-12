import React, {Component} from 'react';
import AddButton from "./AddButton";
import Layout from "./Layout";

export default class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment >
                <Layout />
                <AddButton navigation={this.props.navigation}/>
            </React.Fragment>
        );
    }
}
