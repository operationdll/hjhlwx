(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/user"],{"11f9":function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement;e._self._c},a=[];s.d(t,"a",function(){return i}),s.d(t,"b",function(){return a})},"9ce7":function(e,t,s){"use strict";s.r(t);var i=s("11f9"),a=s("de1c");for(var n in a)"default"!==n&&function(e){s.d(t,e,function(){return a[e]})}(n);s("afbc");var o=s("2877"),r=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,null,null);t["default"]=r.exports},a42e:function(e,t,s){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,a=o(s("a096")),n=o(s("3680"));function o(e){return e&&e.__esModule?e:{default:e}}var r={data:function(){return{sexes:[{name:"男",id:1},{name:"女",id:2}],sexIndex:0,livings:getApp().globalData.livings,livingIndex:0,flats:getApp().globalData.flats,flatIndex:0,diseases:getApp().globalData.diseases,diseaseIndex:0,scares:getApp().globalData.scares,scareIndex:0,ifs:[],birthDate:"",showIfs:!0,showOther:!0,lastname:"",firstname:"",occupation:"",address:"",infoUserIndex:0,relationship:["本人"],relationshipIndex:0,phone:"",regions:getApp().globalData.regions,regionIndex:0,otherTxt:"",end:n.default.getToday(),showDelBnt:!0}},onLoad:function(e){i=this,this.ifs=getApp().globalData.ifs.slice();var t=getApp().globalData.users[e.userIndex];0!=e.userIndex&&(this.relationship=["父母亲","兄弟","姐妹","儿女","夫妻"]),this.setUserInfo(t),this.infoUserIndex=e.userIndex,e.userIndex>1?this.showDelBnt=!1:1==e.userIndex&&(this.address=getApp().globalData.users[0].address)},methods:{setUserInfo:function(e){0==e.scares?this.showIfs=!0:this.showIfs=!1;for(var t=!0,s=this.ifs,i=0;i<e.ifs.length;i++)s[i].checked=e.ifs[i],7==i&&(t=!e.ifs[i]);this.lastname=e.lastname,this.firstname=e.firstname,this.sexIndex=e.sexes,this.birthDate=e.birthDate,this.phone=e.phone,this.regionIndex=e.regions,this.address=e.address,this.occupation=e.occupation,this.livingIndex=e.livings,this.flatIndex=e.flats,this.diseaseIndex=e.diseases,this.scareIndex=e.scares,this.otherTxt=e.otherTxt,this.relationshipIndex=e.relationship,this.ifs=s,this.showOther=t},bindDateChange:function(e){this.birthDate=e.target.value},bindLivingChange:function(e){this.livingIndex=e.target.value},bindFlatChange:function(e){this.flatIndex=e.target.value},bindDiseaseChange:function(e){this.diseaseIndex=e.target.value},bindSexChange:function(e){this.sexIndex=e.target.value},ifsChange:function(e){this.ifs[e].checked=!this.ifs[e].checked,this.showOther=!this.ifs[7].checked},submitForm:function(){var t=this.lastname;if(""!=t){var s=this.firstname;if(""!=s){var n=this.sexIndex,o=this.birthDate,r=this.phone;if(""!=r){var d=this.regionIndex,l=this.address;if(""!=l){for(var h=this.occupation,u=this.livingIndex,c=this.flatIndex,f=this.diseaseIndex,g=this.scareIndex,p=this.ifs,m=[],x=[],b=0;b<p.length;b++)m[b]=p[b].checked,m[b]&&x.push(p[b].name);var I=this.otherTxt,v=this.relationshipIndex,w={id:0,lastname:t,firstname:s,sexes:n,birthDate:o,phone:r,regions:d,address:l,occupation:h,livings:u,flats:c,diseases:f,scares:g,ifs:m,otherTxt:I,relationship:v};e.login({provider:"weixin",success:function(e){var p=e.code,m={};m.id=getApp().globalData.users[i.infoUserIndex].id,m.lastname=t,m.firstname=s,n=i.sexes[n].id,m.id_gender=n,m.birthday=o,m.user_name=p,m.occupation=h,m.living_status=i.livings[u],m.home_type=i.flats[c],m.health_status=i.diseases[f],m.special_care=i.scares[g],""!=I&&x.push(I),m.special_care_detail=x,m.id_global_demand=i.regions[d].id,m.address=l,m.phone=r,m.relationship=i.relationship[v],m.nickName=getApp().globalData.nickName,0==i.infoUserIndex?0==m.id?a.default.createCustomer(function(e){i.addUser(e.data.customer,w,!0)},m):a.default.updateUser(function(e){w.id=m.id,i.updateUser(e,w)},m):0==m.id?(m.id=getApp().globalData.users[0].id,a.default.addCustomer(function(e){i.addUser(e.data.address,w,!1)},m)):(m.main=getApp().globalData.users[0].id,a.default.updateMember(function(e){w.id=m.id,i.updateUser(e,w)},m))}})}else e.showToast({title:"请填写详细地址",image:"../../static/info-icon.png",mask:!0})}else e.showToast({title:"请填写手机号",image:"../../static/info-icon.png",mask:!0})}else e.showToast({title:"请填写用户名",image:"../../static/info-icon.png",mask:!0})}else e.showToast({title:"请填写用户姓",image:"../../static/info-icon.png",mask:!0})},addUser:function(t,s,i){void 0!==t?(s.id=t.id,i?(getApp().globalData.users[0]=s,getApp().globalData.isNewUser=!1):getApp().globalData.users.push(s),e.showToast({title:"添加成功",image:"../../static/info-icon.png",mask:!0}),setTimeout(function(){e.switchTab({url:"/pages/userList/userList"})},2e3)):e.showToast({title:"添加失败",image:"../../static/info-icon.png",mask:!0})},updateUser:function(t,s){400==t.statusCode?e.showToast({title:"修改失败",image:"../../static/info-icon.png",mask:!0}):(getApp().globalData.users[i.infoUserIndex]=s,e.showToast({title:"修改成功",image:"../../static/info-icon.png",mask:!0}),setTimeout(function(){e.switchTab({url:"/pages/userList/userList"})},2e3))},bindScareChange:function(e){0==e.detail.value?(this.ifs.forEach(function(e){e.checked=!1}),this.otherTxt="",this.showIfs=!0,this.showOther=!0):this.showIfs=!1,this.scareIndex=e.detail.value},bindRelationShipChange:function(e){this.relationshipIndex=e.detail.value},bindRegionChange:function(e){this.regionIndex=e.detail.value},deleteUser:function(t){var s=getApp().globalData.users[this.infoUserIndex].id,n={id:s};e.showModal({title:"提示",content:"是否删除该信息",success:function(t){t.confirm&&a.default.deleteUser(function(t){200==t.statusCode?(getApp().globalData.users.splice(i.infoUserIndex,1),e.showToast({title:"删除成功",image:"../../static/info-icon.png",mask:!0}),setTimeout(function(){e.switchTab({url:"/pages/userList/userList"})},2e3)):e.showToast({title:"删除失败",image:"../../static/info-icon.png",mask:!0})},n)}})}}};t.default=r}).call(this,s("543d")["default"])},afbc:function(e,t,s){"use strict";var i=s("b677"),a=s.n(i);a.a},b677:function(e,t,s){},d304:function(e,t,s){"use strict";(function(e){s("faf8"),s("921b");i(s("66fd"));var t=i(s("9ce7"));function i(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,s("543d")["createPage"])},de1c:function(e,t,s){"use strict";s.r(t);var i=s("a42e"),a=s.n(i);for(var n in i)"default"!==n&&function(e){s.d(t,e,function(){return i[e]})}(n);t["default"]=a.a}},[["d304","common/runtime","common/vendor"]]]);