// var num = 123
// num.abc = "aaa"
// console.log(num);

// var num1 = new Number(123)
// num1.abc = "aaa"
// console.log(num1 * 2);
// var str = "abcd"
// console.log(str.length);

// var m = 3
// m.len = 4
// console.log(num.len);
// var arr = [1, 2, 3, 4, 5]
// arr.length = 2
// console.log(arr);
//面试题
var str = 'abc'
str += 1
var test = typeof (str)
if (test.length == 6) {
    test.sign = "typeo的返回结果可能是String"
}
console.log(test.sign);