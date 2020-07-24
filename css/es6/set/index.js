
const s = new Set()//类数组
// const arr=[]
// console.log(s);
let arr = [2, 3, 4, 1, 3, 2, 5]
// for (let item of arr) {
//     console.log(item);
// }
// arr.forEach((x) => {
   
// });
//数组去重
console.log([...new Set(arr)]);
//字符串去重