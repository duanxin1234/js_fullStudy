let a = { b: 1 }
let c = create(a)
console.log(c)

function create(obj) {
    if (typeof obj !== "object"){
        throw TypeError
    }
   
    return {__proto__:obj}

}