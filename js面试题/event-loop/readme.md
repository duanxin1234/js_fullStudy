 # 进程和线程的区别？
 进程是指cpu 在运行指令以保存和加载上下文所需的时间   比如点击qq到打开qq的时间过程

 线程是进程中最小的单位，它描述的是执行一段指令是所需要的时间  比如 页面渲染 接口请求 引擎渲染  
 线程阻塞   js是单线程语言 js的执行会阻塞UI页面的渲染  所以js scarip尽量放下面

 # 优缺点
 单线程 比较省内存 并发性不高
 多线程 可以同时进行 但是比较耗内存

 # 执行栈？
执行栈 是一个存储函数调用的栈结构  js是一个人  执行栈就像一个口袋 口袋中放入函数等待被执行  abc进 abc 出

# event-loop
js执行过程的上帝视角
同步代码
异步代码  异步代码分为微任务(microtask) 和 宏任务 (macrotask)
微任务 : process.nextTick ,promise ,mutationobserver ，async
宏任务：script,settimeout, setinterval,setImmediate,i/o,ui rendring(页面渲染)

# event loop 执行顺序：
1，首先执行同步代码，这也属于宏任务
2，当同步代码执行完后，执行栈为空，查询是否有异步代码需要执行
3，执行为微任务
4，当执行所有的微任务后，如果有必要会渲染会渲染页面   
5，然后开始下一轮 event loop，执行宏任务中的异步代码


