function foo(a) {
    var b = a + 2
    function bar(c) {
        console.log(a, b, c);
    }
    bar(b * 3)
}

foo(5)
// 全局作用域下只有一个foo
// foo作用域下有 a，b，bar
//bar作用域下只有c1