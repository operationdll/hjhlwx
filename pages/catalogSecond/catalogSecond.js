//获取工具类
const util = require('../../utils/util.js');

Page({
  data: {
    flag: true,
    title:'',
    care:1,
    products: [],
  },
  onLoad: function (options) {
    let title = '';
    let products = [];
    let catalog = {};
    if ('1' == options.care || '2' == options.care){
      if ('1' == options.care){
        title = '基础护理';
        catalog = { value: 1, content: '老人照护(针对失能或半失能老人提供卧床擦浴、洗头等基本生活护理、及日常照护和营养指导、心理疏导、用药指导)' };
        products.push(catalog);
      }else{
        title = '临床护理';
        catalog = { value: 2,  content: '病患照护(针对因病患者离开医院回家休养康复提供卧床擦浴、洗头等基本生活护理、及日常照护和营养指导、心理疏导、灵性关怀)' };
        products.push(catalog);
      }
      catalog = { value: 3, content: '晚晴关怀(生活护理与指导;心理疏导;专业护理和指导;疼痛护理和指导;灵性关怀)' };
      products.push(catalog);
      catalog = { value: 4, content: '陪诊陪护(全程陪诊、协助挂号、取药、帮组梳理病情、给予用药指导)' };
      products.push(catalog);
      catalog = { value: 5, content: '康复护理(协助功能锻炼、肢体康复按摩)' };
      products.push(catalog);
      catalog = { value: 6, content: '慢病管理(高血压、糖尿病、肺心病等患者生命体征测量和记录，整理常规用药及并发症的预防指导)', checked: true };
      products.push(catalog);
    } else if ('3' == options.care) {
      title = '特别护理';
      catalog = { value: 8, content: '压疮护理(压仓的风险预防、分级评估;初期压疮的护理、换药及局部皮肤的按摩)' };
      products.push(catalog);
      catalog = { value: 9, content: '伤口换药(上门观察伤口情況, 作相应处理; 保持创面清洁, 清除伤口異物, 保持和防止伤口受损和外來感染。促进组织生长伤口愈合)' };
      products.push(catalog);
    }
    catalog = { value: 7, content: '健康规划(个性化护理记录，检测健康进度，提供健康规划指导)', checked: true };
    products.push(catalog);

    this.setData({
      title: title,
      products: products,
      care: options.care
    });
  },
  bindCareTap: function (event) {
    //选中的按钮
    let careDate = event.currentTarget.dataset.care;
    wx.navigateTo({
      url: '../porder/porder?care=' + careDate + '&title=' + this.data.title
    });
  },
  productChange: function (e) {
    if (e.detail.value.join(",").indexOf('6')==-1&&this.data.care!="3"){
      e.detail.value.push("6");
    }
    if (e.detail.value.join(",").indexOf('7') == -1) {
      e.detail.value.push("7");
    }

    console.log('checkbox发生change事件，携带value值为：', e.detail.value);

    var products = this.data.products, values = e.detail.value;
    for (var i = 0, lenI = products.length; i < lenI; ++i) {
      products[i].checked = false;

      for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (products[i].value == values[j]) {
          products[i].checked = true;
          break;
        }
      }
    }

    this.setData({
      products: products
    });

  }
});