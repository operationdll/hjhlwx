//获取API
const API = require('../../utils/api.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    catalogs: [],
    flag: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;
    // API.getFristCatalogs(this,function(res){
    //   that.setData({
    //     catalogs: res.data.hotels
    //   });
    // });
  },
  //事件处理函数
  bindCareTap: function (event) {
    var that = this;
    //选中的按钮
    let careDate = event.currentTarget.dataset.care;
    wx.navigateTo({
      url: '../catalogSecond/catalogSecond?care=' + careDate
    })
  }
})