import React, { Component } from 'react';

import {
  AppRegistry,
  Button,
  Alert
} from 'react-native';

import FirstScreen from '../../../js/pages/navigator/screen/FirstScreen';
import SecondScreen from '../../../js/pages/navigator/screen/SecondScreen';
import ThirdScreen from '../../../js/pages/navigator/screen/ThirdScreen';

import { StackNavigator } from 'react-navigation';
import { TabNavigator } from 'react-navigation';


export default StackNavigatorDemo = StackNavigator({
  First: {
    screen: FirstScreen,
    navigationOptions: {
      headerRight: <Button title="更多" 
      onPress={()=>Alert.alert(
        '更多',
        '请尽情期待!',
      )} 
      accessibilityLabel="Learn more about this purple button" />
    }
  },
  Second: {
    screen: SecondScreen,
    navigationOptions: {  
      headerRight: <Button title="更多2" accessibilityLabel="Learn more about this purple button" />,
    }
  },
  Third: {
    screen: ThirdScreen,
    navigationOptions: {  
      headerRight: <Button title="更多3" accessibilityLabel="Learn more about this purple button" />,
    }
  },
});
// AppRegistry.registerComponent('StackNavigatorDemo', () => StackNavigatorDemo);