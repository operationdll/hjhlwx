(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"002b":function(e,t,a){"use strict";a.r(t);var n=a("72c6"),i=a.n(n);for(var s in n)"default"!==s&&function(e){a.d(t,e,function(){return n[e]})}(s);t["default"]=i.a},6895:function(e,t,a){"use strict";var n=a("a5d9"),i=a.n(n);i.a},"72c6":function(e,t,a){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,s=o(a("a096"));o(a("3680"));function o(e){return e&&e.__esModule?e:{default:e}}var r={data:function(){return{}},onLoad:function(){i=this,s.default.getArea(function(e){var t=e.data.htl_room_type_global_demands;t&&t.length>0&&(getApp().globalData.regions=t)},{display:"full",output_format:"JSON"})},methods:{getuserinfo:function(t){t.detail.iv?e.login({provider:"weixin",success:function(e){var t=e.code;i.getCustom(t)}}):e.showToast({title:"登陆失败",image:"../../static/info-icon.png",duration:2e3})},getCustom:function(t){s.default.getCustomer(function(t){if(void 0!==t.data.customers){var a=t.data.customers;getApp().globalData.isNewUser=!1;var n=a[0];if(n.address1=n.address,n.id_address=n.id,n.relationship=0,getApp().globalData.users[0]=i.addUsers(n),void 0!==n.associations)for(var s=n.associations.otherMembers,o=0;o<s.length;o++){var r=i.addUsers(s[o]);getApp().globalData.users.push(r)}e.switchTab({url:"/pages/main/main"})}else e.showToast({title:"请先注册用户信息",image:"../../static/info-icon.png",duration:2e3}),setTimeout(function(){e.switchTab({url:"/pages/user/user"})},2e3)},{display:"full","filter[user_name]":"["+t+"]","filter[login_type]":"1"})},appWxLogin:function(){e.showLoading({title:"加载中",mask:!0}),e.getProvider({service:"oauth",success:function(t){~t.provider.indexOf("weixin")?e.login({provider:"weixin",success:function(t){e.showModal({title:"提示",content:JSON.stringify(t),success:function(e){e.confirm?i.getCustom(t.code):e.cancel&&console.log(n("用户点击取消"," at pages/index/index.vue:144"))}})},fail:function(t){e.showModal({title:"提示",content:"登陆失败,"+JSON.stringify(t.errMsg),success:function(e){}})}}):e.showToast({title:"请先安装微信",image:"../../static/info-icon.png",duration:2e3})},fail:function(){e.showToast({title:"登陆失败",image:"../../static/info-icon.png",duration:2e3})},complete:function(){e.hideLoading()}})},addUsers:function(e){var t={id:e.id_address,lastname:e.lastname,firstname:e.firstname,sexes:0,birthDate:e.birthday,phone:e.phone,regions:0,address:e.address1,occupation:e.occupation,livings:0,flats:0,diseases:0,scares:0,ifs:[!1,!1,!1,!1,!1,!1,!1,!1],otherTxt:"",relationship:0},a=e.id_gender;2==a&&(t.sexes=1);for(var n=getApp().globalData.livings,i=0,s=0;s<n.length;s++)e.living_status==n[s]&&(i=s);t.livings=i;for(var o=getApp().globalData.flats,r=0,l=0;l<o.length;l++)e.home_type==o[l]&&(r=l);t.flats=r;for(var u=getApp().globalData.diseases,c=0,d=0;d<u.length;d++)e.health_status==u[d]&&(c=d);t.diseases=c;for(var f=getApp().globalData.scares,g=0,p=0;p<f.length;p++)e.special_care==f[p]&&(g=p);t.scares=g;var v=getApp().globalData.ifs,h=[];null!=e.special_care_detail&&(h=e.special_care_detail.split(","));for(var m=0;m<v.length;m++)for(var b=0;b<h.length;b++)h[b]==v[m].name&&(t.ifs[m]=!0,h[b]="");for(var _="",w=0;w<h.length;w++)""!=h[w]&&(_=h[w]);t.otherTxt=_;for(var x=getApp().globalData.regions,A=0,D=0;D<x.length;D++)e.id_global_demand==x[D].id&&(A=D);t.regions=A;var y=e.relationship;return y="兄弟"==y?1:"姐妹"==y?2:"儿女"==y?3:0,t.relationship=y,t}}};t.default=r}).call(this,a("6e42")["default"],a("0de9")["default"])},a5d9:function(e,t,a){},b114:function(e,t,a){"use strict";(function(e){a("faf8"),a("921b");n(a("66fd"));var t=n(a("ca28"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},ca28:function(e,t,a){"use strict";a.r(t);var n=a("ec0e"),i=a("002b");for(var s in i)"default"!==s&&function(e){a.d(t,e,function(){return i[e]})}(s);a("6895");var o=a("2877"),r=Object(o["a"])(i["default"],n["a"],n["b"],!1,null,null,null);t["default"]=r.exports},ec0e:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement;e._self._c},i=[];a.d(t,"a",function(){return n}),a.d(t,"b",function(){return i})}},[["b114","common/runtime","common/vendor"]]]);