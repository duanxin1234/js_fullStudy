var obj = {
    a: 10,
    b: 20,
    c: 30
}
function foo2(obj) {
    with (obj) {
        a=2
    }
    
}
var o2 = {
    b:3
}
foo2