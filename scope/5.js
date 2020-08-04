//自执行函数是一个很好隐藏作用域的方式
var a = 2;
(function foo() {
    var a = 3
    console.log(a);
})()
console.log(a);