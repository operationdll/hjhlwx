// pages/product/product.js
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
  //事件处理函数
  bindCareTap: function (event) {
    //选中的按钮
    let careDate = event.currentTarget.dataset.care;
    wx.navigateTo({
      url: '../porder/porder?care=' + careDate
    })
  }
})