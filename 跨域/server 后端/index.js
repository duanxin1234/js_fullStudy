const http = require('http');
http.createServer((req, res) => {
    console.log(req);
    if (req.url.includes('/api')) {
        let json = {
            code:0
        }
        res.end(`foo(${JSON.stringify(json)})`)
    } else {
        res.end('')
    }
})  //
    .listen(8088, () => {
    console.log(8088);
}) //端口接口 