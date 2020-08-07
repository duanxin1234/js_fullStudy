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
function foo() {
    console.log(this.a);
}
var obj = {
    a: 2,
    foo: foo()
}
obj.foo()