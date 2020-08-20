const Koa = require('koa')
const app = new Koa()//定义一个新的koa实例
const main = ctx => {
    ctx.throw(500)
}
// 监听error ，可以在控制台看见server error
app.on("error", (error, ctx) => {
    console.error("server error", error)
})

app.use(main)
app.listen(3000, () => {
    console.log("项目启动ing");
})