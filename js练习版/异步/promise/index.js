
//回调 地狱
function love(callback) {
    setTimeout(() => {
        console.log('相亲');
        callback(baby)
    }, 2000);
}

function marry(callback) {
    setTimeout(() => {
        console.log('结婚');
        callback()
    }, 1000);
}


love(marry)

function baby(params) {
    setTimeout(() => {
        console.log("生小孩");
    }, 1400);
}

