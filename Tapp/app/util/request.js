'use strict'
import queryString from 'query-string'
import _ from 'lodash'
import config from './config'

const request={}

request.get=(url,params)=>{
    if(params){
        url+='?'+queryString.stringify(params);
    }
    return fetch(url)
        .then((response)=>response.json())
        .catch((err)=>{
            console.log(err)
        })
    }

request.post=(url,body)=>{
    let options=_.extend(config.header,{
        body:JSON.stringify(body)
    });

    return fetch(url,options)
        .then((response)=>response.json())
        .catch((err)=>{
            console.log(err)
        })
}

export default request

