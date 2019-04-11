/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Animated, TouchableOpacity} from 'react-native';

import AppNavigation from './src/navigation/router';
import { Provider } from 'react-redux';
import store from "./src/config/store";

type Props = {};
export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showAddIcon: false,
      showMenu: false,
    };
  }

  render() {
    return (
        <Provider store={store}>
          <AppNavigation/>
        </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
