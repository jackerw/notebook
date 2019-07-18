import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { Provider } from 'react-redux';
import { create } from 'dva-core';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import Tab from './src/tab';
import Login from './src/login'; 
import noteModel from './src/models/note'


const models = [noteModel];
const app = create(); // 创建dva实例，可传递配置参数。https://dvajs.com/api/#app-dva-opts
models.forEach((c) => { // 装载models对象
  app.model(c);
});
app.start(); // 实例初始化

const store = app._store; // 获取redux的store对象供react-redux使用

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
const Nav = createAppContainer(AppNavigator);
export default class Container extends Component {
  render() {
    return (
      <Provider store={store}>
        <Nav/>
      </Provider>
    );
  }
}