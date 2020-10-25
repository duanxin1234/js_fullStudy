function setnew(Fn) {
    let obj = {}
    // Fn=[].shift.call(arguments)  
    obj.__proto__ = Fn.prototype
    Fn.call(obj)
    return obj
}

function Fn(name, age) {
    
    this.name = name
    this.age=age
}

let a = setnew(Fn)
console.log(a);