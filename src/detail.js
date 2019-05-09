/**
 * name: notebook APP
 * author: 吴雨杰
 * description: 日志详情页
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

export default class Detail extends Component {

  static navigationOptions = {
    title: '详情页',
    headerStyle: {
      backgroundColor: 'orange',
    },
    headerTintColor: '#fff',
  };

  render() {
    return (
      <View style={styles.detailPage}>
        <Text>这是详情页</Text>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  detailPage: {
    
  },
});
