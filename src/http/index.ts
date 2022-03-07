import {instance} from './instance';  // 拦截



export const postHTTP=async(option:any)=>{
    return new Promise((resolve, reject) => {
        instance({
            method:option["method"],
            url:option["url"],
            data:option.option["params"],
            headers:{}
            // headers: {
            //     // 'Content-Type':'application/x-www-form-urlencoded'
            //     // 'Content-Type':'multipart/form-data'
            //     'Content-Type':'application/json;charset=utf-8',
            //     'Access-Control-Allow-Origin':'*'        
            // },
        })
        .then((res) => {
            if (res) {
                resolve(res)
            }
          })
        .catch((err) => {
            reject(err)
        })
    })
}

