'use strict'
import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native'
import Button from '../components/Button'
import Swiper from 'react-native-swiper'
const {width,height} = Dimensions.get('window')
export default class Slider extends Component{
    constructor(props){
        super(props);
        this.state={
            loop:false,
            banners:[
                require('../images/s3.jpg'),
                require('../images/s2.jpg'),
                require('../images/s3.jpg'),                

            ]
        }
    }
    _enter() {
        this.props.enterSlide()
    }
    render(){
        return (
            <Swiper
                style={styles.container}
                dot={<View style={styles.dot} />}
                activeDot={<View style={styles.activeDot} />}
                paginationStyle={styles.pagination}
                loop={this.state.loop}>
                <View style={styles.slide}>
                <Image style={styles.image} source={this.state.banners[0]} />
                <Button
                    style={styles.btn}
                    onPress={this._enter.bind(this)}><Text>马上体验</Text></Button>
                </View>
                <View style={styles.slide}>
                <Image style={styles.image} source={this.state.banners[1]} />
                </View>
                <View style={styles.slide}>
                <Image style={styles.image} source={this.state.banners[2]} />
                <Button
                    style={styles.btn}
                    onPress={this._enter.bind(this)}><Text style={{textAlign:'center'}}>马上体验</Text></Button>
                </View>
            </Swiper>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  slide: {
    flex: 1,
    width: width
  },

  image: {
    flex: 1,
    width: width
  },

  dot: {
    width: 14,
    height: 14,
    backgroundColor: 'transparent',
    borderColor: '#ff6600',
    borderRadius: 7,
    borderWidth: 1,
    marginLeft: 12,
    marginRight: 12
  },

  activeDot: {
    width: 14,
    height: 14,
    borderWidth: 1,
    marginLeft: 12,
    marginRight: 12,
    borderRadius: 7,
    borderColor: '#ee735c',
    backgroundColor: '#ee735c',
  },

  pagination: {
    bottom: 30
  },

  btn: {
    position: 'absolute',
    width: width - 20,
    left: 10,
    bottom: 60,
    height: 50,
    padding: 10,
    backgroundColor: '#ee735c',
    borderColor: '#ee735c',
    borderWidth: 1,
    fontSize: 18,
    borderRadius: 3,
    color: '#fff'
  }
})