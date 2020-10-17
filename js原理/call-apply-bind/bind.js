Function.prototype.mybind = function (context) {

    //判断fn是否是函数
    if (typeof this !='funtion') {
        throw new TypeError('error')
}

    //拿到参数
    const args = [...arguments].slice(1)
    //保存this  防止多层函数改变this指向
    const fn = this
    //定义一个空函数 
   
    //绑定函数
    return function F() {
        //如果 一个函数this指向自己时，只有可能 被new啦 那就自己new回来
        if (this instanceof F) {
            return new fn(...args,...arguments)
        } else {
            return fn.apply(context,args.concat(...arguments))
        }
    }
    
}
 
fn.mybind(obj,1,2)(1)