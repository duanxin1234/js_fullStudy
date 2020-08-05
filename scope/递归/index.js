// 5!=5*4*3*2*1
function mul(n) {
    var num=1
    for (var i = 1; i <= n;i++){
        num*=i
    }
    console.log(num);
}
mul(5)