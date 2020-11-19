let love = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log('相亲');
        resolve('succese')
    }, 2000);
}).then(() => {
 
    return marry()
   
}).then(() => {
    
     return baby()
      
}).catch((err) => {
    console.log(err);
})


function marry(params) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('结婚');
            resolve('11')

        }, 1000);
    })
}




function baby(params) {
    return new Promise((resolve,reject) => {
       setTimeout(() => {
           console.log('生小孩1');
          
           reject('失败')
       }, 900);
   })
}

function baby1(params) {
    setTimeout(() => {
        console.log('生小孩2');
    }, 800);
}

//同链里面的只有.then 一定按顺序进行  如果.then有异步   加个return new promise