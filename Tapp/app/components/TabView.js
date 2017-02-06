/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Dimensions,
  View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'
import TabNavigator from 'react-native-tab-navigator'
import HomePage from '../pages/home'
import Discover from '../pages/discovery'
import Order from '../pages/order'
import My from '../pages/my'
let {width, height} = Dimensions.get('window')
import px2dp from'../util'
export default class Tapp extends Component {
  constructor(props){
    super(props);
    this.state = {
        currentTab: 'HomePage',
        hideTabBar: false
    }
    this.tabNames = [
      ["首页", "logo-google", "HomePage", <HomePage {...this.props}/>],
      ["发现", "ios-compass-outline", "Discover", <Discover {...this.props}/>],
      ["订单", "ios-list-box-outline", "Order", <Order {...this.props}/>],
      ["我的", "ios-contact-outline", "My", <My {...this.props}/>]
    ]
    Tapp.hideTabBar = Tapp.hideTabBar.bind(this)
    Tapp.showTabBar = Tapp.showTabBar.bind(this)
  }
  static showTabBar(time){
    this.setState({hideTabBar: false})
  }
  static hideTabBar(time){
    this.setState({hideTabBar: true})
  }
  render() {
    return (
      
      <TabNavigator
        hidesTabTouch={true}
        tabBarStyle={[styles.tabbar,
          (this.state.hideTabBar?styles.hide:{})
        ]}
        sceneStyle={{ paddingBottom: styles.tabbar.height }}>
          {
            this.tabNames.map((item, i) => {
              return (
                <TabNavigator.Item
                    key={i}
                    tabStyle={styles.tabStyle}
                    title={item[0]}
                    selected={this.state.currentTab === item[2]}
                    selectedTitleStyle={{color: "#3496f0"}}
                    renderIcon={() => <Icon name={item[1]} size={px2dp(22)} color="#666" />}
                    renderSelectedIcon={() => <Icon name={item[1].replace(/\-outline$/, "")} size={px2dp(22)} color="#3496f0" />}
                    onPress={() => this.setState({ currentTab: item[2] })}>
                    {item[3]}
                </TabNavigator.Item>
              )
            })
          }
      </TabNavigator>
    );
  }
}

const styles = StyleSheet.create({
  tabbar: {
      height: px2dp(46),
      alignItems:'center',
      justifyContent: 'center',
      backgroundColor: '#fff'
    },
    hide: {
      transform: [
        {translateX:width}
      ]
    },
    tabStyle:{
      padding: px2dp(4)
    }
});


