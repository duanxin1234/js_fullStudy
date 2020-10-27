function test() {
    let arr = []
for (var i = 0; i < 10; i++) {
  (function (j) {
    arr[j]=function () {
        console.log(j);
    }
  })(i)
    
    }
    return arr
}

let myarr = test()
for (let j = 0; j < 10; j++) {
    myarr[j]()
    
}