
import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
} from 'react-native';
export default class SecondScreen extends Component {
    static navigationOptions = {
      title: 'Second',
    };
    render() {
      const { navigate } = this.props.navigation;
      return (
        <Button
          title="go to Third"
          color="#841584"
          onPress={() => navigate('Third')}
        />
      )
    }
  }
// AppRegistry.registerComponent('SecondScreen', () => SecondScreen);
