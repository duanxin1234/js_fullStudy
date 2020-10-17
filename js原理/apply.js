//  立即执行  参数 返回数组
// 确定fn不是函数  
Function.prototype.myapply=function (obj) {
    if (typeof this != "function") {
        throw new TypeError('error')
    }
    const args = arguments.slice(1)
    const fn=Symbol('fn')
    obj = obj || window
    obj[fn]=this
    const reslut = obj[fn](...args)
    delete obj[fn]
    return reslut

}
Function.prototype.myapply = function (obj) {
    //  this指向调用call的对象
    if (typeof this !== "function") {
        //调用call的不是函数
        throw new TypeError('error')
    }
    // Symbol是 fn 唯一值
    const fn = Smbol('fn')
    const args = arguments.slice(1)

    
    //传了指就是context 没传就是windows
    obj = obj || window

    obj[fn] = this 
    //执行该属性
    const reslut = obj[fn](...args)
    //删除该属性
    delete obj[fn]
    return reslut
}

fn.myapply(obj,[1,2,3])