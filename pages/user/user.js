//获取应用实例
const app = getApp();
//获取API
const API = require('../../utils/api.js');

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
    livings: ["独居", "与配偶同住", "与子女同住", "与保姆同住"],
    livingIndex: 0,
    flats: ["私人屋苑", "宿舍楼(无电梯)", "平房"],
    flatIndex: 0,
    diseases: ["健康良好", "长期病患", "曾施手术", "失明", "失聪", "其他"],
    diseaseIndex: 0,
    scares: ["无", "有"],
    scareIndex: 0,
    ifs: [{ name: '鼻胃管', value: '0' }, { name: '留置导尿管', value: '1' }, { name: '长期氧气', value: '2' }, { name: '气管造口', value: '3' }, { name: '腹膜透析', value: '4' }, { name: '直肠造口', value: '5' }, { name: '压疮', value: '6' }, { name: '其他', value: '7' }],
    birthDate: '',
    flag: true,
    showIfs: true,
    showOther:true,
    lastname: '',
    firstname: '',
    occupation: '',
    address: '',
    infoUsers: ["本人信息", "新增人员"],
    infoUserIndex: 0,
    relationShip: ["本人", "父母亲", "兄弟", "姐妹", "儿女"],
    relationShipIndex: 0,
    phone: '',
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
    otherTxt:''
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let user = app.globalData.users[0];
    this.setUserInfo(user);
  },
  setUserInfo: function (user){
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
    for (let i = 0; i < user.ifs.length;i++){
      ifs[i].checked = user.ifs[i];
      if(i==7){
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
      relationShipIndex: user.relationShip,
      ifs: ifs,
      showOther: showOther
    });
  },
  submitForm: function() {
    var that = this;
    //姓
    let lastname = this.data.lastname;
    console.log(lastname);
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
    for (let i = 0; i < ifsValue.length; i++) {
      ifs[i] = ifsValue[i].checked;
    }
    //其他
    let otherTxt = this.data.otherTxt;
    //关系
    let relationShip = this.data.relationShipIndex;
    let user = { 
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
      relationShip: relationShip
    };
    //更新全局变量
    if (this.data.infoUserIndex==1){
      //修改信息人
      let infoUsers = this.data.infoUsers;
      let name = lastname + firstname;
      infoUsers.push(name);
      this.setData({
        infoUsers: infoUsers,
        infoUserIndex: 0
      });
      app.globalData.users.push(user);
      user = app.globalData.users[0];
      this.setUserInfo(user);
    }else{
      app.globalData.users[this.data.infoUserIndex] = user;
    }
    let param = {};
    param.lastname = lastname;
    param.firstname = firstname;
    param.id_gender = id_gender;
    param.birthday = birthday;
    param.occupation = occupation;
    param.living_status = living_status;
    param.home_type = home_type;
    param.health_status = health_status;
    param.special_care = special_care;

    this.setData({
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
    //调用API新增或修改用户信息
    // API.updateUserInfo(this,function(res){
    //   console.log(res);
    // },param);
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
    let user = app.globalData.users[e.detail.value];
    this.setUserInfo(user);
    this.setData({
      infoUserIndex: e.detail.value
    });
  },
  bindRelationShipChange: function (e) {
    this.setData({
      relationShipIndex: e.detail.value
    });
  },
  bindRegionChange: function (e) {
    console.log('picker sex 发生选择改变，索引值为', e.detail.value);
    console.log("选中的id值:" + this.data.regions[e.detail.value].id);
    this.setData({
      regionIndex: e.detail.value
    });
  },
  ifsChange: function (e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value);

    var ifs = this.data.ifs, values = e.detail.value;
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
  bindOtherTxtChange: function (e) {
    this.setData({
      otherTxt: e.detail.value
    })
  }
});