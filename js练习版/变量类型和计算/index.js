let a = {
    x: 100,
    y:200
}
let b = a
b.x = 101
let x1 = a.x  //干扰 这个属于基本类型 不会用到引用类型 
x1 = 102
console.log(a.x);
