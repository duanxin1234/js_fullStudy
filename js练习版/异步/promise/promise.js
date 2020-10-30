let love = new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log('相亲');
        resolve('succese')
    }, 2000);
}).then(() => {
 
    return marry()
   
}).then(() => {
    
      baby()
      
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
    setTimeout(() => {
        console.log("生小孩");
    }, );
}

