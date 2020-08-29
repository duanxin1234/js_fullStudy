//index.js
//获取应用实例
const app = getApp()

Page({

  data: {

    toview: "love",
    lovelist: [
      { list: '恋爱', id: "love", color: "" },
      { list: '健身', id: "bulid", color: "" },
      { list: '搭讪', id: "talk", color: "" },
      { list: '跑步', id: "run", color: "" }
    ],
    items: [
      {
        id: "love",
        lists: [
          { name: "aa" },
          { name: "ssn" },
          { name: "ssn" },
          { name: "ssn" }
        ]
      },
      {
        id: "bulid",
        lists: [
          { name: "bb" },
          { name: "ssn" },
          { name: "ssn" },

        ]
      },
      {
        id: "talk",
        lists: [
          { name: "aa" },
          { name: "ssn" },
          { name: "ssn" },
          { name: "ssn" }
        ]
      },
      {
        id: "run",
        lists: [
          { name: "aa" },
          { name: "ssn" },
          { name: "ssn" },
          { name: "ssn" }
        ]
      },
    ]
  },
  //事件处理函数
  select(e) {
    console.log(e);
    // 思路 拿到这个lovelist里面每一个index  这个是唯一的 i==index替代  
    let lovelist = this.data.lovelist  //拿到 lovelist这个数组
    for (let i = 0; i < lovelist.length; i++) {
      if (e.currentTarget.dataset.index == i) {
        lovelist[i].color = 'red'
      } else {
        lovelist[i].color = ""
      }
    }
    this.setData({
      toview: e.currentTarget.dataset.id,
      lovelist: lovelist
    })

  },

  onLoad: function () {

  },

})
