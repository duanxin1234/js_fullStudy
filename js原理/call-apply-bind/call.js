Function.prototype.mycall = function (context) {
    //  this指向调用call的对象
    if (typeof this !== "function") {
        //调用call的不是函数
        throw new TypeError('error')
    }
    const fn = Smbol('fn')
    const args = [...arguments].slice(1)
    context = context || window
    context[fn] = this 
    //执行该属性
    const reslut = context[fn](...args)
    //删除该属性
    delete context[fn]
    return reslut
}

fn.mycall(obj)