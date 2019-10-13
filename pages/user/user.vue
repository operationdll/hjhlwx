<template>
	<view class="page">
		<view class="page__hd">
			<view class="page__title">个人中心</view>
		</view>
		<view class="page__bd">
			<view class="weui-cells weui-cells_after-title">
				<view class="weui-cell" style="display: -webkit-box;display: -webkit-flex;display: flex;">
					<view class="weui-cell__hd">
						<text class="redStart">*</text>
						<view class="weui-label">姓:</view>
					</view>
					<view class="weui-cell__bd">
						<input class="weui-input" placeholder="请输入" v-model="lastname" />
					</view>
				</view>
			</view>
			<view class="weui-cells__title"></view>
			<view class="weui-cells weui-cells_after-title">
				<view class="weui-cell" style="display: -webkit-box;display: -webkit-flex;display: flex;">
					<view class="weui-cell__hd">
						<text class="redStart">*</text>
						<view class="weui-label">名:</view>
					</view>
					<view class="weui-cell__bd">
						<input class="weui-input" placeholder="请输入" v-model="firstname" />
					</view>
				</view>
			</view>
			<view class="weui-cells__title"></view>
			<view class="weui-cells weui-cells_after-title">
				<view class="weui-cell" style="display: -webkit-box;display: -webkit-flex;display: flex;">
					<view class="weui-cell__hd">
						<text class="redStart">*</text>
						<view class="weui-label">性别:</view>
					</view>
					<view class="weui-cell__bd">
						<picker @change="bindSexChange" :value="sexIndex" :range="sexes" range-key="name">
							<view class="uni-input">{{sexes[sexIndex].name}}</view>
						</picker>
					</view>
				</view>
			</view>
			<view class="weui-cells__title"></view>
			<view class="weui-cells weui-cells_after-title">
				<view class="weui-cell" style="display: -webkit-box;display: -webkit-flex;display: flex;">
					<view class="weui-cell__hd">
						<text class="redStart">*</text>
						<view class="weui-label">出生日期:</view>
					</view>
					<picker mode="date" :value="birthDate" start="1900-01-01" end="end" @change="bindDateChange">
						<view class="uni-input">{{birthDate}}</view>
					</picker>
				</view>
			</view>
			<view class="weui-cells__title"></view>
			<view class="weui-cells weui-cells_after-title">
				<view class="weui-cell" style="display: -webkit-box;display: -webkit-flex;display: flex;">
					<view class="weui-cell__hd">
						<text class="redStart">*</text>
						<view class="weui-label">手机号:</view>
					</view>
					<view class="weui-cell__bd">
						<input class="weui-input" type="number" placeholder="请输入手机号" v-model="phone" />
					</view>
				</view>
			</view>
			<view class="weui-cells__title"></view>
			<view class="weui-cells weui-cells_after-title">
				<view class="weui-cell" style="display: -webkit-box;display: -webkit-flex;display: flex;">
					<view class="weui-cell__hd">
						<text class="redStart">*</text>
						<view class="weui-label">服务区域:</view>
					</view>
					<view class="weui-cell__bd">
						<picker @change="bindRegionChange" :value="regionIndex" :range="regions" range-key="name">
							<view class="uni-input">{{regions[regionIndex].name}}</view>
						</picker>
					</view>
				</view>
			</view>
			<view class="weui-cells__title"></view>
			<view class="weui-cells weui-cells_after-title">
				<view class="weui-cell" style="display: -webkit-box;display: -webkit-flex;display: flex;">
					<view class="weui-cell__hd">
						<text class="redStart">*</text>
						<view class="weui-label">详细地址:</view>
					</view>
					<view class="weui-cell__bd" style="flex-direction: row;display: flex;">
						<input class="weui-input" placeholder="请输入" v-model="address" style="width: 320rpx;"/>
						<text style="color: red;border-bottom: 1px red solid;font-size: 10;" @click="userAddress" v-if="!showDelBnt">本人地址</text>
					</view>
				</view>
			</view>
			<view class="weui-cells__title"></view>
			<view class="weui-cells weui-cells_after-title">
				<view class="weui-cell" style="display: -webkit-box;display: -webkit-flex;display: flex;">
					<view class="weui-cell__hd">
						<view class="weui-label">退休前职业:</view>
					</view>
					<view class="weui-cell__bd">
						<input class="weui-input" placeholder="请输入" v-model="occupation" />
					</view>
				</view>
			</view>
			<view class="weui-cells__title"></view>
			<view class="weui-cells weui-cells_after-title">
				<view class="weui-cell" style="display: -webkit-box;display: -webkit-flex;display: flex;">
					<view class="weui-cell__hd">
						<view class="weui-label">目前居住状态:</view>
					</view>
					<view class="weui-cell__bd">
						<picker @change="bindLivingChange" :value="livingIndex" :range="livings">
							<view class="uni-input">{{livings[livingIndex]}}</view>
						</picker>
					</view>
				</view>
			</view>
			<view class="weui-cells__title"></view>
			<view class="weui-cells weui-cells_after-title">
				<view class="weui-cell" style="display: -webkit-box;display: -webkit-flex;display: flex;">
					<view class="weui-cell__hd">
						<view class="weui-label">住所类别:</view>
					</view>
					<view class="weui-cell__bd">
						<picker @change="bindFlatChange" :value="flatIndex" :range="flats">
							<view class="uni-input">{{flats[flatIndex]}}</view>
						</picker>
					</view>
				</view>
			</view>
			<view class="weui-cells__title"></view>
			<view class="weui-cells weui-cells_after-title">
				<view class="weui-cell" style="display: -webkit-box;display: -webkit-flex;display: flex;">
					<view class="weui-cell__hd">
						<text class="redStart">*</text>
						<view class="weui-label">疾病:</view>
					</view>
					<view class="weui-cell__bd">
						<picker @change="bindDiseaseChange" :value="diseaseIndex" :range="diseases">
							<view class="uni-input">{{diseases[diseaseIndex]}}</view>
						</picker>
					</view>
				</view>
			</view>
			<view class="weui-cells__title"></view>
			<view class="weui-cells weui-cells_after-title">
				<view class="weui-cell" style="display: -webkit-box;display: -webkit-flex;display: flex;">
					<view class="weui-cell__hd">
						<text class="redStart">*</text>
						<view class="weui-label">特别护理:</view>
					</view>
					<view class="weui-cell__bd">
						<picker @change="bindScareChange" :value="scareIndex" :range="scares">
							<view class="uni-input">{{scares[scareIndex]}}</view>
						</picker>
					</view>
				</view>
			</view>
			<view class="weui-cells weui-cells_after-title" v-if="!showIfs">
				<view class="weui-cell" style="display: -webkit-box;display: -webkit-flex;display: flex;">
					<view class="weui-cell__hd">
						<view class="weui-label">如有:</view>
					</view>
				</view>
			</view>
			<view v-if="!showIfs">
				<view class="weui-cells weui-cells_checkbox weui-cells_after-title">
					<view class="weui-cell weui-check__label" v-for="(item, index) in ifs" v-bind:key="index" style="display: -webkit-box;display: -webkit-flex;display: flex;"
					 @click="ifsChange(index)">
						<view class="weui-cell__hd weui-check__hd_in-checkbox" style="padding: 20rpx">
							<icon type="circle" v-if="!item.checked"></icon>
							<icon type="success" v-if="item.checked"></icon>
						</view>
						<view class="weui-cell__bd" style="padding: 20rpx;" :class="index==0 ? '' : 'weui-cell-topLine'">{{item.name}}</view>
					</view>
				</view>
			</view>
			<view class="weui-cells weui-cells_after-title" v-if="!showOther">
				<view class="weui-cell" style="display: -webkit-box;display: -webkit-flex;display: flex;">
					<view class="weui-cell__hd">
						<view class="weui-label">其他:</view>
					</view>
					<view class="weui-cell__bd">
						<input class="weui-input" placeholder="请输入" v-model="otherTxt" />
					</view>
				</view>
			</view>
			<view class="weui-cells__title"></view>
			<view class="weui-cells weui-cells_after-title">
				<view class="weui-cell" style="display: -webkit-box;display: -webkit-flex;display: flex;">
					<view class="weui-cell__hd">
						<text class="redStart">*</text>
						<view class="weui-label">关系:</view>
					</view>
					<view class="weui-cell__bd">
						<picker @change="bindRelationShipChange" :value="relationshipIndex" :range="relationship">
							<view class="uni-input">{{relationship[relationshipIndex]}}</view>
						</picker>
					</view>
				</view>
			</view>
			<view class="weui-cells__title"></view>
			<view class="weui-cells weui-cells_after-title">
				<view class="weui-cell" style="display: -webkit-box;display: -webkit-flex;display: flex;">
					<view class="weui-cell__hd">
						<view class="weui-label">信息人:</view>
					</view>
					<view class="weui-cell__bd">
						<picker @change="bindInfoUserChange" :value="infoUserIndex" :range="infoUsers">
							<view class="uni-input">{{infoUsers[infoUserIndex]}}</view>
						</picker>
					</view>
				</view>
			</view>
			<view style="padding: 20rpx 0px;width: 100%;">
				<button class="weui-btn" type="primary" @click="submitForm">确定</button>
				<button class="weui-btn" type="warn" @click="deleteUser" v-if="!showDelBnt">删除</button>
			</view>
		</view>
	</view>
