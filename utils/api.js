const API_URL = "https://icare.easyiservice.com/api";
const KEY = "G56HG9LL8J51Q76SFWILWV972QD9JXF1";

//API公用方法
const baseAPI = (that, url, method, callback, param = {}) => {
  //设置api访问的key和格式
  param.ws_key = KEY;
  param.output_format = 'JSON';
  //调用api
  wx.showLoading({
    title: '加载中',
  });
  that.setData({
    flag: false
  });
  wx.request({
    url: API_URL + url,
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

module.exports = {
  login,
  updateUserInfo,
  getFristCatalogs
}
