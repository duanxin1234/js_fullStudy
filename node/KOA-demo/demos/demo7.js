const Koa = require('koa')
const app = new Koa()
const router = require('koa-route')


const about = ctx => {
    ctx.response.body = ctx.request.url + "<br/>" + ctx.request.method + "<br/>" + Date.parse(new Date());
}


app.use(router.get('/', about))


// app.use(main)
app.listen(3000)