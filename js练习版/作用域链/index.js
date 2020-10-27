function a() {
    function b() {
        var b=200
    }
    b()
    var a = 100
    console.log(a);
}
a()
var gold = 101
//a 先定义 0：Go{}
//a 在执行 0：Ao{} 1：Go{}
//b 先定义 0：Ao{} 1：Go{}
//b 在执行 0：bAo{} 1：aAo{} 2：Go{}

