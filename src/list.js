/**
 * name: notebook APP
 * author: 吴雨杰
 * description: 列表页
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList, Image, Dimensions, TouchableOpacity } from 'react-native';
import styles from "./sass/list.scss";
import HTMLView from 'react-native-htmlview';

const { width } = Dimensions.get('window');
export default class Home extends Component {
  state = {
    articleList: [],
  }
  componentDidMount(){
     fetch('https://www.easy-mock.com/mock/5ce79794db58af63d27a449b/example/pageList')
    .then(response=>response.json())
    .then(data=>{
      this.setState({
        articleList: data.data
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

