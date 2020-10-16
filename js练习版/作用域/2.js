//欺骗词法作用域

function foo(str, a) {
    eval(str) //欺骗词法作用域  eval 让原本不属于某处的代码在书写时就存在于程序的这个位子 一般运用动态的代码
    console.log(b,a);  
}
var b=2 
foo('var b=3',1)