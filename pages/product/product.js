// pages/product/product.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'',
    content:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let product = options.product.split("#");
    let title = product[0];
    let content = product[1];
    this.setData({
      title: title,
      content: content
    });
  },
  //事件处理函数
  bindCareTap: function (event) {
    //选中的按钮
    let careDate = event.currentTarget.dataset.care;
    wx.navigateTo({
      url: '../porder/porder?care=' + careDate + '&title=' + this.data.title
    })
  }
})