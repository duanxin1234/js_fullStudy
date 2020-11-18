function Class(name,age) {
    this.name = name
    this.age=age
}
let a = mynew(Class)
a.name = 'ss'
a.age=18

console.log(a);
function mynew(fn) {
    let obj = {}
    obj.__proto__ = fn.prototype
    fn.call(obj) //把fn的值导入到obj里面
    return obj
}

