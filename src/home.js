/**
 * name: notebook APP
 * author: 吴雨杰
 * description: 首页
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, Image, Dimensions } from 'react-native';
import HTMLView from 'react-native-htmlview';
import { connect } from 'react-redux';


@connect(({ note }) => ({ note }))
export default class Home extends Component {
  state = {
 
  }
  componentDidMount(){
    console.log(this.props);
  }

  render() {
    const { count } = this.props;
    alert(count);
    const { navigate } = this.props.navigation;
    return (  
      <View>
        <Text>首页</Text>
     </View>
    );
  }
}

