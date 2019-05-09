import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import Tab from './src/tab';
import Login from './src/login'; 

const AppNavigator = createStackNavigator({
  Tab: {
    screen: Tab,
  },
  Login: {
    screen: Login
  }
}, {
    headerMode: 'none',
    initialRouteName: 'Tab',
});

export default createAppContainer(AppNavigator);