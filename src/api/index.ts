/**
 * 公共 api
 */
 import {httpHandle} from '@/http/http'



 // 登录
 export const loginPOST= async(option:any)=>{
    return await httpHandle({
        url:'login',
        method:'post',
        option:option
    })
 }


