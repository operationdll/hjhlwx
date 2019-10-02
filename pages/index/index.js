//获取应用实例
const app = getApp();
//获取API
const API = require('../../utils/api.js');

Page({
  data: {
    motto: '汇骏护理',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    flag: true
  },
  //事件处理函数
  bindViewTap: function() {
    var that = this;
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        //根据code获取用户信息
        API.getCustomer(that, function(res) {
          if (res.data.customers !== undefined) {
            let customers = res.data.customers;
            app.globalData.isNewUser = false;

            //console.log(customers);
            
            //本人信息
            let customer = customers[0];
            customer.address1 = customer.address;
            customer.id_address = customer.id;
            customer.relationship = 0;
            app.globalData.users[0] = that.addUsers(customer);
            //家人信息
            if (customer.associations !== undefined){
              let otherMembers = customer.associations.otherMembers;
              for (let i = 0; i < otherMembers.length; i++) {
                let user = that.addUsers(otherMembers[i]);
                app.globalData.users.push(user);
              }
            }

            //console.log(app.globalData.users);

            //跳转到主页面
            wx.switchTab({
              url: '../main/main'
            })
          } else {
            wx.showToast({
              title: '请先注册用户信息',
              icon: 'none',
              duration: 2000
            });
            setTimeout(function() {
              //跳转到用户页面
              wx.switchTab({
                url: '../user/user'
              });
            }, 2000);
          }
        }, {
          'display': 'full',
          'filter[user_name]': '[' + res.code + ']',
          'filter[login_type]': '1'
        });
      }
    })
  },
  onLoad: function() {
    let that = this;
    //获取区域信息
    API.getArea(that, function(res) {
      let regions = res.data.htl_room_type_global_demands;
      if (regions && regions.length > 0) {
        app.globalData.regions = regions;
      }
    }, {
      'display': 'full',
      'output_format': 'JSON'
    });
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  addUsers: function (customer){
    let user = {
      id: customer.id_address,
      lastname: customer.lastname,
      firstname: customer.firstname,
      sexes: 0,
      birthDate: customer.birthday,
      phone: customer.phone,
      regions: 0,
      address: customer.address1,
      occupation: customer.occupation,
      livings: 0,
      flats: 0,
      diseases: 0,
      scares: 0,
      ifs: [false, false, false, false, false, false, false, false],
      otherTxt: '',
      relationship: 0
    };
    //性别
    let id_gender = customer.id_gender;
    if (id_gender == 2) {
      user.sexes = 1;
    }
    //目前居住状态
    let livings = app.globalData.livings;
    let living_status = 0;
    for (let i = 0; i < livings.length; i++) {
      if (customer.living_status == livings[i]) {
        living_status = i;
      }
    }
    user.livings = living_status;
    //住所类别
    let flats = app.globalData.flats;
    let home_type = 0;
    for (let i = 0; i < flats.length; i++) {
      if (customer.home_type == flats[i]) {
        home_type = i;
      }
    }
    user.flats = home_type;
    //疾病
    let diseases = app.globalData.diseases;
    let health_status = 0;
    for (let i = 0; i < diseases.length; i++) {
      if (customer.health_status == diseases[i]) {
        health_status = i;
      }
    }
    user.diseases = health_status;
    //特别护理
    let scares = app.globalData.scares;
    let special_care = 0;
    for (let i = 0; i < scares.length; i++) {
      if (customer.special_care == scares[i]) {
        special_care = i;
      }
    }
    user.scares = special_care;
    //如有
    let ifs = app.globalData.ifs;
    let special_care_detail = [];
    if (customer.special_care_detail != null) {
      special_care_detail = customer.special_care_detail.split(',');
    }
    for (let i = 0; i < ifs.length; i++) {
      for (let j = 0; j < special_care_detail.length; j++) {
        if (special_care_detail[j] == ifs[i].name) {
          user.ifs[i] = true;
          special_care_detail[j] = '';
        }
      }
    }
    //其他
    let otherTxt = '';
    for (let j = 0; j < special_care_detail.length; j++) {
      if (special_care_detail[j] != '') {
        otherTxt = special_care_detail[j];
      }
    }
    user.otherTxt = otherTxt;
    //服务区域
    let regions = app.globalData.regions;
    let id_global_demand = 0;
    for (let i = 0; i < regions.length; i++) {
      if (customer.id_global_demand == regions[i].id) {
        id_global_demand = i;
      }
    }
    user.regions = id_global_demand;
    //关系
    let relationship = customer.relationship;
    //"本人"/"父母亲", "兄弟", "姐妹", "儿女"
    if ("兄弟" == relationship){
      relationship = 1;
    } else if ("姐妹" == relationship) {
      relationship = 2;
    } else if ("儿女" == relationship) {
      relationship = 3;
    }else{
      relationship = 0;
    }
    user.relationship = relationship;
    return user;
  }
})