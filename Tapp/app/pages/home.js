'use strict'
//屏幕宽度


import React,{Component} from 'react'
import {
    TouchableHighlight,
    StyleSheet,
    Text,
    View,
    ListView,
    Image,
    Dimensions
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
const {width,height}=Dimensions.get('window')

export default class Home extends Component{
    constructor(props){
        super(props)
        let ds=new ListView.DataSource({
                rowHasChanged:(r1,r2)=>r1!==r2
            });
        this.state={
            dataSource:ds.cloneWithRows([
                {
                    "_id":"610000201404173544","thumb":"http://dummyimage.com/1200x600/6c83e4","video":"http://v2.mukewang.com/bed0ff15-dbb7-4a5d-961a-936ba321c0f3/L.mp4?auth_key=1482063462-0-0-afaf204018bee3822d2807bb39e6162a"
                }
                ,
                {
                    "_id":"320000199310161738","thumb":"http://dummyimage.com/1200x600/1b143d","video":"http://v2.mukewang.com/bed0ff15-dbb7-4a5d-961a-936ba321c0f3/L.mp4?auth_key=1482063462-0-0-afaf204018bee3822d2807bb39e6162a"
                }
            ])
        }
    }
    _renderRow(row){
        console.log(row.thumb)
        return (
            <TouchableHighlight>
                <View style={styles.item}>
                    <Text style={styles.headerTitle}>
                        {row._id}
                    </Text>
                    <Image
                        source={{uri:''+row.thumb}}
                        style={styles.thumb}
                    >
                    <Icon 
                        name='ios-play'
                        size={28}
                        style={styles.play}
                    />
                    </Image>
                    <View style={styles.itemFooter}>
                        <View style={styles.handleBox}>
                            <Icon
                                name='ios-heart-outline'
                                size={28}
                                style={styles.up}
                            />
                            <Text style={styles.handleText}>
                                喜欢
                            </Text>
                        </View>
                        <View style={styles.handleBox}>
                            <Icon
                                name='ios-chatboxes-outline'
                                size={28}
                                style={styles.commentIcon}
                            />
                            <Text style={styles.handleText}>
                                评论
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        )
    }
    render(){
        let data=this.state.dataSource;
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>
                        列表页
                    </Text>
                </View>
                <ListView 
                    dataSource={data}
                    renderRow={this._renderRow}
                    enableEmptySections={true}
                />
                    
            </View>
        )
            
        
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  header:{
      paddingTop:25,
      paddingBottom:12, 
  },
  headerTitle:{
      color:'#000',
      fontSize:16,
      textAlign:'center',
      fontWeight:'600'
  },
  item:{
      width:width,
      marginBottom:10,
      backgroundColor:'#fff',

  },
  thumb:{
      width:width,
      height:width*0.5,
      resizeMode:'cover'
  },
  title:{
      padding:10,
      fontSize:18,
      color:'#333'
  },
  itemFooter:{
      flexDirection:'row',
      justifyContent:'space-between',
      backgroundColor:'#eee'
  },
  handleBox:{
      padding:10,
      flexDirection:'row',
      width:width/2-0.5,
      justifyContent:'center',
      backgroundColor:'#fff'
  },
  play:{
      position:'absolute',
      bottom:14,
      right:14,
      width:46,
      height:46,
      paddingTop:9,
      paddingLeft:18,
      backgroundColor:'transparent',
      borderColor:'#fff',
      borderWidth:1,
      borderRadius:23,
      color:'#ed7b66'
  },
  handleText:{
      paddingLeft:12,
      fontSize:18,
      color:'#333',

  },
  up:{
      fontSize:22,
      color:'#333'
  },
  commentIcon:{
      fontSize:22,
      color:'#333'
  }
});