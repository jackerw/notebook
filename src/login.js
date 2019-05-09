/**
 * 登录页
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button} from 'react-native';

export default class Login extends Component {
  componentWillMount(){
    this.test='213123';
  }

  render() {
    return (
      <View style={styles.loginPage}>
        {console.log(this.test)}
        <Text>这是登录qweqwe页123</Text>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  loginPage: {
    
  },
});
