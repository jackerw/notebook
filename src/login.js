/**
 * 登录页
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

export default class Login extends Component {
  static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
  
  render() {
    return (
      <View style={styles.loginPage}>
        <Text>这是登录页</Text>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  loginPage: {
    
  },
});
