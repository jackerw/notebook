/**
 * name: notebook APP
 * author: 吴雨杰
 * description: 日志详情页
 */

import React, {Component} from 'react';
import { Platform, StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import styles from "./sass/detail.scss";
export default class Detail extends Component {

  constructor(props){
    super(props)
    this.state = {
     
    }
  }

  static navigationOptions =  ({ navigation }) =>({
    title: navigation.state.params.title,
    headerStyle: {
      backgroundColor: 'orange',
    },
    headerTintColor: '#fff',
  });

  componentDidMount(){
    
  }

  render() {
    const { navigation } = this.props;
    return (
      <ScrollView style={styles.detailPage}>
          <View style={styles.detailHeader}>
            <Text style={styles.detailTitle}>{navigation.state.params.title}</Text>
            <View style={styles.tips}>
              <View style={styles.tab}>
                 <Text>开心日记</Text>
              </View>
              <Text style={styles.timer}>
                 2019-05-27
              </Text>
            </View>
          </View>
          <View style={styles.detailCon}>
              <Text>这是详情的标题，可以看下</Text>
              <Text>这是详情的标题，可以看下</Text>
              <Text>这是详情的标题，可以看下</Text>
              <Text>这是详情的标题，可以看下</Text>
              <Text>这是详情的标题，可以看下</Text>
              <Text>这是详情的标题，可以看下</Text>
              <Text>这是详情的标题，可以看下</Text>
              <Text>这是详情的标题，可以看下</Text>
              <Text>这是详情的标题，可以看下</Text>
              <Text>这是详情的标题，可以看下</Text>
              <Text>这是详情的标题，可以看下</Text>
              <Text>这是详情的标题，可以看下</Text> 
              <Text>这是详情的标题，可以看下</Text>
              <Text>这是详情的标题，可以看下</Text>
              <Text>这是详情的标题，可以看下</Text>
              <Text>这是详情的标题，可以看下</Text>
              <Text>这是详情的标题，可以看下</Text>
              <Text>这是详情的标题，可以看下</Text>
              <Text>这是详情的标题，可以看下</Text>
              <Text>这是详情的标题，可以看下</Text>
              <Text>这是详情的标题，可以看下</Text>
              <Text>这是详情的标题，可以看下</Text>
              <Text>这是详情的标题，可以看下</Text>
              <Text>这是详情的标题，可以看下</Text>
              <Text>这是详情的标题，可以看下</Text>
              <Text>这是详情的标题，可以看下</Text>
              <Text>这是详情的标题，可以看下</Text>
              <Text>这是详情的标题，可以看下</Text>
              <Text>这是详情的标题，可以看下</Text>
              <Text>这是详情的标题，可以看下</Text>
              <Text>这是详情的标题，可以看下</Text>
              <Text>这是详情的标题，可以看下</Text>
              <Text>这是详情的标题，可以看下</Text>
              <Text>这是详情的标题，可以看下</Text>
              <Text>这是详情的标题，可以看下</Text>
          </View>
      </ScrollView>
    );
  }
}
