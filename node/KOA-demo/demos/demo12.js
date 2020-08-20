const Koa = require('koa')
const app = new Koa()//定义一个新的koa实例
const path = require('path')// 查找绝对路径
// const serve = require('koa-static')
// const main = serve(path.join(__dirname))
const main = ctx => {
    ctx.response.body = path.join(__dirname)
}
app.use(main)
app.listen(3000, () => {
    console.log("项目启动ing");
})