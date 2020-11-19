function a(params) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('1');
            resolve('11')
        }, 1000);
    })
  
}
function b(params) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('2');
            resolve('no')
        }, 1500);
    })
}
function c(params) {
    
        setTimeout(() => {
            console.log('3');
            
        }, 2000);
    }
    

function d(params) {
    setTimeout(() => {
        console.log('4');
    }, 2300);
}

a().then(b).then(c).finally(d)