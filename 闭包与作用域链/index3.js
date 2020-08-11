//累加器
// function test() {
//     var count = 0
//     count++
//     console.log(count);
// }
// test()
// test()
// test()

//想要不借助外部，自己每次都会重新初始化一下 的确很难 所以要用闭包
function add() {
    var num = 0
    function a() {

        console.log(num++);
    }
    return a
}
var result = add()
result()
result()
result()