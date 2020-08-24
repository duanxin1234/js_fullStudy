// var fun = new Function("console.log('hello');")
// fun.name = "你好"
// console.log(fun.name);
// var fun = new Function()
// console.log(typeof fun);
function name(params) {
    console.log("hello");
}
name()  //函数声明
var fun = function () {
    console.log("匿名函数");
};
fun()  //函数表达式
