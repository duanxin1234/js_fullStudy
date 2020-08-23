var obj = new Object();
obj.name = "孙悟空"
var obj2 = obj
obj.name = "猪八戒"
obj = null
console.log(obj);
console.log(obj2);