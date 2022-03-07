import {postHTTP} from './index';  // 拦截


export const httpHandle=async (option:Object)=>{
    return new Promise((resolve)=>{
        postHTTP(option)
        .then((response)=>{
            resolve(response)
        })
    })
}