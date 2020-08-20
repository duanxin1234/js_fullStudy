const Koa = require('koa')
const app = new Koa()//定义一个新的koa实例
const KoaBody = require("koa-body")
const main = ctx => {
    const body = ctx.response.body
    if (!body.name) {
        ctx.throw(400, ".request.name")
    }
    ctx.response.body = { name: body.name }
}
app.use(KoaBody())
app.use(main)
app.listen(3000, () => {
    console.log("项目启动ing");
})