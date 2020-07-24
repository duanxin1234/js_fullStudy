// let a = 1
// let b = 2
// let c = 3

// let [a, b, c] = [1, 2, 3]
// let [foo, [[bar], baz]] = [1, [[2], 3]]

// let [head, ...tail] = [1, 2, 3, 4]
// console.log(head, tail)
// let [foo] = {1}
// console.log(foo)
// // 
// let [a, b, c, d, e] = 'hello'
// console.log(a, b, c, d)
let { toString: s } = "hello"
console.log(s === String.prototype.toString)