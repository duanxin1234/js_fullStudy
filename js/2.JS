// JSON 对象
// 策略模式
//对象字面量
//工资发放策略

var stategies = {
    'A': function (salary) {
        return salary * 12
    },
    'B': function (salary) {
        return salary * 16;
    },
    'C': function (salary) {
        return salary * 18;
    },
    'S': function (salary) {
        return salary * 20;
    }

}
function calculateBonus(salary, level = "C") {
    // console.log(stategies)
    return stategies[level](salary)
}
console.log(calculateBonus(20000));