</template>

<script>
	import API from '@/common/api.js';
	import Util from '@/common/util.js';

	let self;

	export default {
		data() {
			return {
				sexes: [{
					name: "男",
					id: 1
				}, {
					name: "女",
					id: 2
				}],
				sexIndex: 0,
				livings: getApp().globalData.livings,
				livingIndex: 0,
				flats: getApp().globalData.flats,
				flatIndex: 0,
				diseases: getApp().globalData.diseases,
				diseaseIndex: 0,
				scares: getApp().globalData.scares,
				scareIndex: 0,
				ifs: [],
				birthDate: '',
				showIfs: true,
				showOther: true,
				lastname: '',
				firstname: '',
				occupation: '',
				address: '',
				infoUsers: ["本人信息", "新增人员"],
				infoUserIndex: 0,
				relationship: ["本人"],
				relationshipIndex: 0,
				phone: '',
				regions: getApp().globalData.regions,
				regionIndex: 0,
				otherTxt: '',
				end: Util.getToday(),
				showDelBnt: true
			}
		},
		onLoad() {
			self = this;
			this.ifs = getApp().globalData.ifs.slice();
			let user = getApp().globalData.users[0];
			this.setUserInfo(user);
			//判断是否新用户
			if (getApp().globalData.isNewUser) {
				this.infoUsers = ["本人信息"];
			} else {
				let users = getApp().globalData.users;
				if (users.length > 2) {
					for (let i = 2; i < users.length; i++) {
						let name = users[i].lastname + users[i].firstname;
						this.infoUsers.push(name);
					}
				}
			}
		},
		methods: {
			setUserInfo: function(user) {
				if (user.scares == 0) {
					//是否显示如有
					this.showIfs = true;
				} else {
					this.showIfs = false;
				}
				let showOther = true;
				let ifs = this.ifs;
				for (let i = 0; i < user.ifs.length; i++) {
					ifs[i].checked = user.ifs[i];
					if (i == 7) {
						showOther = !user.ifs[i];
					}
				}
				this.lastname = user.lastname;
				this.firstname = user.firstname;
				this.sexIndex = user.sexes;
				this.birthDate = user.birthDate;
				this.phone = user.phone;
				this.regionIndex = user.regions;
				this.address = user.address;
				this.occupation = user.occupation;
				this.livingIndex = user.livings;
				this.flatIndex = user.flats;
				this.diseaseIndex = user.diseases;
				this.scareIndex = user.scares;
				this.otherTxt = user.otherTxt;
				this.relationshipIndex = user.relationship;
				this.ifs = ifs;
				this.showOther = showOther;
			},
			bindDateChange: function(e) {
				this.birthDate = e.target.value;
			},
			bindLivingChange: function(e) {
				this.livingIndex = e.target.value;
			},
			bindFlatChange: function(e) {
				this.flatIndex = e.target.value;
			},
			bindDiseaseChange: function(e) {
				this.diseaseIndex = e.target.value;
			},
			bindSexChange: function(e) {
				this.sexIndex = e.target.value;
			},
			ifsChange: function(index) {
				this.ifs[index].checked = !this.ifs[index].checked;
				this.showOther = !this.ifs[7].checked;
			},
			submitForm: function() {
				//姓
				let lastname = this.lastname;
				if (lastname == "") {
					uni.showToast({
						title: "请填写用户姓",
						image: "../../static/info-icon.png"
					});
					return;
				}
				//名
				let firstname = this.firstname;
				if (firstname == "") {
					uni.showToast({
						title: "请填写用户名",
						image: "../../static/info-icon.png"
					});
					return;
				}
				//性别
				let id_gender = this.sexIndex;
				//出生日期
				let birthday = this.birthDate;
				//手机号
				let phone = this.phone;
				if (phone == "") {
					uni.showToast({
						title: "请填写手机号",
						image: "../../static/info-icon.png"
					});
					return;
				}
				//服务区域
				let regionIndex = this.regionIndex;
				//详细地址
				let address = this.address;
				if (address == "") {
					uni.showToast({
						title: "请填写详细地址",
						image: "../../static/info-icon.png"
					});
					return;
				}
				//退休前职业
				let occupation = this.occupation;
				//目前居住状态
				let living_status = this.livingIndex;
				//住所类别
				let home_type = this.flatIndex;
				//疾病
				let health_status = this.diseaseIndex;
				//特别护理
				let special_care = this.scareIndex;
				//如有
				let ifsValue = this.ifs;
				let ifs = [];
				//特别护理表单
				let special_care_detail = [];
				for (let i = 0; i < ifsValue.length; i++) {
					ifs[i] = ifsValue[i].checked;
					if (ifs[i]) {
						special_care_detail.push(ifsValue[i].name);
					}
				}
				//其他
				let otherTxt = this.otherTxt;
				//关系
				let relationship = this.relationshipIndex;
				let user = {
					id: 0,
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
					relationship: relationship
				};

				// 获取登陆凭证
				uni.login({
					provider: 'weixin',
					success: function(loginRes) {
						//根据code获取用户信息
						let code = loginRes.code;
						let param = {};
						param.id = getApp().globalData.users[self.infoUserIndex].id;
						param.lastname = lastname;
						param.firstname = firstname;
						id_gender = self.sexes[id_gender].id;
						param.id_gender = id_gender;
						param.birthday = birthday;
						param.user_name = code;
						param.occupation = occupation;
						param.living_status = self.livings[living_status];
						param.home_type = self.flats[home_type];
						param.health_status = self.diseases[health_status];
						param.special_care = self.scares[special_care];
						if (otherTxt != '') {
							special_care_detail.push(otherTxt);
						}
						param.special_care_detail = special_care_detail;
						param.id_global_demand = self.regions[regionIndex].id;
						param.address = address;
						param.phone = phone;
						param.relationship = self.relationship[relationship];
						//创建/更新 用户
						if (self.infoUserIndex == 0) {
							//添加
							if (param.id == 0) {
								API.createCustomer(function(res) {
									if (res.data.customer !== undefined) {
										user.id = res.data.customer.id;
										getApp().globalData.users[0] = user;
										//更新下拉选项
										if (self.infoUsers.length == 1) {
											self.infoUsers = ["本人信息", "新增人员"];
											getApp().globalData.isNewUser = false;
										}
										uni.showToast({
											title: "提交成功",
											image: "../../static/info-icon.png"
										});
									} else {
										uni.showToast({
											title: "提交失败",
											image: "../../static/info-icon.png"
										});
									}
								}, param);
							} else { //修改
								API.updateUser(function(res) {
									if (res.statusCode == 400) {
										uni.showToast({
											title: "修改失败",
											image: "../../static/info-icon.png"
										});
									} else {
										user.id = param.id;
										getApp().globalData.users[self.infoUserIndex] = user;
										uni.showToast({
											title: "修改成功",
											image: "../../static/info-icon.png"
										});
									}
								}, param);
							}
						} else { //创建/更新 亲戚
							//添加
							if (param.id == 0) {
								param.id = getApp().globalData.users[0].id;
								API.addCustomer(function(res) {
									if (res.data.address !== undefined) {
										user.id = res.data.address.id;
										let name = lastname + firstname;
										self.addUser(name, user);
									} else {
										uni.showToast({
											title: "提交失败",
											image: "../../static/info-icon.png"
										});
									}
								}, param);
							} else {
								param.main = getApp().globalData.users[0].id;
								//修改
								API.updateMember(function(res) {
									if (res.statusCode == 400) {
										uni.showToast({
											title: "修改失败",
											image: "../../static/info-icon.png"
										});
									} else {
										user.id = param.id;
										self.updateUser(user);
									}
								}, param);
							}
						}
					}
				});
			},
			addUser: function(name, user) {
				let infoUsers = this.infoUsers;
				infoUsers.push(name);
				this.infoUsers = infoUsers;
				this.infoUserIndex = 0;
				this.relationship = ["本人"];
				getApp().globalData.users.push(user);
				this.setUserInfo(getApp().globalData.users[0]);
				uni.showToast({
					title: "添加成功",
					image: "../../static/info-icon.png"
				});
			},
			updateUser: function(user) {
				//添加
				let name = user.lastname + user.firstname;
				let infoUsers = this.infoUsers;
				infoUsers[this.infoUserIndex] = name;
				this.infoUsers = infoUsers;
				getApp().globalData.users[this.infoUserIndex] = user;
				uni.showToast({
					title: "修改成功",
					image: "../../static/info-icon.png"
				});
			},
			bindScareChange: function(e) {
				if (e.detail.value == 0) {
					getApp().globalData.users[self.infoUserIndex].ifs = [false, false, false, false, false, false, false, false];
					getApp().globalData.users[self.infoUserIndex].otherTxt = '';
					self.setUserInfo(getApp().globalData.users[self.infoUserIndex]);
					this.showIfs = true;
				} else {
					this.showIfs = false;
				}
				this.scareIndex = e.detail.value;
			},
			bindInfoUserChange: function(e) {
				//本人
				if (e.detail.value == 0) {
					this.relationship = ["本人"];
					this.showDelBnt = true;
				} else {
					this.showDelBnt = true;
					this.relationship = ["父母亲", "兄弟", "姐妹", "儿女", "夫妻"];
					if (e.detail.value != 1) {
						this.showDelBnt = false;
					}
				}
				let user = getApp().globalData.users[e.detail.value];
				this.setUserInfo(user);
				this.infoUserIndex = e.detail.value;
			},
			bindRelationShipChange: function(e) {
				this.relationshipIndex = e.detail.value;
			},
			bindRegionChange: function(e) {
				this.regionIndex = e.detail.value;
			},
			deleteUser: function(e) {
				let id = getApp().globalData.users[this.infoUserIndex].id;
				let param = {
					id: id
				};
				uni.showModal({
					title: '提示',
					content: '是否删除该信息',
					success(res) {
						if (res.confirm) {
							API.deleteUser(function(res) {
								if (res.statusCode == 200) {
									getApp().globalData.users.splice(self.infoUserIndex, 1);
									self.setUserInfo(getApp().globalData.users[0]);
									let infoUsers = self.infoUsers;
									infoUsers.splice(self.infoUserIndex, 1);
									self.infoUsers = infoUsers;
									self.infoUserIndex = 0;
									self.showDelBnt = true;
									self.relationship = ["本人"];
									uni.showToast({
										title: "删除成功",
										image: "../../static/info-icon.png"
									});
								} else {
									uni.showToast({
										title: "删除失败",
										image: "../../static/info-icon.png"
									});
								}
							}, param);
						}
					}
				})
			},
			userAddress: function(e) {
				this.address = getApp().globalData.users[0].address;
			}
		}
	}
