'use strict';
import React,{Component} from 'react';
import {
    Text,
    View,
    BackAndroid,
    ScrollView,
    StyleSheet,
    AlertIOS,
    RefreshControl,
    TouchableOpacity,
    TouchableNativeFeedback,
    TouchableHighlight,
    Image,
    TextInput,
    Platform,
    TouchableWithoutFeedback,
    Dimensions,
    ActivityIndicator,
    Animated
} from 'react-native';

import LocalImg from '../util/Images';
import px2dp from '../util/px2dp';
import Icon from 'react-native-vector-icons/Ionicons';
import Swiper from 'react-native-swiper';
//import SplashScreen from 'react-native-splash-screen';

import SearchView from '../component/SearchView';
//import LbsModal from '../component/LbsModal';
import TabView from '../component/TabView';
//import Bz from '../component/Bz';
//import DetailPage from './DetailPage';
//import data from '../data';

const isIOS=Platform.OS==='ios';
const {width,height} = Dimensions.get('window');
const headH=px2dp(isIOS?140:120);
const InputHeight=px2dp(28);


export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            location:'郑州',
            scrollY:new Animated.Value(0),
            searchView:new Animated.Value(0),
            
            modalVisible:false,
            searchBtnShow:true,
            listLoading:false,
            isRefreshing:false
        };
        this.SEARCH_BOX_Y=px2dp(isIOS?48:43);
        this.SEARCH_FIX_Y=headH-px2dp(isIOS?64:44);
        this.SEARCH_KEY_P=px2dp(58);
        this.SEARCH_DIFF_Y=this.SEARCH_FIX_Y-this.SEARCH_BOX_Y;
        this.SEARCH_FIX_DIFF_Y=headH-this.SEARCH_FIX_Y-headH;
    }
    componentDidMount(){
        
    }
    _onRefresh(){
        this.setState({isRefreshing:true});
        setTimeout(()=>{
            this.setState({isRefreshing:false});
        },2000);
    }
    openLbs(){
        this.setState({modalVisible: true})
    }
    _renderHeader(){
        let searchY=this.state.scrollY.interpolate({
            inputRange:[0,this.SEARCH_BOX_Y,this.SEARCH_FIX_Y,this.SEARCH_FIX_Y],
            outputRange:[0,0,this.SEARCH_DIFF_Y,this.SEARCH_DIFF_Y]
        })
        let lbsOpacity=this.state.scrollY.interpolate({
            inputRange:[0,this.SEARCH_BOX_Y],
            outputRange:[1,0]
        })
        let keyOpacity=this.state.scrollY.interpolate({
            inputRange:[0,this.SEARCH_BOX_Y,this.SEARCH_KEY_P],
            outputRange:[1,1,0]
        })
        
        return (
            <View style={styles.header}>
                <Animated.View style={[styles.lbsWeather,{opacity:lbsOpacity}]} >
                    <TouchableWithoutFeedback onPress={this.openLbs.bind(this)}>
                        <View style={styles.lbs} >
                            <Icon name='ios-pin' size={px2dp(18)} color="#fff" />
                            <Text style={{fontSize:px2dp(18),fontWeight:'bold',color:'#fff',paddingHorizontal:5}}>{this.state.location}</Text>
                            <Icon name='md-arrow-dropdown' size={px2dp(16)} color='#fff'></Icon>
                        </View>
                    </TouchableWithoutFeedback>
                    <View style={styles.weather}>
                        <View style={{marginRight: 5}}> 
                            <Text style={{color: "#fff", fontSize: px2dp(11), textAlign: "center"}}>{"3°"}</Text>
                            <Text style={{color: "#fff", fontSize: px2dp(11)}}>{"阵雨"}</Text>
                        </View>
                        <Icon name="ios-flash-outline" size={px2dp(25)} color="#fff" />
                    </View>
                </Animated.View>
                <Animated.View style={{
                    marginTop: px2dp(15),
                    transform: [{
                        translateY: searchY
                    }]
                    }}>
                    <TouchableWithoutFeedback onPress={()=>{}}>
                        <View style={[styles.searchBtn, {backgroundColor: "#fff"}]}>
                        <Icon name="ios-search-outline" size={20} color="#666" />
                        <Text style={{fontSize: 13, color:"#666", marginLeft: 5}}>{"输入商家，商品名称"}</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    </Animated.View>
                    <Animated.View style={[styles.keywords, {opacity: keyOpacity}]}>
                    {
                        ['肯德基','烤肉','吉野家','粥','必胜客','一品生煎','星巴克'].map((item, i) => {
                        return (
                            <TouchableWithoutFeedback key={i}>
                            <View style={{marginRight: 12}}>
                                <Text style={{fontSize: px2dp(12), color:"#fff"}}>{item}</Text>
                            </View>
                            </TouchableWithoutFeedback>
                        )
                        })
                    }
                    </Animated.View>
            </View>
        )
    }
    _renderTypes(){
        const w=width/4,h=w*.6+20;
        let renderSwipeView=(types,n)=>{
            return (
                <View style={styles.typesView}>
                    {
                        types.map((item,i)=>{
                            
                            let imgSrc='../images/h_'+(i+n)+'.png';
                            {/*var dtimg=require(imgSrc);*/}
                            {/*console.log(dtimg)*/}
                            console.log(typeof imgSrc)
                            
                            {/*console.log(LocalImg)*/}

                            let render=(
                                <View style={[{width:w,height:h},styles.typesItem]}>
                                    <Image source={require('../images/h_1.png')} style={{width:w*.5,height:w*.5}}></Image>
                                    <Text style={{fontSize:px2dp(12),color:'#666'}}>{item}</Text>
                                </View>
                            )
                            return (
                                isIOS?(
                                    <TouchableHighlight style={{width:w,height:h}} key={i} onPress={()=>{}}>{render}</TouchableHighlight>
                                ):(
                                    <TouchableNativeFeedback style={{width:w,height:h}} key={i} onPress={()=>{}}>{render}</TouchableNativeFeedback>
                                )
                            )
                        })
                    }
                </View>
            )
        }

        return (
            <Swiper
                height={h*2.4}
                paginationStyle={{bottom:10}}
                dotStyle={{backgroundColor:'rgba(0,0,0,.2)',width:6,height:6}}
                activeDotStyle={{backgroundColor:'rgba(0,0,0,.5)',width:6,height:6}}
            >
                {renderSwipeView(['美食','甜品饮品','商店超市','预定早餐','果蔬生鲜','新店特惠','准时达','高铁订餐'],0)}
                {renderSwipeView(['土豪推荐','鲜花蛋糕','汉堡炸鸡','日韩料理','麻辣烫','披萨意面','川湘菜','包子粥店'],8)}
            </Swiper>
        )

    }

    _renderHot(){
        return ['热卖套餐','霸王餐','年货到新家','5折优惠餐'].map(()=>{

        })
    }

    _renderLtime(){

    }

    render(){
        
        return (
            <View style={{flex:1,backgroundColor:'#f3f3f3'}}>
                <ScrollView
                    style={styles.ScrollView}
                    onScroll={
                        Animated.event([
                            {nativeEvent:{contentOffset:{y:this.state.scrollY}}}
                        ])
                    }
                    scrollEventThrottle={16}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={this._onRefresh.bind(this)}
                            colors={['#ddd','#0398ff']}
                            progressBackgroundColor='#fff'
                        />
                    }
                >
                {this._renderHeader()}
                <View style={{backgroundColor:'#fff',paddingBottom:10}}>
                    {this._renderTypes()}
                    <TouchableOpacity>
                        <View style={{height:px2dp(90),paddingHorizontal:10}}>  
                            <Image source={require('../images/ad1.png')} style={{height:px2dp(90),width:width-20,resizeMode:'cover'}} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.recom}>
                    {this._renderHot()}
                </View>
                <View style={styles.card}>
                    {this._renderLtime()}
                </View>
                <SearchView show={this.state.searchView} scrollY={this.state.scrollY} />
                <View >
                    <Text>{'测试首页'}</Text>
                </View>
                </ScrollView>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    header:{
        backgroundColor:'#0398ff',
        height:headH,
        paddingTop:px2dp(isIOS?30:10),
        paddingHorizontal:16
    },
    scrollView:{
        marginBottom:px2dp(46)
    },
    weather:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    lbs:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    lbsWeather:{
        height:InputHeight,
        overflow:'hidden',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    searchBtn:{
        borderRadius:InputHeight,
        height:InputHeight,
        flexDirection:'row',
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center'
    },
    keywords:{
        marginTop:px2dp(14),
        flexDirection:'row'
    },
    typesItem:{
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center'
    },
    typesView:{
        paddingBottom:10,
        flex:1,
        backgroundColor:'#fff',
        flexDirection:'row',
        flexWrap:'wrap'
    }
})