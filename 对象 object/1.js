// var mrlei = {
//     name: "lei",
//     age: 20,
//     sex: "boy",
//     health: 100,
//     smoke: function () {
//         console.log("i am smoking cool");
//         mrlei.health--
//     },
//     drink: function () {
//         console.log("i am drink");
//         mrlei.health++
//     }
// }
// mrlei.drink()
// console.log(mrlei.health++);
//增
// mrlei.boyFriend = "zhihong"
// console.log(mrlei);
//查
// console.log(mrlei.sex);
// //修改
// mrlei.sex = "girl"
// console.log(mrlei);
// //删
// delete mrlei.name

//对象创建
// 1.var obj={} //对象字面量
// 2.构造函数
// let a = new Object()
// let b = new Object()

function Car(color) { // 构造函数 大驼峰式命名
        this.name = "BMW",
        this.height = "1400",
        this.health = 100,
        this.color = color
    this.run = function () {
        this.health--
    }
}
var car = new Car("black")
var car1 = new Car('yellow')
car.name = "红旗"
car.run()
console.log(car);
console.log(car1);