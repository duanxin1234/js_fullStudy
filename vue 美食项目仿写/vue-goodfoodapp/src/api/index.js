// import 引入 get()方法
import { get } from "./helper"

//调用get （） 变成一个完整的接口
const getSeller = get('api/seller')
const getGoods=get('api/goods')

//调用
// export default getSeller
export {
    getSeller,
    getGoods
} 
//引入模块需要打花括号