</script>

<style>
	.page {
		background-color: #EDEDED;
		font-size: 32rpx;
		font-family: -apple-system-font, Helvetica Neue, Helvetica, sans-serif;
	}

	.redStart {
		color: red;
		float: left;
		margin-top: 8rpx;
	}

	.weui-select {
		border-right: 0px;
		margin-top: -8rpx;
	}

	.weui-input {
		margin-top: -8rpx;
	}

	.weui-label {
		width: 230rpx;
		word-wrap: break-word;
		word-break: break-all;
	}

	.page__title {
		height: 100rpx;
		font-weight: bold;
		font-size: large;
	}

	.weui-cells_after-title {
		margin-top: 0;
	}

	.weui-cells {
		position: relative;
		background-color: #fff;
		line-height: 1.41176471;
		font-size: 17px;
		padding: 16px;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;
		flex-direction: row;
	}

	view {
		display: block;
	}

	.weui-cells:after {
		bottom: 0;
		border-bottom: 1rpx solid rgba(0, 0, 0, .1);
	}

	.weui-cells:after,
	.weui-cells:before {
		content: " ";
		position: absolute;
		left: 0;
		right: 0;
		height: 1px;
		color: rgba(0, 0, 0, .1);
	}

	.weui-cells:before {
		top: 0;
		border-top: 1rpx solid rgba(0, 0, 0, .1);
	}

	.weui-cell__bd {
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		flex: 1;
	}

	.weui-input {
		margin-top: -8rpx;
	}

	.weui-input {
		height: 40rpx;
		min-height: 40rpx;
		line-height: 1.41176471;
	}

	input {
		cursor: auto;
		display: block;
		height: 40rpx;
		text-overflow: clip;
		overflow: hidden;
		white-space: nowrap;
		font-family: UICTFontTextStyleBody;
		min-height: 40rpx;
	}

	.weui-input {
		margin-top: 6rpx;
	}

	.weui-cells__title {
		height: 30rpx;
	}

	.weui-btn {
		width: 650rpx;
		margin-top: 5px;
	}

	.weui-cells_checkbox .weui-check__label:before {
		left: 55px;
	}


	.weui-cells::after {
		border-bottom: 0px;
	}

	.detail-img {
		width: 120rpx;
		height: 120rpx;
	}

	.weui-cells_checkbox .weui-check__label:before {
		left: 55px;
	}

	.weui-cell-topLine:before {
		border-top: 0px;
	}

	.weui-cell-topLine {
		border-top: 1rpx solid rgba(0, 0, 0, .1);
	}
</style>
