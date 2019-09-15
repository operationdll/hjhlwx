//获取工具类
const Util = require('../../utils/util.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    care: 0,
    flag: true,
    radioItems1: [{
      name: '500/4小时',
      value: '0',
      total: 500,
      checked: true
    },
    {
      name: '280/2小时',
      value: '1',
      total: 280
    }
    ],
    radioItems2: [{
      name: '500/4小时',
      value: '0',
      total: 500,
      checked: true
    },
    {
      name: '280/2小时',
      value: '1',
      total: 280
    }
    ],
    date: Util.getToday(),
    dateStart: Util.getToday(),
    dateEnd: Util.getToday(),
    start: Util.getToday(),
    total: 500,
    regions: [{
      name: "盐田区",
      id: 1
    }, {
      name: "宝安区",
      id: 2
    }, {
      name: "福田区",
      id: 3
    }, {
      name: "罗湖区",
      id: 4
    }, {
      name: "南山区",
      id: 5
    }],
    regionIndex: 0,
    ycode: '',
    title: '',
    service: '4小时'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      care: options.care,
      title: options.title
    });
  },
  radioChange1: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);
    let total = 0;
    var radioItems1 = this.data.radioItems1;
    let service = '4小时';
    if (e.detail.value == 1) {
      service = '2小时';
    }
    for (var i = 0, len = radioItems1.length; i < len; ++i) {
      radioItems1[i].checked = radioItems1[i].value == e.detail.value;
      if (radioItems1[i].value == e.detail.value) {
        total = radioItems1[i].total;
      }
    }
    this.setData({
      radioItems1: radioItems1,
      total: total,
      service: service
    });
  },
  radioChange2: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);
    let total = 0;
    let radioItems2 = this.data.radioItems2;
    let service = '4小时';
    if (e.detail.value == 1) {
      service = '2小时';
    }
    for (var i = 0, len = radioItems2.length; i < len; ++i) {
      radioItems2[i].checked = radioItems2[i].value == e.detail.value;
      if (radioItems2[i].value == e.detail.value) {
        total = radioItems2[i].total;
      }
    }
    this.setData({
      radioItems2: radioItems2,
      total: total,
      service: service
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
    let url = '../settlement/settlement?region=' + this.data.regions[this.data.regionIndex].name + '&ycode=' + this.data.ycode +
      '&title=' + this.data.title + '&total=' + this.data.total + '&service=' + this.data.service;
    wx.navigateTo({
      url: url
    });
  },
  submitForm1: function () {
    var that = this;
    let dateDif = Util.dateDif(this.data.dateStart, this.data.dateEnd);
    if (dateDif < 0) {
      wx.showToast({
        title: '请检查预定日期是否正确',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    let total = this.data.total * (dateDif+1);
    let url = '../settlement/settlement?region=' + this.data.regions[this.data.regionIndex].name + '&ycode=' +
      this.data.ycode + '&start=' + this.data.dateStart + '&end=' + this.data.dateEnd + '&title=' + this.data.title +
      '&total=' + total + '&service=' + this.data.service;

    wx.navigateTo({
      url: url
    });
  },
  bindSexChange: function (e) {
    console.log('picker sex 发生选择改变，索引值为', e.detail.value);
    console.log("选中的id值:" + this.data.regions[e.detail.value].id);
    this.setData({
      regionIndex: e.detail.value
    });
  },
  bindYcodeChange: function (e) {
    this.setData({
      ycode: e.detail.value
    })
  }
})