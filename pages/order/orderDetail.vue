<template>
	<view class="section">
		<view class="text">
			<view class="gbmask">
				<view class="content">
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
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import API from '@/common/api.js';
	import Util from '@/common/util.js';

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
				
			}
		},
		onLoad(options) {
			this.users = getApp().globalData.users;
			//绑定主服务
			this.services = getApp().globalData.services;
			// bind order states
			this.orderStates = getApp().globalData.orderStates;
		},
		onShow() {
			this.bindData();
		},
		methods: {
			bindData: function() {
				this.orderItem = getApp().globalData.selectedOrderItem;
				this.address = this.orderItem.service_address
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
			},
		}
	}
</script>
<style>
	.text {
		position: fixed;
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		background-image: url('https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/orderbg.jpg');
	}

	.gbmask {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0px;
		background: rgba(0, 0, 0, 0.4);
		overflow: hidden;
		z-index: 2;
	}

	.intro {
		font-size: 40rpx;
		color: white;
		width: 660rpx;
		display: flex;
		justify-content: space-between;
	}

	.brand {
		font-size: 60rpx;
		color: white;
	}

	.bntView {
		position: absolute;
		left: 0;
		bottom: 90rpx;
		width: 100%;
	}

	.content {
		position: fixed;
		width: 100%;
		top: 120rpx;
		padding-left: 40rpx;
		padding-top: 60rpx;
	}
</style>
