function test() {
    var arr = []
    for (var i = 0; i < 10; i++) {
        // arr[i] = function () {
        //     console.log(i);
        // }
        (function (j) {
            arr[j] = function () {
                console.log(j);
            }
        })(i)

    }
    return arr
}
var myArr = test()
for (var j = 0; j < 10; j++) {
    myArr[j]()

}





