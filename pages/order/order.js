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
  },
  submitForm: function (event) {
    //选中的按钮
    let yd = event.currentTarget.dataset.yd;
    let url = '';
    if(yd==1){
      url = '../settlement/settlement?region=盐田区&ycode=sddf&title=老人护理&total=500&service=4小时&butBol=false&start=2019-10-10';
    }else{
      url = '../settlement/settlement?region=盐田区&ycode=sddf&start=2019-10-10&end=2019-10-12&title=晚晴关怀&total=1500&service=4小时&butBol=false';
    }
    wx.navigateTo({
      url: url
    });
  }
});