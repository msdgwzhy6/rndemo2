import React, {Component} from 'react';
import {Dimensions, Platform} from 'react-native';
import {StackNavigator, TabNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

// 引入页面容器
import {
  Home,
  Cart,
  My,
  Login
} from '../containers';

// 设置常量
const {height, width} = Dimensions.get('window');

const tabbar = TabNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      tabBarLabel: '主页',
      tabBarIcon: ({tintColor}) => (<Icon name="ios-home" size={28} color={tintColor}/>)
    }
  },
  Cart: {
    screen: Cart,
    navigationOptions: {
      tabBarLabel: '购物车',
      tabBarIcon: ({tintColor}) => (<Icon name="ios-cart" size={28} color={tintColor}/>)
    }
  },
  My: {
    screen: My,
    navigationOptions: {
      tabBarLabel: '我的',
      tabBarIcon: ({tintColor}) => (<Icon name="ios-person" size={28} color={tintColor}/>)
    }
  }
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  animationEnabled: false,
  lazy: true,
  backBehavior: 'initialRoute',
  tabBarOptions: {
    style: {
      height: (Platform.OS === 'ios')
        ? width / 8
        : width / 7 - 5,
      backgroundColor: '#fff',
      borderTopWidth: 0.5,
      borderColor: '#e4e4e4'
    },
    labelStyle: {
      fontSize: width / 35
    },
    iconStyle: {
      height: width / 20
    },
    indicatorStyle: {
      height: 0
    },
    scrollEnabled: false,
    activeBackgroundColor: '#fff',
    activeTintColor: '#ff6600',
    inactiveBackgroundColor: '#fff',
    inactiveTintColor: '#444444',
    showLabel: true,
    showIcon: true
  }
});

const AppNavigator = StackNavigator({
  Main: {
    screen: tabbar,
    navigationOptions: {
      header: null
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  }
});

export default AppNavigator;