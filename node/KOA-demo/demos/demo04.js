const fs = require("fs") //引入
// fs 是一个文件系统模块，负责读写文件
const Koa = require("koa")
const app = new Koa()
const main = ctx => {
    ctx.response.type = 'xml'
    ctx.response.body = fs.createReadStream("./template.htm")
}
app.use(main)
app.listen(3000)