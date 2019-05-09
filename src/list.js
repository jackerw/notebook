/**
 * name: notebook 简易APP
 * author: 吴雨杰
 * description: 日志列表页
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import HeaderCom from './component/header'

export default class List extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.listPage}>
        <Text onPress={()=>navigate('Detail')}>这是列表页</Text>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  listPage: {
    
  },
});
