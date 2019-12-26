<template>
	<view class="page">
		<view class="gbmask"></view>
		<view class="content" :style="cHeight">
			<view class="brand">
				{{orderItem.orderName}}
			</view>
			<view class="intro">
				<text>ID:</text>
				<text>{{orderItem.reference}}</text>
			</view>
			<view class="intro">
				<text>状态:</text>
				<text>{{orderItem.orderStateName}}</text>
			</view>
			<view class="intro">
				<text>护理人:</text>
				<text>{{userName}}</text>
			</view>
			<view class="intro">
				<text>服务地址:</text>
				<text>{{address}}</text>
			</view>
			<view class="intro">
				<text>区域附加费:</text>
				<text>{{orderItem.total_demand}}</text>
			</view>
			<view class="intro">
				<text>优惠金额:</text>
				<text>{{orderItem.total_discounts}}元</text>
			</view>
			<view class="intro">
				<text>服务:</text>
				<text>{{orderItem.gift_message}}</text>
			</view>
			<view class="intro">
				<text>预订时间:</text>
				<text>{{orderItem.source}}</text>
			</view>
			<view class="intro">
				<text>总金额:</text>
				<text>{{orderItem.total_paid}}元</text>
			</view>
			<block v-if="hUserName !=''">
				<view class="brand" style="color:red;">
					护理人员
				</view>
				<view class="intro">
					<text>{{hUserName}}</text>
				</view>
				<view class="intro">
					<image style="width: 100px; height: 100px;" :src="hUserImage"></image>
				</view>
				<view class="intro">
					<text>工号:</text>
					<text>{{orderItem.associations.service_provider_info[0].work_id}}</text>
				</view>
				<view class="intro">
					<text>电话后四位:</text>
					<text>{{hUserPhone}}</text>
				</view>
				<view class="intro">
					<text>经验:</text>
					<text>{{orderItem.associations.service_provider_info[0].work_experience}}</text>
				</view>
				<view class="intro">
					<text style="width: 120rpx;">简介:</text>
					<text style="width: 540rpx;">{{orderItem.associations.service_provider_info[0].designation}}</text>
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	import API from '@/common/api.js';
	import Util from '@/common/util.js';

	let that;
	export default {
		data() {
			return {
				orderItem: {
					id: 0,
					orderStateName: '',
					reference: '',
					date_upd: '',
					gift_message: '',
					associations: {
						order_rows: [{
							id: '',
							product_name: ''
						}],
					},
					orderName: '',
					source: '',
					total_demand: 0,
					total_discounts: 0,
					total_paid: 0
				},
				services: [],
				orderStates: [],
				users: {},
				userName: '',
				address:'',
				hUserName:'',
				hUserImage:'',
				hUserPhone:'',
				cHeight:'',
			}
		},
		onLoad(options) {
			that = this;
			this.users = getApp().globalData.users;
			//绑定主服务
			this.services = getApp().globalData.services;
			// bind order states
			this.orderStates = getApp().globalData.orderStates;
		},
		onReady(){
			//动态获取元素的属性,设置显示高度
			let selector = uni.createSelectorQuery().in(this).select('.content'); 
			selector.fields({
			  size: true
			}, data => {
				let cHeight = data.height;
				let mselector = uni.createSelectorQuery().in(this).select('.gbmask');
				mselector.fields({
				  size: true
				}, mdata => {
					let mHeight = mdata.height;
					if((mHeight - cHeight)>0){
						that.cHeight = "height:" + mHeight +"px";
					}
				}).exec();
			}).exec();
		},
		onShow() {
			this.bindData();
		},
		methods: {
			bindData: function() {
				this.orderItem = getApp().globalData.selectedOrderItem;
				this.address = this.orderItem.service_address;
				if(this.orderItem && this.orderItem.id > 0){
					this.orderItem.total_demand = !isNaN(this.orderItem.total_demand) ? Number(this.orderItem.total_demand).toFixed(2) : '0.00';
					this.orderItem.total_discounts = !isNaN(this.orderItem.total_discounts) ? Number(this.orderItem.total_discounts).toFixed(2) : '0.00';
					this.orderItem.total_paid = !isNaN(this.orderItem.total_paid) ? Number(this.orderItem.total_paid).toFixed(2) : '0.00';
				}
				for(let user of this.users){
					if(Number(this.orderItem.id_address_delivery) === Number(user.id)){
						this.userName = user.lastname + user.firstname;
						break;
					}
				}
				//护理人员信息
				let hUserName = this.orderItem.associations.service_provider_info[0].name;
				if(""!=hUserName){
					let imageUrl=this.orderItem.associations.service_provider_info[0].image;
					let hUserImage = 'https://icare.easyiservice.com'+imageUrl;
					let hUserPhone = this.orderItem.associations.service_provider_info[0].phone;
					if(hUserPhone.length>4){
						hUserPhone = hUserPhone.substring(hUserPhone.length-4,hUserPhone.length);
					}
					this.hUserName = hUserName;
					this.hUserImage = hUserImage;
					this.hUserPhone = hUserPhone;
				}
			},
		}
	}
</script>
<style>
	.intro {
		font-size: 40rpx;
		width: 660rpx;
		display: flex;
		justify-content: space-between;
		color: white;
	}

	.brand {
		font-size: 60rpx;
		color: white;
	}
	
	.gbmask {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0px;
		overflow: hidden;
		z-index: 1;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		background-image: url('https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/orderbg.jpg');
	}

	.content {
		z-index: 2;
		width: 100%;
		padding-left: 40rpx;
		padding-top: 60rpx;
		background: rgba(0, 0, 0, 0.4);
		position: absolute;
	}
</style>
