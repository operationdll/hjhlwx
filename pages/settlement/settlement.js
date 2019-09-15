// pages/settlement/settlement.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: '',
    ycode: '',
    start: '',
    end: '',
    title: '',
    flag: true,
    isShow: true,
    total: '',
    discount: 0,
    service: '',
    butBol: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    if (undefined != options.butBol) {
      this.setData({
        butBol: false
      });
    }
    if (undefined != options.end) {
      this.setData({
        isShow: false,
        end: options.end
      });
    }
    let discount = 0;
    if (options.ycode != '') {
      discount = 50;
    }
    let total = Number(options.total);
    total = total + 50 - discount;
    this.setData({
      start: options.start,
      region: options.region,
      ycode: options.ycode,
      title: options.title,
      total: total,
      discount: discount,
      service: options.service
    });
  },
  bindSubmit: function() {
    let that = this;
    wx.showModal({
      title: '提示',
      content: '总价:xxx元,是否提交订单？',
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
          setTimeout(function() {
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