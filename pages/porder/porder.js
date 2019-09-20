//获取应用实例
const app = getApp();
//获取工具类
const Util = require('../../utils/util.js');

Page({
  /**
   * 页面的初始数据
   */
  data: {
    care: 0,
    flag: true,
    radioItems: [{
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
    dateStart: Util.dateAddDay(1),
    start: Util.dateAddDay(1),
    end: Util.dateAddDay(31),
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
    service: '4小时',
    time: '11:00',
    titles1: '',
    titles2: '',
    infoUsers: ["本人"],
    infoUserIndex: 0,
    address: '',
    bntDis: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let titles1 = '当天下单';
    let titles2 = '当天服务';
    if (options.care != 1) {
      titles1 = '预约下单';
      titles2 = '预订时间服务';
    } else {
      //设置16点之后就不能预订当天服务
      let now = new Date();
      if (now.getHours() > 15) {
        this.setData({
          bntDis: true
        });
      }
      this.setData({
        dateStart: Util.getToday()
      });
    }
    this.setData({
      care: options.care,
      title: options.title,
      titles1: titles1,
      titles2: titles2
    });
    //添加信息人
    let users = app.globalData.users;
    if (users.length > 2) {
      let infoUsers = this.data.infoUsers;
      for (let i = 2; i < users.length; i++) {
        let name = users[i].lastname + users[i].firstname;
        infoUsers.push(name);
      }
      this.setData({
        infoUsers: infoUsers
      });
    }
    //设置默认信息
    this.setData({
      address: app.globalData.users[0].address,
      regionIndex: app.globalData.users[0].regions
    });
  },
  radioChange: function(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value);
    let total = 0;
    var radioItems = this.data.radioItems;
    let service = '4小时';
    if (e.detail.value == 1) {
      service = '2小时';
    }
    for (var i = 0, len = radioItems.length; i < len; ++i) {
      radioItems[i].checked = radioItems[i].value == e.detail.value;
      if (radioItems[i].value == e.detail.value) {
        total = radioItems[i].total;
      }
    }
    this.setData({
      radioItems: radioItems,
      total: total,
      service: service
    });
  },
  bindDateChange: function(e) {
    this.setData({
      dateStart: e.detail.value
    });
  },
  submitForm: function() {
    //当天下单需要判断时间
    if (this.data.care == 1) {
      let date1 = new Date();
      let date2 = new Date(Util.getToday() + ' ' + this.data.time);
      let s1 = date1.getTime(),
        s2 = date2.getTime();
      let total = s2 - s1;
      let timeSpanStr = Math.round((total / (1000 * 60)));
      if (timeSpanStr < 180) {
        wx.showToast({
          title: '服务需提前3小时预订',
          icon: 'none',
          duration: 2000
        });
        return;
      }
    }
    let userName = this.data.infoUsers[this.data.infoUserIndex];
    if (this.data.infoUserIndex == 0) {
      let user = app.globalData.users[0];
      let name = user.lastname + user.firstname;
      userName = name;
    }
    let url = '../settlement/settlement?region=' + this.data.regions[this.data.regionIndex].name + '&ycode=' + this.data.ycode +
      '&title=' + this.data.title + '&total=' + this.data.total + '&service=' + this.data.service + '&start=' + this.data.dateStart + '&time=' + this.data.time + '&userName=' + userName + '&address=' + this.data.address;
    wx.navigateTo({
      url: url
    });
  },
  bindRegionChange: function(e) {
    console.log('picker sex 发生选择改变，索引值为', e.detail.value);
    console.log("选中的id值:" + this.data.regions[e.detail.value].id);
    this.setData({
      regionIndex: e.detail.value
    });
  },
  bindTimeChange: function(e) {
    this.setData({
      time: e.detail.value
    })
  },
  bindYcodeChange: function(e) {
    this.setData({
      ycode: e.detail.value
    })
  },
  bindInfoUserChange: function(e) {
    let infoUserIndex = Number(e.detail.value);
    if (infoUserIndex > 0) {
      infoUserIndex = infoUserIndex + 1;
    }
    let user = app.globalData.users[infoUserIndex];
    this.setData({
      infoUserIndex: e.detail.value,
      address: user.address,
      regionIndex: user.regions
    });
  },
  bindAddressChange: function(e) {
    this.setData({
      address: e.detail.value
    })
  }
})