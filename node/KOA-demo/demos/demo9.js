const Koa = require('koa')
const app = new Koa()//定义一个新的koa实例
const one = (ctx, next) => {
    console.log("<<1");
    next()
    console.log("1>>");
}
const two = (ctx, next) => {
    console.log("<<2");
    next()
    console.log("2>>");
}
const three = (ctx, next) => {
    console.log("<<3");
    next()
    console.log("3>>");
}
app.use(one)
app.use(two)
app.use(three)
app.listen(3000)