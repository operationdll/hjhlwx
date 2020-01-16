<template>
	<view class="login-container">
		<view>
			<view class="userinfo">
				<image class="userinfo-avatar" mode="cover" src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/logo.png"></image>
				<text class="userinfo-nickname">
					汇骏护理
				</text>
			</view>
			<view class="alert">
				<view class="alert-title">你还未登录</view>
				<view class="alert-desc">
					<view class="alert-text userinfo-nickname" style="font-size: 28rpx;">
						<li>请登录进行操作</li>
					</view>
				</view>
			</view>
			<view class="bntView">
				<button type="warn" @click="backHome">
					取消登录
				</button>
				<button type="primary" @click="open">
					立即登录
				</button>
			</view>
			<uni-popup ref="popup">
				<view class="userinfo">
					<image class="userinfo-avatar" mode="cover" src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/logo.png"></image>
					<text class="userinfo-nickname">
						汇骏护理
					</text>
				</view>
				<view class="alert">
					<view class="alert-title">为了获取更好的服务,请确认授权以下信息</view>
					<view class="alert-desc">
						<view class="alert-text userinfo-nickname" style="font-size: 28rpx;">
							<li>获得你的公开信息（昵称、头像等）</li>
						</view>
					</view>
				</view>
				<view class="bntView">
					<button type="warn" @click="close" style="width:200rpx">
						取消
					</button>
					<!-- #ifdef MP-WEIXIN -->
					<button type="primary" open-type="getUserInfo" @getuserinfo="getuserinfo" withCredentials="true" style="width:200rpx">
						允许
					</button>
					<!-- #endif -->
					<!-- #ifdef APP-PLUS -->
					<button @click="appWxLogin" type="primary" style="width:200rpx">允许</button>
					<!-- #endif -->
					<!-- #ifdef  H5 -->
					<view style="display: flex;flex: 1;justify-content: center;color: red;">微信登陆暂不支持网页授权</view>
					<!-- #endif -->
				</view>
			</uni-popup>
		</view>
	</view>
</template>

