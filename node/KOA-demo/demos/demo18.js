const Koa = require('koa')

const app = new Koa()//定义一个新的koa实例

const handle = async (ctx, next) => {
    try {
        await next()
    } catch (error) {
        // console.log(err);
        ctx.response.status = error.statusCode | error.status | 500;
        ctx.response.type = 'html'
        ctx.response.body = '<p>something error,you should can...</p>'
    }
}

const main = ctx => {
    ctx.throw(500)
}
// 监听error ，可以在控制台看见server error
app.on("error", function (err) {
    console.log(err)
    console.log("logger error", err.message)
})

app.use(main)
app.use(handle)
app.listen(3000)