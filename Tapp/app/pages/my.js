'use strict';

import React, { Component } from 'react'

import {
  Text,
  View,
  BackAndroid,
  ScrollView,
  StyleSheet,
  AlertIOS,
  RefreshControl,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  TextInput,
  Platform,
  Dimensions,
  ActivityIndicator,
  Animated
} from 'react-native'
let {
    width,
    height
} = Dimensions.get('window')
import LocalImg from '../images/avatar.jpg'
import NavBar from '../components/NavBar'
import Icon from 'react-native-vector-icons/Ionicons'
import px2dp from '../util'
import UserInfo from '../src/userInfo'
import Item from '../components/Item'
export default class My extends Component{
    constructor(props){
        super(props)
        this.state = {
            isRefreshing: false
        }
        this.config = [
            //{icon:"ios-pin", name:"收货地址", onPress:this.goPage.bind(this, "address")},
            {icon:"ios-heart", name:"我的收藏", color:"#fc7b53"},
            {icon:"md-images", name:"美食相册"},
            {icon:"logo-usd", name:"推荐有奖", subName:"5元现金", color:"#fc7b53"},
            {icon:"ios-cart", name:"积分商城", subName:"0元好物在这里", color:"#94d94a"},
            {icon:"ios-medal", name:"饿了吗会员卡", subName:"未开通", color:"#ffc636"},
            {icon:"md-flower", name:"服务中心"},
            {icon:"ios-outlet", name:"欢迎评分"},
            {icon:"md-contacts", name:"加盟合作"},
        ]
        this.perInfo={
            name:'测试名字',
            tel:'13213387166'
        }
    }
    leftPress(){

    }
    rightPress(){
        this.props.navigator.push({
            component: Setting,
            args: {}
        })
    }
    _onRefresh(){
        this.setState({isRefreshing: true});
        setTimeout(() => {
        this.setState({isRefreshing: false});
        }, 1500)
    }
    goProfile(){
        this.props.navigator.push({
            component:UserInfo,
            args:this.perInfo
        })
    }
    _renderListItem(){
        return this.config.map((item, i) => {
        if(i%3==0){
            item.first = true
        }
        return (<Item key={i} {...item}/>)
        })
    }
    render(){
        return (
            <View style={{flex: 1, backgroundColor: "#fff"}}>
                <NavBar
                title="我的"
                    leftIcon="ios-notifications-outline"
                    leftPress={this.leftPress.bind(this)}
                    rightIcon="ios-settings-outline"
                    rightPress={this.rightPress.bind(this)} 
                />
                <ScrollView
                    style={styles.scrollView}
                    refreshControl={
                        <RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={this._onRefresh.bind(this)}
                        tintColor="#fff"
                        colors={['#ddd', '#0398ff']}
                        progressBackgroundColor="#ffffff"/>
                    }
                    >
                    <View style={{minHeight: height - 64 - px2dp(46), paddingBottom: 100, backgroundColor: "#f3f3f3"}}>
                        <TouchableOpacity onPress={this.goProfile.bind(this)}>
                            <View style={styles.userHead}>
                                <View style={{flex: 1,flexDirection: "row"}}>
                                <Image source={LocalImg} style={{width: px2dp(60), height: px2dp(60), borderRadius: px2dp(30)}}/>
                                <View style={{flex: 1, marginLeft: 10, paddingVertical: 5}}>
                                    <Text style={{color: "#fff", fontSize: px2dp(18)}}>{this.perInfo.name}</Text>
                                    <View style={{marginTop: px2dp(10), flexDirection: "row"}}>
                                    <Icon name="ios-phone-portrait-outline" size={px2dp(14)} color="#fff" />
                                    <Text style={{color: "#fff", fontSize: 13, paddingLeft: 5}}>{this.perInfo.tel}</Text>
                                    </View>
                                </View>
                                </View>
                                <Icon name="ios-arrow-forward-outline" size={px2dp(22)} color="#fff" />
                            </View>
                        </TouchableOpacity>
                        <View style={styles.numbers}>
                            <TouchableOpacity style={styles.flexBox}>
                                <View style={styles.numItem}>
                                    <Text style={{color: "#f90", fontSize: 18, textAlign: "center", fontWeight: "bold"}}>{"999999.0元"}</Text>
                                    <Text style={{color: "#333", fontSize: 12, textAlign: "center", paddingTop: 5}}>{"余额"}</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.flexBox}>
                            <View style={[styles.numItem,{borderLeftWidth: 1, borderLeftColor: "#f5f5f5",borderRightWidth: 1, borderRightColor: "#f5f5f5"}]}>
                                <Text style={{color: "#ff5f3e", fontSize: 18, textAlign: "center", fontWeight: "bold"}}>{"1940个"}</Text>
                                <Text style={{color: "#333", fontSize: 12, textAlign: "center", paddingTop: 5}}>{"优惠"}</Text>
                            </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.flexBox}>
                            <View style={styles.numItem}>
                                <Text style={{color: "#6ac20b", fontSize: 18, textAlign: "center", fontWeight: "bold"}}>{"999999分"}</Text>
                                <Text style={{color: "#333", fontSize: 12, textAlign: "center", paddingTop: 5}}>{"积分"}</Text>
                            </View>
                            </TouchableOpacity>
                            </View>
                            <View>
                            {this._renderListItem()}
                         </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}
const styles = StyleSheet.create({
  scrollView: {
    marginBottom: px2dp(46),
    backgroundColor: "#0398ff"
  },
  userHead: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: "#0398ff"
  },
  numbers: {
    flexDirection: "row",
    backgroundColor: "#fff",
    height: 74
  },
  numItem: {
    flex: 1,
    height: 74,
    justifyContent: "center",
    alignItems: "center"
  },
  flexBox:{
    flex:1
  }
})