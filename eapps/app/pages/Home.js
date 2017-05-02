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

// import LocalImg from '../images';
import px2dp from '../util/px2dp';
import Icon from 'react-native-vector-icons/Ionicons';
//import Swiper from 'react-native-swiper';
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
        
    }
    _renderHeader(){

    }
    render(){
        console.log(this.state.searchView);
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
    scrollView:{
        marginBottom:px2dp(46)
    }
})