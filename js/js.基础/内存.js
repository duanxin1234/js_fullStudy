var obj = {
    name:"tom"
}
var a = obj  //obj 和a 保存的地址值相同
a.age = 18
console.log(obj);

var a = 12  //保存的就是这个数据
a = { name:"mom"} // 保存的是地址