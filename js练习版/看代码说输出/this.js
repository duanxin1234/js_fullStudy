// function identify(context) {
//     return context.toUpperCase()
// }
// function speak(context) {
//     let greeting='hello, im'+identify(context)
//     console.log(greeting);
// }
// speak("me")
// var a = 1
// function foo() {
//      'use strict'
//     a=2
//    console.log(this.age); 
// }


// var obj = {
//     name:'wn',
//     age:18,
//     function:foo
// }
// obj.function()
// this.a = 20;
// function go() {
//    console.log(this.a);
//    this.a = 30;
// }
// go.prototype.a = 40;
// var test = {
//    a: 50,
//    init: function (fn) {
//      fn();
//      console.log(this.a);
//      return fn;
//    }
// };
// console.log((new go()).a)
// test.init(go); 
// var p = test.init(go); 
// p(); 
 //B在全局下定义 所以this指向window b=5

function B() {
        console.log(this.c);    // 2
        this.c = 1
    }
    B.prototype.c = 2
    let b = new B()


