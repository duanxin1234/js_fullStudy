const express = require('express'); // 后端开发框架
const apiMocker = require('mocker-api');
const fs = require('fs'); //文件系统 node 内置
const path = require('path');
const app = express();
// localhost 127.0.0.1:8080 localhost
// 阿里云 IP:3306 mysql  :270017 mongodb
app.get('/', (req, res) => {
    fs.createReadStream('./home.html').pipe(res);
    res.end('hello world');
})
apiMocker(app, path.resolve('./mocker/mocker.js'));
app.listen(8080);//端口