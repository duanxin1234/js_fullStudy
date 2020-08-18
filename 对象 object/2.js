function Student(name, age, sex) {
    this.name = name
    this.age = age
    this.sex = sex
    return []
}
var student = new Student("jiahao", 22, "boy")
console.log(student);

// function Person(name, age) {
//     var that = {}
//     that.name = name,
//         that.age = age
//     return that
// }
// var person = new Person("woniu", 18)
// console.log(person);