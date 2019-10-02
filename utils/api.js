const API_URL = "https://icare.easyiservice.com/api";
const KEY = "G56HG9LL8J51Q76SFWILWV972QD9JXF1";

//API公用方法
const baseAPI = (that, url, method, callback, param = {}) => {
  //调用api
  wx.showLoading({
    title: '加载中',
  });
  that.setData({
    flag: false
  });
  wx.request({
    url: API_URL + url + "?output_format=JSON" + "&ws_key=" + KEY,
    method: method,
    data: param,
    success(res) {
      callback(res);
    },
    fail: function (res) {
      wx.showToast({
        title: '请求错误',
        icon: 'loading',
        duration: 2000
      })
    },
    complete: function () {
      wx.hideLoading();
      that.setData({
        flag: true
      });
    }
  });
}

//APIPostXMl数据
const basePostXML = (that, url, callback, xml) => {
  //调用api
  wx.showLoading({
    title: '加载中',
  });
  that.setData({
    flag: false
  });
  wx.request({
    url: API_URL + url + "?output_format=JSON" + "&ws_key=" + KEY,
    method: 'POST',
    data: xml,
    header: { 'content-type': 'text/xml' },
    success(res) {
      callback(res);
    },
    fail: function (res) {
      wx.showToast({
        title: '请求错误',
        icon: 'loading',
        duration: 2000
      })
    },
    complete: function () {
      wx.hideLoading();
      that.setData({
        flag: true
      });
    }
  });
}

//获取一级项目列表
const getFristCatalogs = (that, callback) => {
  let param = {};
  param.display = 'full';
  baseAPI(that, '/hotels', 'GET', callback, param);
}

//登陆
const login = (that, callback) => {
  baseAPI(that, '/login', 'POST', callback);
}

//修改用户信息
const updateUserInfo = (that, callback, param) => {
  param.schema = 'synopsis';
  baseAPI(that, '/customers', 'POST', callback, param);
}

//根据code获取用户信息
const getCustomer = (that, callback, param) => {
  baseAPI(that, '/customers', 'GET', callback, param);
}

//创建用户信息
const createCustomer = (that, callback, param) => {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
            <prestashop xmlns:xlink="http://www.w3.org/1999/xlink">
                <customer>
                <active required="true" format="isBool">1</active>
                    <lastname required="true" maxSize="32" format="isName">`+ param.lastname + `</lastname>
                    <firstname required="true" maxSize="32" format="isName">`+ param.firstname + `</firstname>
                    <email required="true" maxSize="128" format="isEmail">email@icare.com</email>
                    <passwd required="true" maxSize="32" format="isPasswd">passwdpasswd</passwd>
                    <id_gender format="isUnsignedId">`+ param.id_gender + `</id_gender>
                    <birthday format="isBirthDate">`+ param.birthday + `</birthday>
                    <user_name maxSize="200">`+ param.user_name + `</user_name>
                    <phone required="true" maxSize="200">`+ param.phone + `</phone>
                    <occupation required="true" maxSize="3000">`+ param.occupation + `</occupation>
                    <living_status required="true" maxSize="200">`+ param.living_status + `</living_status>
                    <home_type required="true" maxSize="200">`+ param.home_type + `</home_type>
                    <health_status required="true" maxSize="200">`+ param.health_status + `</health_status>
                    <special_care required="true" maxSize="200">`+ param.special_care + `</special_care>
                    <special_care_detail maxSize="3000">`+ param.special_care_detail + `</special_care_detail>
                    <id_global_demand required="true">`+ param.id_global_demand + `</id_global_demand>
                    <login_type>1</login_type>
                    <address required="true">`+ param.address + `</address>
                </customer>
            </prestashop>`;
  basePostXML(that, '/customers', callback, xml);
}

//创建亲戚信息
const addCustomer = (that, callback, param) => {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
            <prestashop xmlns:xlink="http://www.w3.org/1999/xlink">
                <address>
                    <id_customer required="true" format="isNullOrUnsignedId">`+ param.id + `</id_customer>
                    <id_country required="true" format="isUnsignedId">5</id_country>
                    <alias required="true" maxSize="32" format="isGenericName">email@icare.com</alias>
                    <lastname required="true" maxSize="32" format="isName">`+ param.lastname + `</lastname>
                    <firstname required="true" maxSize="32" format="isName">`+ param.firstname + `</firstname>
                    <address1 required="true" maxSize="128" format="isAddress">`+ param.address + `</address1>
                    <phone maxSize="32" format="isPhoneNumber">`+ param.phone + `</phone>
                    <phone_mobile maxSize="32" format="isPhoneNumber">phone_mobile</phone_mobile>
                    <id_gender required="true">`+ param.id_gender + `</id_gender>
                    <birthday required="true" format="isDate">`+ param.birthday + `</birthday>
                    <id_global_demand required="true">`+ param.id_global_demand + `</id_global_demand>
                    <occupation maxSize="3000">`+ param.occupation + `</occupation>
                    <living_status maxSize="200">`+ param.living_status + `</living_status>
                    <home_type maxSize="200">`+ param.home_type + `</home_type>
                    <health_status maxSize="200">`+ param.health_status + `</health_status>
                    <health_status_detail maxSize="3000">health_status_detail</health_status_detail>
                    <special_care maxSize="200">`+ param.special_care + `</special_care>
                    <special_care_detail maxSize="3000">`+ param.special_care_detail + `</special_care_detail>
                    <relationship maxSize="200">`+ param.relationship + `</relationship>
                </address>
            </prestashop>`;
  basePostXML(that, '/addresses', callback, xml);
}

//获取区域信息
const getArea = (that, callback, param) => {
  baseAPI(that, '/global_demand', 'GET', callback, param);
}

module.exports = {
  login,
  updateUserInfo,
  getFristCatalogs,
  getCustomer,
  createCustomer,
  getArea,
  addCustomer
}