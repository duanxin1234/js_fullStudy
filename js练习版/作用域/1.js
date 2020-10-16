var a=10
function foo(a) {
    //var a=3
    var b = a + 2 //b=5
    function bar(c) {
        //c=5
        console.log(a,b,c); //3 5 5
    }
    bar(5)
}
foo(3)

//全局作用域下只有一个 foo
// 在foo函数作用域里 有 a b  函数bar（）
//在bar函数作用域里有 c 
//函数调用要同级


