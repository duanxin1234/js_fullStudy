/* 功能：计算能年收益
* @author dx
* @date 2020-7-16
* @params {salary 工资 number}
*{level 评级 string}
*@return 年收益 number
*/



function calculateBonus(salary, level = 'C') {
    // console.log(tapeof(salary - 0));
    // if (arguments.length < 2) {
    //     throw new Error('不正确');
    // }
    // if (typeof salary != 'number' && salary < 0) {
    //     throw new TypeError('工资必需是整数')
    // }
    if (['A', 'B', 'C', 'D'，'S'].indexOf(level) == -1{
        throw new Error('错误的等级')
    }
    if (level == 'C') {
        return salary * 12;
    } else if (level == 'B') {
        return salary * 18;
    } else if (level == 'A') {
        return salary * 20;
    } else if (level == 'S') {
        return salary * 100;
    }
    return salary * 16
}

console.log(calculateBonus(20000, 'B'))