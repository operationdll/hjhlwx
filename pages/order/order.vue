<template>
	<view class="section">
		<view class="section__title weui-panel__hd">订单管理</view>
		<view class="weui-media-box weui-media-box_appmsg" v-for="(item, index) in orderList" v-bind:key="index" @click="showOrderDetail(item)">
			<view class="weui-media-box__hd weui-media-box__hd_in-appmsg">
				<image class="weui-media-box__thumb" src="../../static/order.png" />
			</view>
			<view class="weui-media-box__bd weui-media-box__bd_in-appmsg">
				<view class="weui-media-box__title title-state">

					<view>{{item.orderName}}</view>
				</view>

				<view class="weui-media-box__desc">
					{{item.gift_message}}
				</view>
				<view class="weui-media-box__desc" style="color:#179B16;">
					预订日期：{{item.source}}
				</view>
				<view style="color:red">{{item.orderStateName}}</view>
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
				// orderList: [{
				// 	id: 0,
				// 	orderStateName: '',
				// 	reference: '',
				// 	date_upd: '',
				// 	gift_message: '',
				// 	associations: {
				// 		order_rows: [{
				// 			id: '',
				// 			product_name: ''
				// 		}],
				// 	},
				// 	orderName: ''
				// }],
				orderList: [],
				services: [],
				orderStates: [],
				currentUser: {}
			}
		},
		onLoad(options) {
			
		},
		onShow() {
			//判断是否登录
			if(!Util.isLogin()){
				uni.redirectTo({
					url: '/pages/index/index'
				});
				return;
			}
			
			this.currentUser = getApp().globalData.users[0];
			//绑定主服务
			this.services = getApp().globalData.services;
			// bind order states
			this.orderStates = getApp().globalData.orderStates;
			//绑定数据
			this.bindData();
			//取消消息信息
			// wx.hideTabBarRedDot({
			// 	index: 2
			// });
		},
		methods: {
			showOrderDetail: function(orderItem) {
				// set selected order item
				getApp().globalData.selectedOrderItem = orderItem;
				// jump to next page
				uni.navigateTo({
					url: '/pages/order/orderDetail'
				});
			},
			bindData: function() {
				API.getOrderList((response) => {
					uni.hideLoading();
					if(response.data.orders!=undefined){
						this.orderList = response.data.orders;
						for (let orderItem of this.orderList) {
							orderItem.orderName = this.getProductName(orderItem);
							orderItem.orderStateName = this.getOrderStateName(orderItem);
							if (!orderItem.source) {
								orderItem.source = '';
							}
						}
					}
				}, {
					'display': 'full',
					'filter[id_customer]': '[' + this.currentUser.id + ']',
					'sort': '[id_DESC]'
				});
			},
			getProductName: function(orderItem) {
				let productName = '';
				if (orderItem && orderItem.id > 0 && orderItem.associations && orderItem.associations.order_rows) {
					for (let orderProduct of orderItem.associations.order_rows) {
						for (let service of this.services) {
							for (let product of service.associations.products) {
								if (Number(orderProduct.product_id) === Number(product.id)) {
									productName += service.hotel_name;
									break;
								}
							}
							if (productName) {
								break;
							}
						}

						// if not find right name then replace to order name
						if (!productName) {
							productName += orderProduct.product_name;
							break;
						}
					}
				}
				return productName;
			},
			getOrderStateName: function(orderItem) {
				let stateName = this.orderStates[0].name;
				for (let state of this.orderStates) {
					if (Number(orderItem.current_state) === state.id) {
						stateName = state.name;
						break;
					}
				}
				return stateName;
			}
		}
	}
</script>

<style>
	.weui-panel__hd {
		background-color: #EDEDED;
	}

	.weui-panel__hd {
		padding: 16px 16px 13px;
		color: rgba(0, 0, 0, .9);
		font-size: 15px;
		font-weight: 700;
		position: relative;
	}

	view {
		display: block;
	}

	* {
		margin: 0;
	}

	.weui-panel__hd:after {
		content: " ";
		position: absolute;
		left: 0;
		bottom: 0;
		right: 0;
		height: 1rpx;
		color: rgba(0, 0, 0, .1);
		left: 16px;
	}

	.weui-media-box_appmsg {
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;
	}

	.weui-media-box {
		padding: 16px;
		position: relative;
	}

	.weui-media-box:first-child:before {
		display: none;
	}

	.weui-media-box:before {
		content: " ";
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		height: 1px;
		border-top: 1rpx solid rgba(0, 0, 0, .1);
		color: rgba(0, 0, 0, .1);
		left: 16px;
	}

	.weui-media-box__hd_in-appmsg {
		margin-right: 16px;
		width: 60px;
		height: 60px;
		line-height: 60px;
		text-align: center;
	}

	.weui-media-box__bd_in-appmsg {
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		flex: 1;
		min-width: 0;
	}

	.weui-media-box__thumb {
		width: 100%;
		height: 100%;
		vertical-align: top;
	}

	image {
		width: 320px;
		height: 240px;
		display: inline-block;
		overflow: hidden;
	}

	.title-state {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.weui-media-box__desc,
	.weui-media-box__title {
		line-height: 1.4;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	.weui-media-box__title {
		font-weight: 400;
		font-size: 17px;
		color: rgba(0, 0, 0, .9);
		width: auto;
		white-space: nowrap;
		word-wrap: normal;
		word-wrap: break-word;
		word-break: break-all;
	}

	.weui-media-box__desc {
		color: rgba(0, 0, 0, .5);
		font-size: 14px;
		padding-top: 4px;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
	}

	.weui-media-box__desc,
	.weui-media-box__title {
		line-height: 1.4;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
