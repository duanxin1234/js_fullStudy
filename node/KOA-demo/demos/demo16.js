const Koa = require('koa')
const app = new Koa()//定义一个新的koa实例
const handle = async (ctx, next) => {
    try {
        await next()
    } catch (err) {
        // console.log(err);
        ctx.response.status = err.statusCode | err.status | 500;
        ctx.response.body = {
            "message": err.message
        }
    }
}
const main = ctx => {
    ctx.throw(500)

}
app.use(handle)
app.use(main)
app.listen(3000, () => {
    console.log("项目启动ing");
})