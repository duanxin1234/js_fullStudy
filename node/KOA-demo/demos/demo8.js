const Koa = require('koa')
const app = new Koa()

const main = (ctx, next) => {
    console.log(ctx.response.body = ctx.request.url + "<br/>" + ctx.request.method + "<br/>" + Date.parse(new Date()));
    next()
}



const about = ctx => {
    ctx.response.body = "hello"
}




app.use(main)
app.use(about)
app.listen(3000)