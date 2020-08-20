const Koa = require('koa')
const app = new Koa()//定义一个新的koa实例
const router = require('koa-route')
const redirect = ctx => { //重定向
    ctx.response.redirect("/")
    // ctx.response.type = 'html'
    // ctx.response.body = '<a href="/">About</a>'
}
const main = ctx => {
    ctx.response.body = "hello"
}
app.use(router.get('/', main))
app.use(router.get('/redirect', redirect))
app.use(main)
app.listen(3000, () => {
    console.log("项目启动ing");
})