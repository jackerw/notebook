/**
 * name: notebook APP
 * author: 吴雨杰
 * description: 列表页
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native';
import styles from "./sass/list.scss";
import { connect } from 'react-redux';
import HTMLView from 'react-native-htmlview';

const { width } = Dimensions.get('window');
@connect(({ note }) => ({ note }))
export default class List extends Component {
  state = {
    articleList: [],
  }
  componentDidMount(){
    const { dispatch } = this.props;
    dispatch({
      type: 'note/fetchProList',
    }).then(res =>{
      this.setState({
        articleList: res.data
      })
    })
  }
  listItem = ({index, item}) => {
    const { navigation } = this.props;
    return(
      <TouchableOpacity onPress={()=>navigation.navigate('Detail',{
        title: item.key
      })}>
        <View key={index} style={styles.itemViewStyle}>
          <Text style={styles.num}>{index + 1}</Text>
          <Text style={styles.title}>
            {item.key}
          </Text>
          <Image style={{flex: 3}} source={{uri: item.img}}/>
        </View>
      </TouchableOpacity>
    )
  }
  render() {
    const { navigate } = this.props.navigation;
    return (  
      <View style={styles.homePage}>
        <FlatList
          data={this.state.articleList}
          renderItem={this.listItem}
        />
     </View>
    );
  }
}

