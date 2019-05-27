/**
 * name: notebook APP
 * author: 吴雨杰
 * description: 首页
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, Image, Dimensions } from 'react-native';
import HTMLView from 'react-native-htmlview';

const { width } = Dimensions.get('window');
export default class Home extends Component {
  state = {
 
  }
  componentDidMount(){
    
  }

  render() {
    const { navigate } = this.props.navigation;
    return (  
      <View>
        <Text>首页</Text>
     </View>
    );
  }
}

