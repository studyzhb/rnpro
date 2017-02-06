'use strict';

import React, { Component } from 'react'
import { Navigator, View } from 'react-native'
import TabView from './TabView'
import Slider from '../src/slider'
import Login from '../src/login'
export default class Wrapper extends Component{
    constructor(props){
      super(props);
      this.state={
          entered:false,
          logined:false
      }
    }
    _afterLogin(){
        
    }
    _enterSlide(){
        this.setState({
            entered:true
        })
    }
    render(){
        if (!this.state.entered) {
        return <Slider enterSlide={this._enterSlide.bind(this)} />
        }

        // if (!this.state.logined) {
        // return <Login afterLogin={this._afterLogin} />
        // }
        return(
          <View style={{flex: 1, justifyContent: 'flex-end'}}>
              <TabView navigator={this.props.navigator}/>
          </View>
        )
    }
}