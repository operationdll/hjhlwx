(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/porder/porder"],{"06df":function(t,e,a){"use strict";a.r(e);var n=a("f3d7"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,function(){return n[t]})}(r);e["default"]=i.a},"25b9":function(t,e,a){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},i=[];a.d(e,"a",function(){return n}),a.d(e,"b",function(){return i})},5787:function(t,e,a){"use strict";(function(t){a("faf8"),a("921b");n(a("66fd"));var e=n(a("678b"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},"678b":function(t,e,a){"use strict";a.r(e);var n=a("25b9"),i=a("06df");for(var r in i)"default"!==r&&function(t){a.d(e,t,function(){return i[t]})}(r);a("e011");var s=a("2877"),o=Object(s["a"])(i["default"],n["a"],n["b"],!1,null,null,null);e["default"]=o.exports},e011:function(t,e,a){"use strict";var n=a("e93f"),i=a.n(n);i.a},e93f:function(t,e,a){},f3d7:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=i(a("3680"));function i(t){return t&&t.__esModule?t:{default:t}}var r={data:function(){return{care:0,flag:!0,radioItems:[{name:"500/4小时",value:"0",total:500,checked:!0},{name:"280/2小时",value:"1",total:280,checked:!1}],dateStart:n.default.dateAddDay(1),start:n.default.dateAddDay(1),end:n.default.dateAddDay(31),total:500,regions:["a","b"],regionIndex:0,ycode:"",title:"",service:"4小时",time:"11:00",titles1:"",titles2:"",infoUsers:["本人"],infoUserIndex:0,address:"",bntDis:!1}},onLoad:function(t){this;var e="当天下单",a="当天服务";if(1!=t.care)e="预约下单",a="预订时间服务";else{var i=new Date;i.getHours()>15&&(this.bntDis=!0),this.dateStart=n.default.getToday()}this.care=t.care,this.title=t.title,this.titles1=e,this.titles2=a;var r=getApp().globalData.users;if(r.length>2)for(var s=2;s<r.length;s++){var o=r[s].lastname+r[s].firstname;this.infoUsers.push(o)}},methods:{radioChange:function(t){for(var e=0;e<this.radioItems.length;e++)this.radioItems[e].checked=t==e},bindInfoUserChange:function(t){this.infoUserIndex=t.target.value},bindRegionChange:function(t){this.regionIndex=t.target.value},bindTimeChange:function(t){this.time=t.target.value},bindDateChange:function(t){this.dateStart=t.target.value},submitForm:function(){if(1==this.care){var e=new Date,a=new Date(n.default.getToday()+" "+this.time),i=e.getTime(),r=a.getTime(),s=r-i,o=Math.round(s/6e4);if(o<180)return void t.showToast({title:"服务需提前3小时预订",image:"../../static/info-icon.png",duration:2e3})}var d="aaaa",u="/pages/settlement/settlement?region="+this.regions[this.regionIndex]+"&ycode="+this.ycode+"&title="+this.title+"&total="+this.total+"&service="+this.service+"&start="+this.dateStart+"&time="+this.time+"&userName="+d+"&address="+this.address;t.navigateTo({url:u})}}};e.default=r}).call(this,a("6e42")["default"])}},[["5787","common/runtime","common/vendor"]]]);