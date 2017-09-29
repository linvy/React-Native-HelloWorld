/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  Button
} from 'react-native';
import demo from './js/pages/navigator/StackNavigatorDemo';

// import FirstScreen from './js/pages/navigator/screen/FirstScreen';
// import SecondScreen from './js/pages/navigator/screen/SecondScreen';
// import ThirdScreen from './js/pages/navigator/screen/ThirdScreen';

// import { StackNavigator } from 'react-navigation';
// import { TabNavigator } from 'react-navigation';


// const demo = StackNavigator({
//   First: {
//     screen: FirstScreen,
//     navigationOptions: {
//       headerRight: <Button title="更多" accessibilityLabel="Learn more about this purple button" />
//     }
//   },
//   Second: {
//     screen: SecondScreen,
//     navigationOptions: {  
//       headerRight: <Button title="更多2" accessibilityLabel="Learn more about this purple button" />,
//     }
//   },
//   Third: {
//     screen: ThirdScreen,
//     navigationOptions: {  
//       headerRight: <Button title="更多3" accessibilityLabel="Learn more about this purple button" />,
//     }
//   },
// });
AppRegistry.registerComponent('HelloWorld', () => demo);
//测试这个1
//git 测试  2