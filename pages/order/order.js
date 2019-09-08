//获取工具类
const util = require('../../utils/util.js');

Page({
  data: {
    flag: true
  },
  onLoad: function () {
  },
  lower: function (e) {
    var that = this;
    if(this.data.flag){
      console.log(e);
      util.showLoading(this, '加载中');
      setTimeout(function () {
        util.hideLoading(that);
      }, 2000);
    }
  }
});