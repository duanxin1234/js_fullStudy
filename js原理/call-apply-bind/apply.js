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