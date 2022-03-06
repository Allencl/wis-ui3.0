import axios from 'axios';
import {instance} from './instance.js';  // 拦截


export default {
    get(url:string,params={}) {
        return new Promise((resolve, reject) => {
            instance
                .get(url, {params: params})
                .then((res) => {
                if (res) {
                    resolve(res)
                }
                })
                .catch((err) => {
                    reject(err)
                })
            })
    },
    post(url:string, params = {},ajaxConfig={}) {
        return new Promise((resolve, reject) => {
        instance
            .post(
            url,
            params,
            // option['formData'] ? params : qs.stringify(params),
            // option['blob'] ? { responseType: 'blob' } : null
            )
            .then((res) => {
            //序列化字符串
            // _loading.close();
            if (res) {
                resolve(res)
            }
            })
            .catch((err) => {
            reject(err)
            })
        })
    },
}