<script>
	import API from '@/common/api.js';
	import Util from '@/common/util.js';
	import uniPopup from "@/components/uni-popup/uni-popup.vue"

	let self;

	export default {
		components: {uniPopup},
		data() {
			return {

			}
		},
		onLoad() {
			//开启分享功能
			wx.showShareMenu();
			
			self = this;
			//获取区域信息
			API.getArea((res) => {
				uni.hideLoading();
				let regions = res.data.htl_room_type_global_demands;
				if (regions && regions.length > 0) {
					getApp().globalData.regions = regions;
				}
				//获取主服务和主服务可选时间
				this.loadMainServices();
			}, {
				'display': 'full',
				'output_format': 'JSON'
			});
			
			
		},
		methods: {
			open(){
			  this.$refs.popup.open();
		    },
			close(){
			  this.$refs.popup.close();
			},
			getuserinfo: function(res) {
				if (res.detail.iv) {
					uni.login({
						provider: 'weixin',
						success: function(loginRes) {
							//根据code获取用户信息
							let code = loginRes.code;
							self.getCustom(code);
							wx.getUserInfo({
								success: function(res) {
									getApp().globalData.nickName = res.userInfo.nickName;
								}
							})
						}
					});
				} else {
					uni.showToast({
						title: "登陆失败",
						image: "../../static/info-icon.png"
					});
				}
			},
			getCustom: function(code) {
				API.getCustomer(function(res) {
					if (res.data.customers !== undefined) {
						let customers = res.data.customers;
						getApp().globalData.isNewUser = false;
						// console.log(customers);
						//本人信息
						let customer = customers[0];
						customer.address1 = customer.address;
						customer.id_address = customer.id;
						customer.relationship = 0;
						getApp().globalData.users[0] = self.addUsers(customer);
						//家人信息
						if (customer.associations !== undefined) {
							let otherMembers = customer.associations.otherMembers;
							for (let i = 0; i < otherMembers.length; i++) {
								let user = self.addUsers(otherMembers[i]);
								getApp().globalData.users.push(user);
							}
						}
						// console.log(getApp().globalData.users);
						//跳转到主页面
						uni.switchTab({
							url: '/pages/main/main'
						});
					} else {
						setTimeout(function() {
							//跳转到用户页面
							uni.switchTab({
								url: '/pages/userList/userList'
							});
						}, 2000);
					}
				}, {
					'display': 'full',
					'filter[user_name]': '[' + code + ']',
					'filter[login_type]': '1'
				});
			},
			appWxLogin: function() {
				uni.showLoading({
					title: '加载中',
					mask: true
				});
				uni.getProvider({
					service: 'oauth',
					success: function(res) {
						if (~res.provider.indexOf('weixin')) {
							uni.login({
								provider: 'weixin',
								success: function(loginRes) {
									uni.showModal({
										title: '提示',
										content: JSON.stringify(loginRes),
										success: function(res) {
											if (res.confirm) {
												self.getCustom(loginRes.code);
											}
										}
									});
									//JSON.stringify(loginRes)
									// self.getCustom(code);
								},
								fail: function(res) {
									uni.showModal({
										title: '提示',
										content: '登陆失败,' + JSON.stringify(res.errMsg),
										success: function(res1) {

										}
									});
								}
							});
						} else {
							uni.showModal({
							    title: '提示',
							    content: '微信服务商不存在',
								showCancel:false,
								confirmColor:'#07c160'
							});
						}
					},
					fail: function() {
						uni.showToast({
							title: "登陆失败",
							image: "../../static/info-icon.png"
						});
					}
				});
			},
			addUsers: function(customer) {
				let user = {
					id: customer.id_address,
					lastname: customer.lastname,
					firstname: customer.firstname,
					sexes: 0,
					birthDate: customer.birthday,
					phone: customer.phone,
					regions: 0,
					address: customer.address1,
					occupation: customer.occupation,
					livings: 0,
					flats: 0,
					diseases: 0,
					diseasesDetail:'',
					scares: 0,
					ifs: [false, false, false, false, false, false, false, false],
					otherTxt: '',
					relationship: 0
				};
				//性别
				let id_gender = customer.id_gender;
				if (id_gender == 2) {
					user.sexes = 1;
				}
				//目前居住状态
				let livings = getApp().globalData.livings;
				let living_status = 0;
				for (let i = 0; i < livings.length; i++) {
					if (customer.living_status == livings[i]) {
						living_status = i;
					}
				}
				user.livings = living_status;
				//住所类别
				let flats = getApp().globalData.flats;
				let home_type = 0;
				for (let i = 0; i < flats.length; i++) {
					if (customer.home_type == flats[i]) {
						home_type = i;
					}
				}
				user.flats = home_type;
				//疾病
				let diseases = getApp().globalData.diseases;
				let health_status = 0;
				for (let i = 0; i < diseases.length; i++) {
					if (customer.health_status == diseases[i]) {
						health_status = i;
					}
				}
				user.diseases = health_status;
				//疾病其他
				user.diseasesDetail = customer.health_status_detail;
				//特别护理
				let scares = getApp().globalData.scares;
				let special_care = 0;
				for (let i = 0; i < scares.length; i++) {
					if (customer.special_care == scares[i]) {
						special_care = i;
					}
				}
				user.scares = special_care;
				//如有
				let ifs = getApp().globalData.ifs;
				let special_care_detail = [];
				if (customer.special_care_detail != null) {
					special_care_detail = customer.special_care_detail.split(',');
				}
				for (let i = 0; i < ifs.length; i++) {
					for (let j = 0; j < special_care_detail.length; j++) {
						if (special_care_detail[j] == ifs[i].name) {
							user.ifs[i] = true;
							special_care_detail[j] = '';
						}
					}
				}
				//其他
				let otherTxt = '';
				for (let j = 0; j < special_care_detail.length; j++) {
					if (special_care_detail[j] != '') {
						otherTxt = special_care_detail[j];
					}
				}
				user.otherTxt = otherTxt;
				//服务区域
				let regions = getApp().globalData.regions;
				let id_global_demand = 0;
				for (let i = 0; i < regions.length; i++) {
					if (customer.id_global_demand == regions[i].id) {
						id_global_demand = i;
					}
				}
				user.regions = id_global_demand;
				//关系
				let relationship = customer.relationship;
				//"本人"/"父母亲", "兄弟", "姐妹", "儿女", "夫妻"
				if ("兄弟" == relationship) {
					relationship = 1;
				} else if ("姐妹" == relationship) {
					relationship = 2;
				} else if ("儿女" == relationship) {
					relationship = 3;
				} else if ("夫妻" == relationship) {
					relationship = 4;
				} else {
					relationship = 0;
				}
				user.relationship = relationship;
				return user;
			},
			loadMainServices: function(){
				//获取主服务和主服务可选时间
				API.getMainServiceAndAvailableTimeList((res) => {
					uni.hideLoading();
					let services = res.data.hotels;
					if (services && services.length > 0) {
						getApp().globalData.services = services;
					}
				}, {
					'display': 'full',
					'output_format': 'JSON'
				});
			},
			backHome: function(){
				//跳转到主页面
				uni.switchTab({
					url: '/pages/main/main'
				});
			}
		}
	}
</script>

<style>
	.login-container {
		height: 100%;
		padding: 20rpx 60rpx;
		background: #fff;

	}

	view {
		display: block;

	}

	.userinfo {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.userinfo-avatar {
		width: 128rpx;
		height: 128rpx;
		margin: 20rpx;
		border-radius: 50%;
	}

	image {
		display: inline-block;
		overflow: hidden;
	}

	.alert {
		margin: 100rpx 0 60rpx;
	}

	.userinfo-nickname {
		color: #aaa;
	}

	.alert .alert-title {
		font-weight: 400;
		font-size: 32rpx;
		color: #000;
		margin-bottom: 20rpx;
	}

	.alert-desc {
		display: block;
		list-style: disc inside none;
	}
	
	.bntView{
		display: flex;
		width: 100%;
	}
	
	button{
		width: 300rpx;
	}
</style>
