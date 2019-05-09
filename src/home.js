/**
 * name: notebook APP
 * author: 吴雨杰
 * description: 首页
 */

import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Home extends Component {
  
  render() {
    const { navigate } = this.props.navigation;
    return (  
      <View style={styles.HomePage}>
        <Text onPress={() => navigate('Login')}>这是首页1</Text>
     </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingVertical: 5,
    alignItems: 'center',
    color: '#fff',
    backgroundColor: 'red',
    textAlign: 'center'
  },
});
