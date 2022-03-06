import axios from 'axios';
import qs from 'qs';


//让ajax携带cookie
axios.defaults.withCredentials = true; 



let instance = axios.create();

// 请求拦截
instance.interceptors.request.use(
    (config) => {
        // 1. 这个位置就请求前最后的配置
        // 2. 当然你也可以在这个位置 加入你的后端需要的用户授权信息
        // config.headers['webClient'] = 1 // 后台要的
        // 利用cancelToken 取消当次请求
        // config.cancelToken = new axios.CancelToken(e => {
        //   // 在这里阻止重复请求，上个请求未完成时，相同的请求不会再次执行
        //   requestList.has(config.url)
        //     ? e(`${location.host}${config.url}---重复请求被中断`)
        //     : requestList.add(config.url)
        // })

        return config;
    },
    (error) => {
        return Promise.reject(error)
    }
)
  
// 响应拦截
instance.interceptors.response.use(
(response) => {


    // 请求成功
    if (response.status == 200) {
    return response.data
    }

},
(error) => {

    return false;
}
)



export {
    instance,
};