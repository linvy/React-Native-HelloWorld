
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  Platform,
  PixelRatio,
  Image,
  Alert,
  Animated,
} from 'react-native';

export default class FirstScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim : new Animated.Value(0),          // 透明度初始值设为0
    };
  }
  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
       {
      toValue: 1,
    }).start();

    this.timer = setTimeout(
      () => { console.log('把一个定时器的引用挂在this上'); },
      500
    );
  }
  componentWillUnmount() {
    // 请注意Un"m"ount的m是小写

    // 如果存在this.timer，则使用clearTimeout清空。
    // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
    this.timer && clearTimeout(this.timer);
  }
  
  static navigationOptions = {
    title: "First",
  };
  _onPressButton() {
    console.log("You tapped the button!");
    Alert.alert(
      'Click',
      'You tapped the button!',
    )
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Animated.View style={{ 
          justifyContent: 'center', 
          alignItems: 'center',
          opacity: this.state.fadeAnim,          // 将透明度指定为动画变量值
       }}>
        <Button
          title="Go to second"
          color="#841584"
          onPress={() => navigate('Second', { name: 'Jane' })}
        />
        <Button
          style={{ marginTop: 10, padding: 20, }}
          title="Go to Third"
          color="blue"
          onPress={() => navigate('Third')}
        />
        <TouchableHighlight
          underlayColor='#4169e1'
          style={{
            width: '60%',
            padding: 5,
            marginTop: 10,
            backgroundColor: 'skyblue',
            borderRadius: 15,
            alignItems: 'center',
            borderWidth: (Platform.OS === 'ios' ? 1.0 : 5) / PixelRatio.get(),
          }}
          onPress={this._onPressButton}
          onLongPress={()=>Alert.alert(
            '(长按)',
            '请尽情期待!',
          )} 
        >
          <View style={{}}>
            <Text style={{ color: 'white' }}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>

        <TouchableHighlight
          style={{
            width: '60%',
            padding: 5,
            marginTop: 10,
            backgroundColor: 'deepskyblue',
            borderRadius: 15,
            alignItems: 'center',
          }}
          onPress={this._onPressButton}
          underlayColor='#4169e1'
        >
          <View style={{}}>
            <Text style={{ color: 'white' }}>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>

        <TouchableOpacity
          style={{
            width: '60%',
            padding: 5,
            marginTop: 10,
            backgroundColor: 'deepskyblue',
            borderRadius: 15,
            alignItems: 'center',
          }}
          onPress={this._onPressButton}
        >
          <Text style={{ color: 'white' }}>TouchableOpacity</Text>
        </TouchableOpacity>

        <TouchableNativeFeedback
          //background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
          background={TouchableNativeFeedback.Ripple('green', true)}
          onPress={this._onPressButton}>
          <View
            style={{
              width: '60%',
              padding: 5,
              marginTop: 10,
              backgroundColor: 'deepskyblue',
              borderRadius: 15,
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white' }}>TouchableNativeFeedback</Text>
          </View>

        </TouchableNativeFeedback>


        <TouchableWithoutFeedback
          //background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
          background={TouchableNativeFeedback.Ripple('green', true)}
          onPress={this._onPressButton}>
          <View
            style={{
              width: '60%',
              padding: 5,
              marginTop: 10,
              backgroundColor: 'deepskyblue',
              borderRadius: 15,
              alignItems: 'center',
            }}>
            <Text style={{ color: 'white' }}>TouchableWithoutFeedback</Text>
          </View>

        </TouchableWithoutFeedback>
      </Animated.View>

    )
  }
}
// AppRegistry.registerComponent('FirstScreen', () => FirstScreen);
