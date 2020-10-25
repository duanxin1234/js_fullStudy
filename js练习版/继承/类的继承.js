
//父类
class People{
    //构造器 
    constructor(name) {
        this.name=name
    }
    eat() {
        console.log(`${this.name} eat something`);
    }
}
//子类

class Student extends People{ //extends 扩展
    constructor(name, number) {
        super(name)  //父类定义了就用super调用
        this.number=number
    }
    saihi() {
        console.log(`姓名 ${this.name},年龄${this.number}`);
    }
}

let a = new Student('xx', 100)
a.saihi()
a.eat()   // 继承  
