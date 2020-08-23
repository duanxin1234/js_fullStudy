var obj = new Object();
obj.name = "孙悟空" //增
obj.age = 18
delete obj.age //删
obj.name = "锦霆"//改
console.log(obj.age);//查


console.log("name" in obj); //检查obj里面是否有name这个属性