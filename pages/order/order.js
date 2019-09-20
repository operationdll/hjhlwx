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
      url = '../settlement/settlement?region=盐田区&ycode=sddf&title=老人护理&total=500&service=4小时&butBol=false&start=2019-10-10&time=14:20&userName=张三&address=地址1';
    }else{
      url = '../settlement/settlement?region=盐田区&ycode=sddf&title=晚晴关怀&total=500&service=4小时&butBol=false&start=2019-10-19&time=15:00&userName=李四&address=地址2';
    }
    wx.navigateTo({
      url: url
    });
  }
});