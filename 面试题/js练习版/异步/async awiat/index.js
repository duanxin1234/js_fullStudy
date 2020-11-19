// async 语法
function a(params) {
    console.log(1);
}

async function b() {
    await a()   //promise 
    console.log(2); //then
}
b()
