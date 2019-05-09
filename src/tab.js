/**
 * Tab
 */
import React, { Component } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {StyleSheet, Text, View, Button} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';

import HomeScreen from './home';
import ListScreen from './list';
import AboutScreen from './about'

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions:{
      tabBarLabel: '首页',
    },
  },
  List: {
    screen: ListScreen,
    navigationOptions:{
      tabBarLabel: '列表页',
    },
  },
  About: {
    screen: AboutScreen,
    navigationOptions:{
      tabBarLabel: '关于我',
    },
  }
},{
  tabBarOptions: {
    activeTintColor: '#494949',
    inactiveTintColor: '#999999',
    labelStyle: {
      fontSize: 12,
      marginBottom: 5,
      alignItems: 'center',
      justifyContent: 'center',
    },
    style: {
      borderTopWidth: 1,
      borderTopColor: '#c3c3c3',
      height: 50,
      backgroundColor:'#fff'
    },
  }
});


export default TabNavigator;

const styles = StyleSheet.create({

});
