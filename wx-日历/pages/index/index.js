Page({
  data: {
    weeklist: ['日', '一', '二', '三', '四', '五', '六'],
    itemIndex: 10,   //当前年份的数组下标    
  },                 //这个值和年份的前后一致的值相等，要注意就是年份访问时一当前年为切割点，
  /**                //前后年份范围的数值相等比较好计算，当然看需求而定啦。
   * 生命周期函数--监听页面加载
   */
 
 onLoad: function (options) {
    var that = this;    
    var cur_year = new Date().getFullYear();   //获取当前年
    var cur_month = new Date().getMonth();    //获取当前月
    that.setData({
      dataTime: cur_year + "-" + cur_month + "-01"
    });

    that.calendar(cur_year, cur_month);
    //拿到当前的年月，渲染第一次进来小程序的日期数据
    that.setData({
      cur_year,
      cur_month,
    });

  },

//页面相关事件处理函数--监听用户下拉动作

onPullDownRefresh: function () {

},

/**
 页面上拉触底事件的处理函数
 **/
onReachBottom: function () {

},

/*
 用户点击右上角分享
 */
onShareAppMessage: function () {
  return {
    title: '简单日历实现小程序版本',
    desc: '简单日历实现小程序版本',
    path: '/pages/index/index'
  };
},

 //日历方法  ，参数是只要穿入年和月就可以渲染出来当前年月的日历，
  //用let来代替var，let是es6的，也是用来声明变量的，只是没有变量提升，更加严谨
  calendar: function (year, month) {
      let fullDay = parseInt(new Date(year, month + 1, 0).getDate()),//当前月总天数
      startWeek = parseInt(new Date(year, month, 1).getDay()),  //当前月第一天周几
      lastMonthDay = parseInt(new Date(year, month, 0).getDate()),   //上个月的天数
      totalDay = (fullDay + startWeek) % 7 == 0 ? (fullDay + startWeek) : fullDay + startWeek + (7 - (fullDay + startWeek) % 7);//元素总个数
    //年份范围  我是取当前年的前后十年
    let newYearList = [], newMonthList = [], curYear = new Date().getFullYear();
    for (var i = curYear - 10; i < curYear + 10; i++) {
      newYearList.push(i);
    }
    //月份范围
    for (var i = 1; i <= 12; i++) {
      newMonthList.push(i);
    }

    let lastMonthDaysList = [], currentMonthDaysList = [], nextMonthDaysList = [];
    // 遍历日历格子
    for (let i = 0; i < totalDay; i++) {
      if (i < startWeek) {
         //当月第一天不是周日的情况下，前面有几个格式是上月的，就渲染上月的天数
        lastMonthDaysList.push(lastMonthDay - startWeek + 1 + i);  

      } else if (i < (startWeek + fullDay)) {

       //当月天数
        currentMonthDaysList.push(i + 1 - startWeek);     

      } else {
        //当月最后一天不是周六的时候，剩下的各自就渲染下月的天数
        nextMonthDaysList.push((i + 1 - (startWeek + fullDay)));    
      }
    }

    this.setData({
      monthList: newMonthList,//月份
      yearList: newYearList, //年份范围
      lastMonthDaysList,   //上月总天数
      currentMonthDaysList, //当前月总天数
      nextMonthDaysList  //下月总天数
    });
    //要注意获取的年份是从0开始算起的，所以需要添加一来显示，这是中国地区的习惯啦
    var tmonth = month + 1;     

     //让小程序的标题也跟着改变
    wx.setNavigationBarTitle({ title: year + "年" + tmonth + "月" })     
  },

  //选择月
  //当用picker选择月份的时候，月份就要发生改变，然后把新的年月传入calendar参数中，重新渲染日历
  chooseMonth: function (e) {    
    //获取的月份和我们想要显示的月份相差一，所以需要做判断  
    var chose_month = parseInt(e.detail.value) + 1 == 13 ? 1 : parseInt(e.detail.value);   
    this.setData({
      cur_month: chose_month,
    });
    //小程序修改data的数据是用setData()方法
    this.calendar(this.data.cur_year, this.data.cur_month)    

  },



 //选择年
  chooseYear: function (e) {    //同选择月份一样
    var idx = e.detail.value;
    var y = this.data.yearList[idx];
    console.log(idx)
    this.setData({
      itemIndex: idx,
      cur_year: y,
    });
    this.calendar(y, this.data.cur_month);

  },

 //操作月  操作月的函数我写成了一个，
  //也可以分开来写，所以大家可以精简，我这是为了让大家看清晰~
  handleMonth: function (e) {    
    const handle = e.currentTarget.dataset.handle;
    const cur_year = this.data.cur_year;
    const cur_month = this.data.cur_month;
    const index = this.data.itemIndex;
    if (handle === 'prev') {
      let newMonth = cur_month - 1;
      let newYear = cur_year;
      let idx = index;
      if (newMonth < 0) {
        newYear = cur_year - 1;
        idx = index - 1;
        newMonth = 11;
      }

      this.calendar(newYear, newMonth);
      this.setData({
        cur_year: newYear,
        cur_month: newMonth,
        itemIndex: idx
      });

    } else {
      let newMonth = cur_month + 1;
      let newYear = cur_year;
      let idx = index;
      if (newMonth > 11) {
        newYear = cur_year + 1;
        idx = index + 1;
        newMonth = 0;
      }

      this.calendar(newYear, newMonth);
      this.setData({
        cur_year: newYear,
        cur_month: newMonth,
        itemIndex: idx
      });
    }
  }
})