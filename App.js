import React from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import Tab from './src/tab';
import Login from './src/login'; 
import Home from './src/home';
import ListScreen from './src/list';




const AppNavigator = createStackNavigator({
  Tab: {
    screen: Tab,
  }
}, {
    headerMode: 'none',
    initialRouteName: 'Tab',
});

export default createAppContainer(AppNavigator);