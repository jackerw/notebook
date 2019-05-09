/**
 * 个人APP
 * 列表页
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import HeaderCom from './component/header'

export default class List extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
          header: () => <HeaderCom title='列表页'/>,
      }
  }
  render() {
    return (
      <View style={styles.listPage}>
        <Text>这是列表页</Text>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  listPage: {
    
  },
});
