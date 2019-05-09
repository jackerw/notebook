/**
 * 个人APP
 * 首页
 */

import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View, Button } from 'react-native';
import HeaderCom from './component/header'

export default class Home extends Component {
  static navigationOptions = {
    headerTitle: <HeaderCom title='首页'/>,
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#fff"
      />
    ),
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.HomePage}>
        <Text>这是首页</Text>
        <Icon name="closecircleo" size={30} color="red" />
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
