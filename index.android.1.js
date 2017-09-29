/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Image
} from 'react-native';

export default class HelloWorld extends Component {
  

constructor (props, context) {
  super(props, context)
  
  console.log('====================================');
  console.log(1263132);
  console.log('====================================');
}


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.upperPart}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit index.android.js
          </Text>
          <Text style={styles.instructions}>
            Double tap R on your keyboard to reload,{'\n'}
            Shake or press menu button for dev menu
          </Text>
          <Image style={styles.pic} source={{uri: 'https://avatars3.githubusercontent.com/u/6133685?v=3&s=460'}}>
          </Image>
        </View>
        <View style={styles.style_0}>
            <View style={[styles.style_1,{flexDirection: 'row'}]}>
            <Text style={{marginTop:40, fontSize:25}}>1／4高</Text>
            <Text style={{marginTop:40, fontSize:25}}>1／4高</Text>
        </View>
        <View style={[styles.style_1, {flexDirection: 'column'}]}>
            <Text style={{marginTop:40, fontSize:25}}>1／4高</Text>
            <Text style={{marginTop:40, fontSize:25}}>1／4高</Text>
        </View>
        <View style={{flex:10, borderWidth: 1, borderColor: 'red',}}>
            <Text style={{marginTop:40, fontSize:25}}>1／2高</Text>
            </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
    borderWidth: 3, 
    borderColor: 'red',
    margin:5,
  },
  upperPart: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
    borderWidth: 3, 
    borderColor: 'red',
    margin:30,
    padding:20,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    borderWidth: 1, 
    borderColor: 'white',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
    borderWidth: 1, 
    borderColor: 'white',
  },
  pic:{
    width:100,
    height:100,
  },
  style_0: {
    flex: 1,
  },
  style_1:{
    flex: 5,
    height:40,
    borderWidth: 1,  
    borderColor: 'red',
}
});

AppRegistry.registerComponent('HelloWorld', () => HelloWorld);
