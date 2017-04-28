'use strict';

import React,{Component} from 'react';
import {Navigator,View,StatusBar,Platform} from 'react-native';
import Wrapper from './component/Wrapper';

export default class Navigation extends Component{
	constructor(props){
		super(props)
	}

	render(){
		return Platform.OS=='ios'?(
				<Navigator
					initialRoute={{name:'list',component:Wrapper}}
					configureScene={
						()=>Navigator.SceneConfigs.FloatFromRight
					}
					renderScene={
						(route,navigator)=>{
							return <route.component navigator={navigator} {...route.params} />
						}
					}/>
			):(
				<View style={{flex:1}}>
					<StatusBar
						backgroundColor="#0398ff"
						barStyle="light-content"
					/>
					<Navigator
						initialRoute={{component:Wrapper}}
						configureScene={
							()=>Navigator.SceneConfigs.FloatFromRight
						}
						renderScene={
							(route,navigator)=>{
								return <route.component navigator={navigator} {...route.params} />
							}
						}
					/>
				</View>
			)
	}
}
