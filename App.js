import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import Tab from './src/tab';
import Login from './src/login'; 
import Home from './src/home';




const AppNavigator = createStackNavigator({
  Home: {
    screen: Tab,
  },
  Login: {
    screen: Login
  }
}, {
    initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);