// pages/share/share.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  /**
   * 联系客服
   */
  bindCallUser: function () {
    wx.makePhoneCall({
      phoneNumber: "4008386681"
    });
  }
})