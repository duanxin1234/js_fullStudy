//发起接口请求  axios
import axios from "axios" 
// 服务器  后面 拼接 
const baseUrl = "" 

// 2次封装axios
export function get(url,params = {}) {
    return function () {
        return axios.get(baseUrl + url, {
            params
        }).then((res) => {
            //如果成功，等着它执行完
            const { errno, data } = res.data
            // 等于 const errno = res.data.erron const data=res.data.data 
            if (errno == 0) {
                return data
            }
        }).catch((err) => {
            //如果请求失败
            console.log(err);
        })
    }
}

