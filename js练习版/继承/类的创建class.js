class Student {
    //构建对象
    constructor(name, age) {
        this.name = name,
        this.age=age
    }
    saihi() {
        console.log(
            `姓名 ${this.name},年龄${this.age}`
        );
    }
}

const a = new Student('下来', 100)
console.log(a.name);
a.saihi()