/**
 * Tab
 */
import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {StyleSheet, Text, View, Button} from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';

import HomeScreen from './home';
import ListScreen from './list';
import AboutScreen from './about'
import DetailScreen from './detail'; 

const HomeStackNavigator = createStackNavigator({
  Home: {
      screen: HomeScreen,
      navigationOptions: {
          headerTitle:'最近',
          headerStyle: {
            backgroundColor: 'orange',
           
          },
          headerTitleStyle: {
            color: '#fff',
          }
      }
  },
});

const ListStackNavigator = createStackNavigator({
  List:{
      screen: ListScreen,
      navigationOptions: {
        headerTitle:'日志',
        headerStyle: {
          backgroundColor: 'orange',
         
        },
        headerTitleStyle: {
          color: '#fff',
        }
    }
  },
  Detail: {
    screen: DetailScreen,
  }
});

const AboutStackNavigator = createStackNavigator({
  About:{
      screen: AboutScreen,
      navigationOptions: {
        headerTitle:'我的',
        headerStyle: {
          backgroundColor: 'orange',
         
        },
        headerTitleStyle: {
          color: '#fff',
        }
    }
  }
});

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeStackNavigator,
    navigationOptions:{
      tabBarLabel: '最近',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-alarm" size={24} color={tintColor} />
      ),
    },
  },
  List: {
    screen: ListStackNavigator,
    navigationOptions:{
      tabBarLabel: '日志',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-book" size={24} color={tintColor} />
      ),
    },
  },
  About: {
    screen: AboutStackNavigator,
    navigationOptions:{
      tabBarLabel: '我的',
      tabBarIcon: ({tintColor}) => (
        <Icon name="ios-contact" size={24} color={tintColor} />
      ),
    },
  }
},{
  tabBarPosition:'bottom',
  swipeEnabled:'true',
  animationEnabled:'true',
  tabBarOptions:{
    activeTintColor:'orange',
    inactiveTintColor:'#999',
    showLabel:'true',
    showIcon:'true',
    upperCaseLabel:'true',
    pressColor:'#788493',
    pressOpacity:'0.8',
    style: {
        backgroundColor: '#fff',
        paddingBottom: 1,
        paddingTop:1,
        borderTopColor: '#ccc',
    },
    labelStyle: {
        fontSize: 11,
        margin: 1
    },
  }
});


export default TabNavigator;

const styles = StyleSheet.create({

});
