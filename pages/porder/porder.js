//获取工具类
const Util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    care:0,
    flag: true,
    radioItems1: [
      { name: '500/4小时', value: '0', total:500,checked: true },
      { name: '280/2小时', value: '1', total: 280 }
    ],
    radioItems2: [
      { name: '500/4小时', value: '0', total: 500, checked: true },
      { name: '280/2小时', value: '1', total: 280 }
    ],
    date: Util.getToday(),
    dateStart: Util.getToday(),
    dateEnd: Util.getToday(),
    start: Util.getToday(),
    total1: 500
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      care: options.care
    });
  },
  radioChange1: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);
    let total = '';
    var radioItems1 = this.data.radioItems1;
    for (var i = 0, len = radioItems1.length; i < len; ++i) {
      radioItems1[i].checked = radioItems1[i].value == e.detail.value;
      if (radioItems1[i].value == e.detail.value){
        total =  radioItems1[i].total;
      }
    }
    this.setData({
      radioItems1: radioItems1,
      total1: total
    });
  },
  radioChange2: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);
    var radioItems2 = this.data.radioItems2;
    for (var i = 0, len = radioItems2.length; i < len; ++i) {
      radioItems2[i].checked = radioItems2[i].value == e.detail.value;
    }
    this.setData({
      radioItems2: radioItems2
    });
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    });
  },
  bindDateChange1: function (e) {
    this.setData({
      dateStart: e.detail.value
    });
  },
  bindDateChange2: function (e) {
    this.setData({
      dateEnd: e.detail.value
    });
  },
  submitForm: function () {
    var that = this;
    this.setData({
      flag: false
    });
    wx.showToast({
      title: '提交成功',
      icon: 'none',
      duration: 2000
    });
    setTimeout(function(){
      that.setData({
        flag: true
      });
    },2000);
  },
  submitForm1: function () {
    var that = this;
    let dateDif = Util.dateDif(this.data.dateStart, this.data.dateEnd);
    if (dateDif < 0){
      wx.showToast({
        title: '请检查预定日期是否正确',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    let radioItems2 = this.data.radioItems2;
    let total = 0;
    for (let i = 0, len = radioItems2.length; i < len; ++i) {
      if (radioItems2[i].checked){
        total = radioItems2[i].total * (dateDif + 1);
      }
    }
    wx.showModal({
      title: '提示',
      content: '总价:' + total + '元,是否提交订单？',
      success(res) {
        if (res.confirm) {
          that.setData({
            flag: false
          });
          wx.showToast({
            title: '提交成功',
            icon: 'none',
            duration: 2000
          });
          setTimeout(function () {
            that.setData({
              flag: true
            });
          }, 2000);
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    });
  }
})