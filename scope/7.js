// 5!=5*4*3*2*1
function fb(n) {
    // var num = 1
    // for (var i = 1; i <= n; i++) {
    //     num *= i
    // }
    // console.log(num);
    if (n == 1 || n == 2) {
        return 1
    }
    return fb(n - 1) + fb(n - 2)
}
console.log(fb(5))
