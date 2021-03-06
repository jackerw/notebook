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
    const { dispatch } = this.props;
    dispatch({
      type: 'note/fetchProList',
      payload:{
        pageSize: '1'
      }
    }).then(res =>{
      console.log(res)
    })
    console.log(this.props);
  }

  render() {
    const { note: { count } } = this.props;
    const { navigate } = this.props.navigation;
    return (  
      <View>
        <Text>首页</Text>
     </View>
    );
  }
}

