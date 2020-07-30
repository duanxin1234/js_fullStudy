// 正则的定义
// let patt1 = new RegExp("hello")
// let patt2 = /world/
// //正则的使用 test（）
// let pat = /my/
// let str = "this yi my cody..."

// let arr = str.split(" ")
// console.log(arr.indexOf('my'));
// console.log(pat.test(str));

// let pat = /hello/
// let msg = 'oh hello world'
// console.log(pat.exec(msg));

// let str = "visit NanChang oh my world"
// let pat = /nanchang/i
// let pat2 = /NanChang/ig
// console.log(pat2.test(str));

//字符串正则
// let str = 'Visit W3School'

// console.log(str.search(/w3school/ig));

// let str = "1 plus 2 equl 33"
// console.log(str.match(/\d+/g));

// let str = 'hello pp! oh i am hunger'
// // console.log(str.replace(/hunger/, "snali"));
// console.log(str.split(""));

//正则的写法
//[abc]查找方括号之间的任何字符
// let str = "Is this all there is"
// let pat = /Is|is/g
// console.log(str.match(pat));
// [^abc]查找不在方括号之间的任何字符
// let str = "Thaat is hot"
// let pat = /\bt/g
// console.log(str.match(pat));
let tel = " (1709@qq.com"
let pat = /(\S)+[@]{1}(\S)+[.]{1}(\w)+/
console.log(pat.test(tel));

