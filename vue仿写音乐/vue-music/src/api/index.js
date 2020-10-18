import Vue from 'vue'
import axios from 'axios'

const vue = new Vue()
//axios 配置 网络请求的最大时长
axios.defaults.timeout = 10000
axios.defaults.baseUrl = 'http://localhost:3000'

//放回状态判断 （响应拦截）interceptors.response
axios.interceptors.response.use((res) => {
    if (res.data.code !== 200) {
        vue.$toast('网络异常')
        return Promise.reject(res)
    }
    return res
    
},(error) => {
        vue.$toast('服务器异常')
     return Promise.reject(error)   
})

//2次封装 
export function get(url,params = {}) {
    return  new Promise( function () {
        return axios.get(baseUrl + url, {
            params
        }).then((res) => {
            //如果成功，等着它执行完
            const { errno, data } = res.data
            // 等于 const errno = res.data.erron const data=res.data.data  结构
            if (errno == 0) {
                return data
            }
        }).catch((err) => {
            //如果请求失败
            console.log(err);
        })
    })
}






