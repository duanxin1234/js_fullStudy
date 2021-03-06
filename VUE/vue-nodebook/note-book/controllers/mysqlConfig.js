var mysql = require('mysql')
const { database } = require('./defaultConfig')
var config = require('./defaultConfig')

//链接线程池
var pool = mysql.createPool({
    host: config.database.HOST,
    user: config.database.USERNMAE,
    password: config.database.PASSWORD,
    database: config.database.DATABASE,
    port: config.database.PORT
})
//统一链接数据库的方法
let allServices = {
    query: function (sql, values) {
        return new Promise((resolve, reject) => {
            pool.getConnection(function (err, connection) {  //建立链接
                if (err) {
                    reject(err)
                } else {
                    connection.query(sql, values, (err,rows) => {
                        if (err) {
                            reject(err)
                        } else {
                            resolve(rows)
                        }
                        connection.release() //释放链接
                    })
                }
            })
        })
    }
}
// 读取所有users表数据
let getAllUsers=function () {
    let _sql = 'select * from users;'
    return allServices.query(_sql)
    
}

// 用户登入
let userLogin=function () {
    let _sql = `select * form users where username="${username}" and userpwd="${userpwd}";`
    return allServices.query(_sql)
}

//查找用户
let findUser=function (username) {
    let _sql = `select * form users where username="${username}" and userpwd="${userpwd}";`
    return allServices.query(_sql)
}

//用户注册
let inserUser=function (value) {
    let _sql = `insert into users set username=? , userpwd=?,nicename=?;`
    return allServices.query(_sql,value) //数据库连接
}

//导出方法
module.exports = {
    getAllUsers,
    userLogin,
    findUser,
    inserUser


}