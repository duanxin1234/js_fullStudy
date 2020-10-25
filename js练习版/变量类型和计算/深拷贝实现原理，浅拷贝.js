/**
 * 浅拷贝
 */

// const a = {
//     name: 'abb',
//     age:18
// }
// let b = a
// b.age = 19
// console.log(a.age);

/**
 * 深拷贝
 * 
 */
const a = {
    name: 'abb',
    age:18
}
let b = deepClone(a)
b.age = 19
console.log(a.age);

 function deepClone(obj) {
     if ( typeof obj !=="object" || obj ==='null' ) {
        //  首先判断 判断obj 是数组或者对象
         return obj
     }
    
     //初始化放回结果
     let result={} ||[]
     for (const key in obj) {
         //hasownproperty 是保证 key 是obj本身的值 而不是原型中就有的
         if (obj.hasOwnProperty(key)) {
             //递归  可以对象里面还有对象
            result[key]= deepClone(obj[key])
             
         }
     }
     return result

    
   
}
 