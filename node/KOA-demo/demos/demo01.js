//引入依赖 commonJs
const Koa = require('koa')
const app = new Koa()//定义一个新的koa实例
const main = ctx => {
ctx.response.body = "hello"
}
app.use(main)
app.listen(3000, () => {
    console.log("项目启动ing");
})