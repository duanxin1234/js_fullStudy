
//  settimeout 和 promise 都是异步  settimeout是微任务  promise是宏任务  但是 异步的本质其实也是同步， 因为也要按照顺序去执行栈 执行
// setTimeout(() => {
//     console.log(1);
// }, 0);


// new Promise((resolve, reject) => {
//     console.log(2);
// })


console.log('script start');

async function async1() {
  await async2() //留住线程  要先执行 有点像同步
  console.log('async1 end');
}

async function async2() {
  console.log('async2 end');
}
async1()

setTimeout(function() {
  console.log('setTimeout');
}, 0)

new Promise(resolve => {
  console.log('Promise');
  resolve()
})  //同步 
  .then(() => {
    console.log('promise1');
  }) // 异步
  .then(() => {
    console.log('promise2');
  })

console.log('script end');


// 1,函数声明式，函数表达式，对象方法，class方法可以声明 async
// 2，任何一个await 语句后面的promise对象变成reject，那么整个asy会中断


function getJson() {
  return new Promise((reslove, reject) => {
      setTimeout(function () {
          console.log(2)
          reslove(2)
      }, 2000)
  })
}
async function testAsync() {
  await getJson()
  console.log(3)
}
testAsync()


function testAsync() {
    
    return Promise((reslove, reject) => {
   
  }).then(() => {
    setTimeout(function () {
      console.log(2)
      reslove(2)
    }, 2000)
  }).then(() => {
    console.log(3);
  })
}