//获取应用实例
const app = getApp();
//获取API
const API = require('../../utils/api.js');
//获取工具类
const Util = require('../../utils/util.js');

Page({
  data: {
    sexes: [{
      name: "男",
      id: 1
    }, {
      name: "女",
      id: 2
    }],
    sexIndex: 0,
    livings: app.globalData.livings,
    livingIndex: 0,
    flats: app.globalData.flats,
    flatIndex: 0,
    diseases: app.globalData.diseases,
    diseaseIndex: 0,
    scares: app.globalData.scares,
    scareIndex: 0,
    ifs: app.globalData.ifs,
    birthDate: '',
    flag: true,
    showIfs: true,
    showOther: true,
    lastname: '',
    firstname: '',
    occupation: '',
    address: '',
    infoUsers: ["本人信息", "新增人员"],
    infoUserIndex: 0,
    relationship: ["本人"],
    relationshipIndex: 0,
    phone: '',
    regions: [],
    regionIndex: 0,
    otherTxt: '',
    end: Util.getToday()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    let that = this;
    let user = app.globalData.users[0];
    this.setUserInfo(user);
    //获取区域信息
    this.setData({
      regions: app.globalData.regions
    });
    //判断是否新用户
    if (app.globalData.isNewUser) {
      this.setData({
        infoUsers: ["本人信息"]
      });
    }else{
      let infoUsers = this.data.infoUsers;
      let users = app.globalData.users;
      if (users.length>2){
        for (let i = 2; i < users.length;i++){
          let name = users[i].lastname + users[i].firstname;
          infoUsers.push(name);
        }
        this.setData({
          infoUsers: infoUsers
        });
      }
    }
  },
  setUserInfo: function(user) {
    if (user.scares == 0) {
      //是否显示如有
      this.setData({
        showIfs: true
      });
    } else {
      this.setData({
        showIfs: false
      });
    }
    let showOther = true;
    let ifs = this.data.ifs;
    for (let i = 0; i < user.ifs.length; i++) {
      ifs[i].checked = user.ifs[i];
      if (i == 7) {
        showOther = !user.ifs[i];
      }
    }
    this.setData({
      lastname: user.lastname,
      firstname: user.firstname,
      sexIndex: user.sexes,
      birthDate: user.birthDate,
      phone: user.phone,
      regionIndex: user.regions,
      address: user.address,
      occupation: user.occupation,
      livingIndex: user.livings,
      flatIndex: user.flats,
      diseaseIndex: user.diseases,
      scareIndex: user.scares,
      otherTxt: user.otherTxt,
      relationshipIndex: user.relationship,
      ifs: ifs,
      showOther: showOther
    });
  },
  submitForm: function() {
    let that = this;
    //姓
    let lastname = this.data.lastname;
    if (lastname == "") {
      wx.showToast({
        title: '请填写用户姓',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    //名
    let firstname = this.data.firstname;
    if (firstname == "") {
      wx.showToast({
        title: '请填写用户名',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    //性别
    let id_gender = this.data.sexIndex;
    //出生日期
    let birthday = this.data.birthDate;
    //手机号
    let phone = this.data.phone;
    if (phone == "") {
      wx.showToast({
        title: '请填写手机号',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    //服务区域
    let regionIndex = this.data.regionIndex;
    //详细地址
    let address = this.data.address;
    if (address == "") {
      wx.showToast({
        title: '请填写详细地址',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    //退休前职业
    let occupation = this.data.occupation;
    //目前居住状态
    let living_status = this.data.livingIndex;
    //住所类别
    let home_type = this.data.flatIndex;
    //疾病
    let health_status = this.data.diseaseIndex;
    //特别护理
    let special_care = this.data.scareIndex;
    //如有
    let ifsValue = this.data.ifs;
    let ifs = [];
    //特别护理表单
    let special_care_detail = [];
    for (let i = 0; i < ifsValue.length; i++) {
      ifs[i] = ifsValue[i].checked;
      if (ifs[i]) {
        special_care_detail.push(ifsValue[i].name);
      }
    }
    //其他
    let otherTxt = this.data.otherTxt;
    //关系
    let relationship = this.data.relationshipIndex;
    let user = {
      id: 0,
      lastname: lastname,
      firstname: firstname,
      sexes: id_gender,
      birthDate: birthday,
      phone: phone,
      regions: regionIndex,
      address: address,
      occupation: occupation,
      livings: living_status,
      flats: home_type,
      diseases: health_status,
      scares: special_care,
      ifs: ifs,
      otherTxt: otherTxt,
      relationship: relationship
    };

    // 获取登陆凭证
    wx.login({
      success: res => {
        let param = {};
        param.id = app.globalData.users[0].id;
        param.lastname = lastname;
        param.firstname = firstname;
        id_gender = that.data.sexes[id_gender].id;
        param.id_gender = id_gender;
        param.birthday = birthday;
        param.user_name = res.code;
        param.occupation = occupation;
        param.living_status = that.data.livings[living_status];
        param.home_type = that.data.flats[home_type];
        param.health_status = that.data.diseases[health_status];
        param.special_care = that.data.scares[special_care];
        if (otherTxt != '') {
          special_care_detail.push(otherTxt);
        }
        param.special_care_detail = special_care_detail;
        param.id_global_demand = that.data.regions[regionIndex].id;
        param.address = address;
        param.phone = phone;
        param.relationship = that.data.relationship[relationship];
        //创建用户信息
        if (that.data.infoUserIndex == 0){
          API.createCustomer(that, function (res) {
            if (res.data.customer !== undefined) {
              user.id = res.data.customer.id;
              //添加
              if (that.data.infoUserIndex == 1) {
                let name = lastname + firstname;
                that.addUser(name, user);
              } else {
                //修改
                that.updateUser(user);
              }
              //更新下拉选项
              if (that.data.infoUsers.length == 1) {
                that.setData({
                  infoUsers: ["本人信息", "新增人员"]
                });
                app.globalData.isNewUser = false;
              }
              wx.showToast({
                title: '提交成功',
                icon: 'none',
                duration: 2000
              });
            } else {
              wx.showToast({
                title: '提交失败',
                icon: 'none',
                duration: 2000
              });
            }
          }, param);
        }else{//创建亲戚
          API.addCustomer(that, function (res) {
            if (res.data.address !== undefined) {
              user.id = res.data.address.id;
              // 更新全局变量
              if (that.data.infoUserIndex == 1) {
                //添加
                let name = lastname + firstname;
                that.addUser(name, user);
              } else {
                //修改
                that.updateUser(user);
              }
            } else {
              wx.showToast({
                title: '提交失败',
                icon: 'none',
                duration: 2000
              });
            }
          }, param);
        }
      }
    });
  },
  addUser: function (name, user){
    let infoUsers = this.data.infoUsers;
    infoUsers.push(name);
    this.setData({
      infoUsers: infoUsers,
      infoUserIndex: 0
    });
    app.globalData.users.push(user);
    this.setUserInfo(app.globalData.users[0]);
    wx.showToast({
      title: '添加成功',
      icon: 'none',
      duration: 2000
    });
  },
  updateUser: function (user) {
    //添加
    let name = user.lastname + user.firstname;
    let infoUsers = this.data.infoUsers;
    infoUsers[this.data.infoUserIndex] = name;
    this.setData({
      infoUsers: infoUsers
    });
    app.globalData.users[this.data.infoUserIndex] = user;
    wx.showToast({
      title: '修改成功',
      icon: 'none',
      duration: 2000
    });
  },
  bindLnameChange: function(e) {
    this.setData({
      lastname: e.detail.value
    })
  },
  bindFnameChange: function(e) {
    this.setData({
      firstname: e.detail.value
    })
  },
  bindOccChange: function(e) {
    this.setData({
      occupation: e.detail.value
    })
  },
  bindSexChange: function(e) {
    console.log('picker sex 发生选择改变，索引值为', e.detail.value);
    console.log("选中的id值:" + this.data.sexes[e.detail.value].id);
    this.setData({
      sexIndex: e.detail.value
    });
  },
  bindDateChange: function(e) {
    this.setData({
      birthDate: e.detail.value
    })
  },
  bindLivingChange: function(e) {
    this.setData({
      livingIndex: e.detail.value
    });
  },
  bindFlatChange: function(e) {
    this.setData({
      flatIndex: e.detail.value
    });
  },
  bindDiseaseChange: function(e) {
    this.setData({
      diseaseIndex: e.detail.value
    });
  },
  bindScareChange: function(e) {
    if (e.detail.value == 0) {
      this.setData({
        showIfs: true
      });
    } else {
      this.setData({
        showIfs: false
      });
    }
    this.setData({
      scareIndex: e.detail.value
    });
  },
  bindAddressChange: function(e) {
    this.setData({
      address: e.detail.value
    })
  },
  bindPhoneChange: function(e) {
    this.setData({
      phone: e.detail.value
    })
  },
  bindInfoUserChange: function(e) {
    //本人
    if (e.detail.value==0){
      this.setData({
        relationship: ["本人"]
      });
    }else{
      this.setData({
        relationship: ["父母亲", "兄弟", "姐妹", "儿女"]
      });
    }
    let user = app.globalData.users[e.detail.value];
    this.setUserInfo(user);
    this.setData({
      infoUserIndex: e.detail.value
    });
  },
  bindRelationShipChange: function(e) {
    this.setData({
      relationshipIndex: e.detail.value
    });
  },
  bindRegionChange: function(e) {
    console.log('picker sex 发生选择改变，索引值为', e.detail.value);
    console.log("选中的id值:" + this.data.regions[e.detail.value].id);
    this.setData({
      regionIndex: e.detail.value
    });
  },
  ifsChange: function(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);

    var ifs = this.data.ifs,
      values = e.detail.value;
    for (var i = 0, lenI = ifs.length; i < lenI; ++i) {
      ifs[i].checked = false;

      for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (ifs[i].value == values[j]) {
          ifs[i].checked = true;
          break;
        }
      }
    }
    let showOther = e.detail.value.join(',').indexOf('7') == -1;
    this.setData({
      ifs: ifs,
      showOther: showOther
    });
  },
  bindOtherTxtChange: function(e) {
    this.setData({
      otherTxt: e.detail.value
    })
  }
});