/**
 * 公共头部
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class HeaderCom extends Component {
  render() {
    return (
      <View>
        <Text style={styles.header}>{this.props.title}</Text>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 10,
    alignItems: 'center',
    color: '#fff',
    backgroundColor: '#1890ff',
    textAlign: 'center'
  },
});
