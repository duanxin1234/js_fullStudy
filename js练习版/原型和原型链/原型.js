// 定义 函数function对象的一个属性，它定义了构造函数出的对象的公共的祖先， 通过构造函数产生的对象 可以继承原型上的方法和属性




//这个构造函数里 有个Person.prototype属性
// Person.prototype={}

// Person.prototype.name = "xx"
// Person.prototype.say=function () {
//     console.log('giao');
// }
// Person.prototype = {
//     name='xx',
//    say: function () {
//         console.log('giao');
//     }
// }

function Person() {
    
    // this.name='wn'
}

let a = new Person()  //通过构造函数产生的对象 可以继承原型上的方法和属性
console.log(Person.prototype);  //  里面有 原型上定义的属性和方法 还有一个构造器
// console.log(a.name);  //xx 这个是被原型上继承来的     
console.log(a);   //a  本身是一个空对象
// console.log(a.constructor);  //这个构造器指向 Person函数  

