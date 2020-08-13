// 云函数入口文件
const cloud = require('wx-server-sdk')
const env = "wechat-qx0fb"
cloud.init()
const db = cloud.database({ env })
// 云函数入口函数
exports.main = async (event, context) => {
  //console.log(event);{groupname，  urserinfo：appid，oenid}
  const userInfo = event.userInfo
  //联通数据库
  return await db.collection("group").add({
    data: {
      name: event.groupName, //信息
      createBy: userInfo.openId,//被谁创建的
      createTime: new Date(), //创建时间
      deleted: false,  //删除
      updateTime: new Date()//创建更新时间
    }
  })
    .then(res => {
      return db.collection("usre-group").add({
        data: {
          groupId: res._id,
          userId: userInfo.openId,
          invalid: false
        }
      })
    })
} 