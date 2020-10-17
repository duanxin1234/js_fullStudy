Function.prototype.mycall=function (obj) {
    if (typeof this != 'function') {
        throw new TypeError('error')
    }
    const args = [...arguments].slice(1)
    const fn = Symbol('fn')
    //原本就有obj 所以不用叫const
     obj=obj || window
     obj[fn] = this 
    const result = obj[fn](...arguments)
    delete obj[fn]
    return result
    


}

fn.mycall(obj,1,2)