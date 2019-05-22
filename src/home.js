/**
 * name: notebook APP
 * author: 吴雨杰
 * description: 首页
 */

import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import styles from "./sass/home.scss";
import HTMLView from 'react-native-htmlview';


export default class Home extends Component {
  state = {
    list:[
      {
        key: '小户型厨房，定制橱柜装出大空间小户型厨房，定制橱柜装出大空间定制橱柜装出大空间定制橱柜装出大空间',
        img: 'https://newimg.oppein.cn/fendhttps/updata/todayhot/source/2019050511133856098100361336.png'
      },
      {
        key: '高端简欧定制包买全屋套餐送床和床垫高端简欧定制包买全屋套餐送床和床垫包买全屋套餐送床和床垫',
        img: 'https://newimg.oppein.cn/fendhttps/updata/todayhot/source/2019051009100909603000914430.jpg'
      },
      {
        key: '小户型厨房，定制橱柜装出大空间小户型厨房，定制橱柜装出大空间',
        img: 'https://newimg.oppein.cn/fendhttps/updata/todayhot/source/2019050511133856098100361336.png'
      },
      {
        key: '高端简欧定制包买全屋套餐送床和床垫高端简欧定制包买全屋套餐送床和床垫',
        img: 'https://newimg.oppein.cn/fendhttps/updata/todayhot/source/2019051009100909603000914430.jpg'
      },        
    ],
    articleList: [],
  }
  componentDidMount(){
    /* fetch('http://jackw.applinzi.com/article/getFirst?pageNum=1&pageSize=10')
    .then(response=>response.json())
    .then(data=>{
      this.setState({
        articleList: data.data
      })
    }) */
  }
  listItem = ({index, item}) => {
    console.log('12313');
    return(
      <View key={index} style={styles.itemViewStyle}>
        <Text style={styles.num}>{index + 1}</Text>
        <Text style={styles.title}>
          {item.key}
        </Text>
        <Image style={styles.viewImage} source={{uri: item.img}}/>
      </View>
    )
  }
  render() {
    const { navigate } = this.props.navigation;
    return (  
      <View style={styles.homePage}>
        <FlatList
          data={this.state.list}
          renderItem={this.listItem}
        />
     </View>
    );
  }
}

