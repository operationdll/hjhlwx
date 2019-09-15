//获取工具类
const util = require('../../utils/util.js');
//获取API
const API = require('../../utils/api.js');

Page({
  data: {
    sexes: [{ name: "男", id: 1 }, { name: "女", id: 2 }],
    sexIndex: 0,
    livings: ["独居", "与配偶同住", "与子女同住", "与保姆同住"], 
    livingIndex: 0,
    flats: ["私人屋苑", "宿舍楼(无电梯)", "平房"],
    flatIndex: 0,
    diseases: ["健康良好", "长期病患", "曾施手术", "失明", "失聪", "其他"],
    diseaseIndex: 0,
    scares: ["无",  "有"],
    scareIndex: 0,
    ifs: ["鼻胃管", "留置导尿管", "长期氧气", "气管造口", "腹膜透析", "直肠造口", "压疮", "其他"],
    ifsIndex: 0,
    birthDate: util.getToday(),
    flag: true,
    showIfs: true,
    lastname: '',
    firstname: '',
    occupation: '',
    address:'',
    infoUsers: ["本人信息", "家属信息"],
    infoUserIndex: 0,
  },
  submitForm: function () {
    var that = this;
    //姓
    let lastname = this.data.lastname;
    console.log(lastname);
    if (lastname==""){
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
    let id_gender = this.data.sexes[this.data.sexIndex].id;
    //出生日期
    let birthday = this.data.birthDate;
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
    if (occupation == "") {
      wx.showToast({
        title: '请填写退休前职业',
        icon: 'none',
        duration: 2000
      });
      return;
    }
    //目前居住状态
    let living_status = this.data.livings[this.data.livingIndex];
    //住所类别
    let home_type = this.data.flats[this.data.flatIndex];
    //疾病
    let health_status = this.data.diseases[this.data.diseaseIndex];
    //特别护理
    let special_care = this.data.scares[this.data.scareIndex];
    if ("无" != special_care){
      special_care = this.data.ifs[this.data.ifsIndex];
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
    setTimeout(function () {
      that.setData({
        flag: true
      });
    }, 2000);
    //调用API新增或修改用户信息
    // API.updateUserInfo(this,function(res){
    //   console.log(res);
    // },param);
  },
  bindLnameChange: function (e) {
    this.setData({
      lastname: e.detail.value
    })
  },
  bindFnameChange: function (e) {
    this.setData({
      firstname: e.detail.value
    })
  },
  bindOccChange: function (e) {
    this.setData({
      occupation: e.detail.value
    })
  },
  bindSexChange: function (e) {
    console.log('picker sex 发生选择改变，索引值为', e.detail.value);
    console.log("选中的id值:" + this.data.sexes[e.detail.value].id);
    this.setData({
      sexIndex: e.detail.value
    });
  },
  bindDateChange: function (e) {
    this.setData({
      birthDate: e.detail.value
    })
  },
  bindLivingChange: function (e) {
    this.setData({
      livingIndex: e.detail.value
    });
  },
  bindFlatChange: function (e) {
    this.setData({
      flatIndex: e.detail.value
    });
  },
  bindDiseaseChange: function (e) {
    this.setData({
      diseaseIndex: e.detail.value
    });
  },
  bindScareChange: function (e) {
    if (e.detail.value==0){
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
  bindIfsChange: function (e) {
    this.setData({
      ifsIndex: e.detail.value
    });
  },
  bindAddressChange: function (e) {
    this.setData({
      address: e.detail.value
    })
  },
  bindInfoUserChange: function (e) {
    this.setData({
      infoUserIndex: e.detail.value
    });
  }
});