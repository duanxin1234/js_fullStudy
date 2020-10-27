//优点 共有的变量  可以实现模块化 不能用全局变量
//实现一个函数执行出来的结果都是累加的 累加器


function test() {
    let count = 0
   
    return   function () {
        count++
        console.log(count);
    }
}
let ccc = test()
ccc()
ccc()

