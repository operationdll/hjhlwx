
Page({
  data: {
    logs: []
  },
  onLoad: function (option) {
    console.log(option);

    // this.setData({
    //   logs: (wx.getStorageSync('logs') || []).map(log => {
    //     return util.formatTime(new Date(log))
    //   })
    // })
  }
})
