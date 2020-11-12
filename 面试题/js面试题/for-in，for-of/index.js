// // 对象
//     const obj = {
//         a: 1,
//         b: 2,
//         c: 3
//     }
//     for (let i in obj) {
//         console.log(i)
//         // a
//         // b
//         // c //git 
//     }
// for (let i of obj) {
//     console.log(i)
//     // Uncaught TypeError: obj is not iterable 报错了
// } 
//对象梭哈 只能用for-in  遍历出来的为key名
//数组梭哈for-in 只能用后排  遍历出来为value   for-of为key名
// // 数组
const arr = ['a', 'b', 'c']
// // for in 循环
// for (let i in arr) {
//     console.log(i)
//     // 0
//     // 1
//     // 2
// }

// // for of
// for (let i of arr) {
//     console.log(i)
//     // a
//     // b
//     // c
// }


// const arr = ['a', 'b']
// // 手动给 arr数组添加一个属性
// arr.name = 'qiqingfu'

// // for in 循环可以遍历出 name 这个键名
// for (let i in arr) {
//     console.log(i)
//     // 0
//     // 1
//     // name
// }


// for ... in 循环返回的值都是数据结构的 键值名。
// 遍历对象返回的对象的key值,遍历数组返回的数组的下标(key)。

// for ... in 循环不仅可以遍历数字键名,还会遍历原型上的值和手动添加的其他键。如——例3

// 特别情况下, for ... in 循环会以任意的顺序遍历键名



// for of   不能遍历对象，返回数组的元素
// 循环用来获取一对键值对中的值, 而 for in 获取的是 键名

// 一个数据结构只要部署了 Symbol.iterator 属性, 就被视为具有 iterator接口, 就可以使用 for of循环。
// 例1这个对象,没有 Symbol.iterator这个属性,所以使用 for of会报 obj is not iterable

// for of 不同与 forEach, 它可以与 break、continue和return 配合使用,也就是说 for of 循环可以随时退出循环。

// 提供了遍历所有数据结构的统一接口

// 哪些数据结构部署了 Symbol.iteratoer属性了呢?

// 只要有 iterator 接口的数据结构,都可以使用 for of循环。

// 数组 Array
// Map
// Set
// String
// arguments对象
// Nodelist对象, 就是获取的dom列表集合


// function Foo() {
//     this[100] = 'test-100'
//   this[1] = 'test-1'
//   this['A'] = 'bar-B'
//   this[50] = 'test-50'
//   this[9] = 'test-9'
//   this[8] = 'test-8'
//   this[3] = 'test-3'
//   this[5] = 'test-5'
//   this['b'] = 'bar-A'
//   this['C'] = 'bar-C'

// }

// let bar = new Foo()
// console.log(bar);
// for (const key in bar) {
//    console.log(key );
// }

// 对象中的数字的属性会被优先遍历，且按照顺序遍历  
// 数字被称为 排序属性  字符串 被称为 常规属性