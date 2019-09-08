//获取工具类
const util = require('../../utils/util.js');

Page({
  data: {
    flag: true,
    title:'',
    catalogs:[]
  },
  onLoad: function (options) {
    let title = '';
    let catalogs = [];
    let catalog = {};
    if ('1' == options.care || '2' == options.care){
      if ('1' == options.care){
        title = '基础护理';
        catalog = { title: '老人照护', content: '针对失能或半失能老人提供卧床擦浴、洗头等基本生活护理、及日常照护和营养指导、心理疏导、用药指导' };
        catalogs.push(catalog);
      }else{
        title = '临床护理';
        catalog = { title: '病患照护', content: '针对因病患者离开医院回家休养康复提供卧床擦浴、洗头等基本生活护理、及日常照护和营养指导、心理疏导、灵性关怀' };
        catalogs.push(catalog);
      }
      catalog = { title: '晚晴关怀', content: '生活护理与指导;心理疏导;专业护理和指导;疼痛护理和指导;灵性关怀' };
      catalogs.push(catalog);
      catalog = { title: '陪诊陪护', content: '全程陪诊、协助挂号、取药、帮组梳理病情、给予用药指导' };
      catalogs.push(catalog);
      catalog = { title: '康复护理', content: '协助功能锻炼、肢体康复按摩' };
      catalogs.push(catalog);
      catalog = { title: '慢病管理', content: '高血压、糖尿病、肺心病等患者生命体征测量和记录，整理常规用药及并发症的预防指导' };
      catalogs.push(catalog);
      catalog = { title: '健康规划', content: '个性化护理记录，检测健康进度，提供健康规划指导' };
      catalogs.push(catalog);
    } else if ('3' == options.care) {
      title = '特别护理';
      catalog = { title: '压疮护理', content: '压仓的风险预防、分级评估;初期压疮的护理、换药及局部皮肤的按摩' };
      catalogs.push(catalog);
      catalog = { title: '健康规划', content: '个性化护理记录，检测健康进度，提供健康规划指导' };
      catalogs.push(catalog);
    }
    this.setData({
      title: title,
      catalogs: catalogs
    });
  }
});