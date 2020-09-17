// //栈  线性结构 特点：在某一端添加或者删除数据，遵循先进后出的原则


// class Stack{

//     constructor() {
//     this.stack=[]
// }
//     push(item) {
//     this.stack.push(item)
//     }
//     pop() {
//         this.stack.pop()
//     }
//     peek() {
//         return this.stack[this.getCount()-1]
//     }
//     getCount() {
//         return this.stack.length
//     }
//     isEmpty() {
//         return this.getCount===0
//     }
// }

// function  Stack(params) {

// }


var isValid = function (s) {
    // if (s.length % 2 == 1) return false;
    let map = {
        "{": -1,
        "}": 1,
        "[": -2,
        "]": 2,
        "(": -3,
        ")": 3
    }
    let stack = []
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] < 0) {

            //先把所有左边括号存到数组中 
            stack.push(s[i])
            console.log(stack);
        } else {
            //到了右边是括号是，我们将数组元素取出与之匹配
            let last = stack.pop()
            // console.log(last);
            //pop 直接取出来 会影响stack数组的长度 保留最后一个值
            if (map[last] + map[s[i]] != 0) {

                return false
            }



        }

    }
    if (stack.length > 0) return false
    return true


};


