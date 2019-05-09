/**
 * 关于我
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';
import HeaderCom from './component/header'

export default class About extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
          header: () => null,
      }
  }
  render() {
    return (
      <View style={styles.aboutPage}>
        <Text>关于我</Text>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  aboutPage: {
    
  },
});
