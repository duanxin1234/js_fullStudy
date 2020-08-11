function a() {
    function b() {
        var bbb = 234
        console.log(aaa);
    }
    var aaa = 123
    return b  //b出生在a里面，但是被保存出来啦
}
var glob = 100
var demo = a()
demo()

// Go: {
//     glob: undefined ->100
//     demo: undefined
//     a:function a(){...}
// }
// aAo：{
//     aaa: undefined->123
//     b:function b(){...}
// }
// bAO: {
//     bbb：undefined ->234

// }
