// this 所在的词法作用域在哪里生效啦 ，this作用域就指向哪里
// function foo() {
//     let person = {
//         name: "wx",
//         age: 18
//     }
//     console.log(this);
// }

// function bar() {
//     let person = {
//         name: "wx",
//         age: 18
//     }
//     foo()
// }

// bar()


// function foo() {
//     console.log(this.a);
// }
// // var a = 2
// foo()



// 隐式绑定
function foo() {
    console.log(this.a);
}
var obj = {
    a: 2,
    foo: foo
}
obj.foo()


// 显示绑定
function foo() {
    console.log(this.a);
}
var obj = {
    a: 2,

}
foo.call(obj) //把foo 里面的函数指向obj 非数组
foo.apply(obj) //把foo 里面的函数指向obj 数组
foo.bind(obj)()

// 隐式丢失
function foo() {
    console.log(this.a);
}
var obj = {
    a: 2,
    foo: foo
}

var bar = obj.foo
var a = "hello"
bar()

