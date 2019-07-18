/**
 * 关于我
 */

import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {Platform, StyleSheet, Text, View, FlatList, Button, TouchableOpacity, Image} from 'react-native';
import styles from "./sass/about.scss";

export default class About extends Component {
  state = {
    aboutMenu:[
      {
        key: '1',
        title:'个人信息',
        url: 'Login',
      },
      {
        key: '2',
        title: '账号安全',
        url: '2',
      },
      {
        key: '3',
        title: '我的收藏',
        url: '3',
      }
    ]
  }
  jumpNav = (target)=> {
    const { navigation } = this.props;
    navigation.navigate(target)
  }
  listItem = ({index, item}) =>{
    return(
      <TouchableOpacity 
        onPress={this.jumpNav.bind(this,item.url)}
        activeOpacity={0.8}>
        <View key={item.key} style={styles.itemList}>
          <Text>
            {item.title}
          </Text>
          <Icon name="ios-arrow-forward" size={24} color={'#999'} />
        </View>
      </TouchableOpacity>
    )
  }
  render() {
    return (
      <View style={styles.aboutPage}>
        <View>
          <Image style={{width:200,height:20}} source={{uri: 'https://newimg.oppein.cn/fendhttps/updata/todayhot/source/2019032015251497088300149351.jpg'}}/>
        </View>
         <FlatList
          data={this.state.aboutMenu}
          renderItem={this.listItem}
        />
        <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
          <Button
            title="退出登陆"
            color="#3194d0"
            accessibilityLabel="Learn more about this purple button"
          />
        </View>
     </View>
    );
  }
}
