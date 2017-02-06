/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */



import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image,
    Dimensions,
    AlertIOS,
    TextInput,
    AsyncStorage
} from 'react-native'


export default class Login extends Component{

  

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.signupBox}>
          <Text style={styles.title}>快速登录</Text>
          <TextInput
            placeholder='输入手机号'
            autoCaptialize={'none'}
            autoCorrect={false}
            keyboardType={'number-pad'}
            style={styles.inputField}
            onChangeText={(text) => {
              this.setState({
                phoneNumber: text
              })
            }}
          />

        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f9f9f9'
  },

  signupBox: {
    marginTop: 30
  },

  title: {
    marginBottom: 20,
    color: '#333',
    fontSize: 20,
    textAlign: 'center'
  },

  inputField: {
    flex: 1,
    height: 40,
    padding: 5,
    color: '#666',
    fontSize: 16,
    backgroundColor: '#fff',
    borderRadius: 4
  },

  verifyCodeBox: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  countBtn: {
    width: 110,
    height: 40,
    padding: 10,
    marginLeft: 8,
    backgroundColor: '#ee735c',
    borderColor: '#ee735c',
    color: '#fff',
    textAlign: 'left',
    fontWeight: '600',
    fontSize: 15,
    borderRadius: 2
  },

  btn: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'transparent',
    borderColor: '#ee735c',
    borderWidth: 1,
    borderRadius: 4,
    color: '#ee735c'
  }
})

