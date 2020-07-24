//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    articles: [],
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    wx.request({
      url: 'http://localhost:8080/articles', //仅为示例，并非真实的接口地址
      data: {

      },
      header: {
        "Content-Type": "application/json"
      },
      success: (res) => {
        console.log(res.data)
        this.setData({
          articles: res.data.articles
        })
      }
    })
  },

  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
