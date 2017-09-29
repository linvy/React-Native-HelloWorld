
import React, { Component } from 'react';
import {
  AppRegistry,
  Button,
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  Text
} from 'react-native';

let imgPath={
  back:require('../../../../res/img/back.jpg'),
  ic_unstar:require('../../../../res/img/ic_unstar.png')
}
export default class ThirdScreen extends Component {
  static navigationOptions = {
    title: 'ThirdScreen',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={[styles.wholeContainer, { height: 102 }]}>
        <Image
          style={[styles.cardBgContain, { alignItems: 'center', paddingBottom: 12 }]}
          source={imgPath.back}>
        </Image>
        <View style={[styles.cardBg, { alignItems: 'center', paddingBottom: 12 }]}>
          <TouchableWithoutFeedback >
            <View>
              <Text style={styles.userInfo_no_eAccount_text}>
                .啦啦啦..
              </Text>
            </View>
          </TouchableWithoutFeedback>
          <Image source={imgPath.ic_unstar} />
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  wholeContainer: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  cardBg: {//蓝色卡片背景
    resizeMode: 'stretch',
    width: 100,
    alignItems: 'stretch',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 0,
    position: 'absolute',
    left: 10,
    right: 0,
    top: 25,
  },
  cardBgContain: {//卡片容器
    resizeMode: 'stretch',
    width: 100,
    alignItems: 'stretch',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginBottom: 0,
  },

})
// AppRegistry.registerComponent('ThirdScreen', () => ThirdScreen);
