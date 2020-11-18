/**
 * 深拷贝 里面有递归
 */

// let obj = {
//     age: 20,
//     address: {
//         city:'beijing'
//     }
// }
 
// let obj1 = obj
// obj1.address.city = 'nanchang'
// console.log(obj.address.city); 浅拷贝

let obj1 = {
    age: 18,
    addres: {
        city:'beijing'
    }
}

let obj2 = deepClone(obj1)  //定义一个深拷贝函数
obj2.addres.city = 'nanchang'
console.log(obj1.addres.city);

function deepClone(obj) {
    //判断是否为对象 所以手写系统都要可以这样
    if (typeof obj !== "object" || obj == null) {
        return obj
    }
    //定义一个 空对象
    let res = {} && []
    //把所有的obj里面的key都遍历一遍
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) { //判断key是否有原型链上的属性
            res[key]=deepClone(obj[key])    //递归 深挖对象里面的对象
        }
    }
    return res
}

