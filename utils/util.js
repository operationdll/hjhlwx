const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

//获取当前日期
const getToday = () => {
  let date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return [year, month, day].map(formatNumber).join('-');
}

//显示遮蔽层(页面data中必须带flag参数)
const showLoading = (that,title) =>{
  wx.showLoading({
    title: title,
  });
  that.setData({
    flag: false
  });
}

//隐藏遮蔽层(页面data中必须带flag参数)
const hideLoading = that => {
  wx.hideLoading();
  that.setData({
    flag: true
  });
}

//计算日期差(天)
const dateDif = (startTime, endTime) => {
  //日期格式化
  var start_date = new Date(startTime.replace(/-/g, "/"));
  var end_date = new Date(endTime.replace(/-/g, "/"));
  //转成毫秒数，两个日期相减
  var ms = end_date.getTime() - start_date.getTime();
  //转换成天数
  var day = parseInt(ms / (1000 * 60 * 60 * 24));
  return day;
}

module.exports = {
  formatTime,
  showLoading,
  hideLoading,
  getToday,
  dateDif
}
