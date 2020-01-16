<template>
	<view class="page">
		<view class="page__hd" style="border-bottom: 1rpx solid rgba(0,0,0,.1);">
			<view class="page__title" style="padding-left:16px;">{{titles1}}</view>
			<text style="color:red;padding-left:16px;">{{titles2}}</text>
		</view>
		<view class="page__bd">
			<view class="weui-cells weui-cells_after-title">
				<view class="weui-cell">
					<view class="weui-cell__hd">
						<view class="weui-label">护理人:</view>
					</view>
					<view class="weui-cell__bd">
						<picker @change="bindInfoUserChange" :value="infoUserIndex" :range="infoUsers">
							<view class="uni-input">{{infoUsers[infoUserIndex]}}</view>
						</picker>
					</view>
				</view>
			</view>
			<view class="weui-cells weui-cells_after-title">
				<view class="weui-cell">
					<view class="weui-cell__hd">
						<view class="weui-label">服务区域:</view>
					</view>
					<view class="weui-cell__bd">
						<picker @change="bindRegionChange" :value="regionIndex" :range="regions" range-key="name">
							<view class="uni-input">{{regions[regionIndex].name}} ({{currencyConvertor(regions[regionIndex].price)}})</view>
						</picker>
					</view>
				</view>
			</view>
			<view class="weui-cells weui-cells_after-title">
				<view class="weui-cell ">
					<view class="weui-cell__hd">
						<view class="weui-label">服务地址:</view>
					</view>
					<view class="weui-cell__bd">
						<input class="weui-input" placeholder="请输入" v-model="address" />
					</view>
				</view>
			</view>
			<view class="weui-cells weui-cells_after-title">
				<view class="weui-cell ">
					<view class="weui-cell__hd">
						<view class="weui-label">优惠码:</view>
					</view>
					<view class="weui-cell__bd">
						<input class="weui-input" placeholder="请输入" v-model="ycode" />
					</view>
				</view>
			</view>
			<view class="weui-cells__title" style="border-bottom: 1rpx solid rgba(0,0,0,.1);">{{selectedCare.hotel_name}}</view>
			<view class="weui-cells__title" style="border-bottom: 1rpx solid rgba(0,0,0,.1);">{{selectedCare.productItems}}</view>
			<view class="weui-cells weui-cells_after-title">
				<view class="weui-cell">
					<view class="weui-cell__hd">
						<view class="weui-label">选择服务:</view>
					</view>
					<view class="weui-cell__bd">
						<picker @change="bindProductChange" :value="productIndex" :range="products" range-key="name">
							<view class="uni-input">{{products[productIndex].name}} </view>
						</picker>
					</view>
				</view>
			</view>
			<block v-if="orderType!=1">
				<view class="weui-cell mycells">
					<view class="weui-cell__hd">
						<view class="weui-label">预订日期:</view>
					</view>
					<view class="weui-cell__bd">
						<picker mode="date" :value="dateStart" :start="start" :end="end" @change="bindDateChange">
							<view class="uni-input">{{dateStart}}</view>
						</picker>
					</view>
				</view>
			</block>
			<view class="weui-cells weui-cells_after-title">
				<view class="weui-cell ">
					<view class="weui-cell__hd">
						<view class="weui-label">预订时间:</view>
					</view>
					<view class="weui-cell__bd">
						<picker mode="time" :value="time" :start="startTime" end="19:00" @change="bindTimeChange">
							<view class="uni-input">{{time}}</view>
						</picker>
					</view>
				</view>
			</view>
			<view class="weui-cells__title">
				<button type="primary" @click="submitForm" :disabled="bntDis">{{titles1}}</button>
			</view>
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
				orderType: 0,
				flag: true,
				dateStart: Util.dateAddDay(1),
				start: Util.dateAddDay(1),
				end: Util.dateAddDay(31),
				total: 500,
				regions: [{
					name: '',
					price: 0
				}],
				regionIndex: 0,
				ycode: '',
				title: '',
				service: '4小时',
				time: '',
				titles1: '',
				titles2: '',
				infoUsers: [],
				infoUserIndex: 0,
				address: '',
				bntDis: false,
				startTime: '',
				selectedCare: {
					id: 11,
					hotel_name: '基础护理',
					care: 1,
					selectedCustomer: {},
					associations: {
						products: []
					}
				},
				products: [{
					name: '',
					price: 0
				}],
				productIndex: 0

			}
		},
		onLoad(options) {
			//开启分享功能
			wx.showShareMenu();

			that = this;
			this.selectedCare = getApp().globalData.selectedService;
			// load products
			this.products = [];
			for (let product of this.selectedCare.associations.products) {
				this.products.push({
					id: product.id,
					name: product.name,
					price: product.price,
					checked: false
				});
			}
			let titles1 = '当天下单';
			let titles2 = '当天服务';
			if (options.orderType != 1) {
				titles1 = '预约下单';
				titles2 = '预订时间服务';
				this.startTime = '9:00';
				this.time = '9:00';
			} else {
				this.dateStart = Util.getToday();
				//当天下单时间提前2小时
				const date = new Date();
				const hour = Number(date.getHours()) + 2;
				let minute = Number(date.getMinutes());
				if (minute < 10) {
					minute = '0' + minute;
				}
				let time = '';
				if (hour < 11) {
					time = '11:00';
				} else {
					//设置16点之后就不能预订当天服务
					if (hour > 16) {
						this.bntDis = true;
						time = (hour - 2) + ':' + minute;
					} else {
						time = hour + ':' + minute;
					}
				}
				this.startTime = time;
				this.time = time;
			}
			this.orderType = options.orderType;
			this.title = options.title;
			this.titles1 = titles1;
			this.titles2 = titles2;
			//添加信息人
			let users = getApp().globalData.users;
			for (let i = 0; i < users.length; i++) {
				if (i != 1) {
					let user = users[i];
					this.infoUsers.push(user.lastname + user.firstname);
				}
			}
			//set default region
			this.regions = getApp().globalData.regions;
			this.selectedCare.selectedCustomer = getApp().globalData.users[0];
			this.regionIndex = this.selectedCare.selectedCustomer.regions;

			this.address = this.selectedCare.selectedCustomer.address;
		},
		methods: {
			bindProductChange: function(e) {
				this.productIndex = e.target.value;
			},
			bindInfoUserChange: function(e) {
				this.infoUserIndex = e.target.value;
				let infoUserIndex = this.infoUserIndex;
				if (infoUserIndex != 0) {
					infoUserIndex = Number(infoUserIndex) + 1;
				}
				// 修改服务区域
				this.regionIndex = getApp().globalData.users[infoUserIndex].regions;
				//修改地址
				this.address = getApp().globalData.users[infoUserIndex].address;
			},
			bindRegionChange: function(e) {
				this.regionIndex = e.target.value;
			},
			bindTimeChange: function(e) {
				this.time = e.target.value;
			},
			bindDateChange: function(e) {
				this.dateStart = e.target.value;
			},
			submitForm: function() {
				//当天下单需要判断时间提前2小时
				if (this.orderType == 1) {
					let date1 = new Date();
					let date2 = new Date(Util.getToday() + ' ' + this.time);
					let s1 = date1.getTime(),
						s2 = date2.getTime();
					let total = s2 - s1;
					let timeSpanStr = Math.round((total / (1000 * 60)));
					if (timeSpanStr < 120) {
						uni.showModal({
							title: '提示',
							content: '需提前2小时预订',
							showCancel: false,
							confirmColor: '#07c160'
						});
						return;
					}
				}
				// set selected product
				let selectedProducts = [];
				selectedProducts.push(this.products[this.productIndex]);

				//验证购物车
				if (selectedProducts.length <= 0) {
					uni.showToast({
						title: "请选择服务种类",
						image: "../../static/info-icon.png"
					});
					return;
				}
				//服务地址
				if(this.address == ''){
					uni.showModal({
						title: '提示',
						content: '服务地址不能为空',
						showCancel: false,
						confirmColor: '#07c160'
					});
					return;
				}
				this.createShoppingCart(selectedProducts);
			},
			currencyConvertor: function(value) {
				if (!isNaN(value)) {
					return Number.parseFloat(value).toFixed(2) + '元';
				}
			},
			createShoppingCart: function(selectedProducts) {
				// create || update shopping cart
				let shoppingCart = getApp().globalData.shoppingCart;

				if (shoppingCart.promocode !== this.ycode) {
					// need reset shopping cart
					shoppingCart.id = null;
				}

				if (shoppingCart.id === null) {
					let shoppingCartDefault = getApp().globalData.shoppingCartDefaultValue;
					shoppingCart.id_currency = shoppingCartDefault.id_currency;
					shoppingCart.id_lang = shoppingCartDefault.id_lang;
					shoppingCart.gift = shoppingCartDefault.gift;
					shoppingCart.reference = shoppingCartDefault.reference;
				}

				// set shopping cart data
				// 1. set main account id
				let user = getApp().globalData.users[0];
				shoppingCart.customer = user;
				if (this.infoUserIndex > 0) {
					shoppingCart.otherMember = getApp().globalData.users[Number(this.infoUserIndex)+1];
				} else {
					shoppingCart.otherMember = user;
				}

				// 2. set promocode
				shoppingCart.promocode = this.ycode;
				// 3. set products
				shoppingCart.products = selectedProducts;
				// 4. set service area
				shoppingCart.global_demand = this.regions[this.regionIndex];
				// 5. date from - date to
				if (this.time.split(':')[0].length == 1) {
					this.time = '0' + this.time;
				}
				shoppingCart.date_from = this.dateStart + ' ' + this.time;
				shoppingCart.date_to = this.dateStart + ' ' + this.time;
				// 6. set product items
				shoppingCart.gift_message = this.selectedCare.productItems.toString();
				// 7. service address
				let address = this.address;
				// set ajax shopping data
				let param = {
					id: shoppingCart.id,
					id_address_delivery: '', //shoppingCart.id_address_delivery,
					id_address_invoice: '', //shoppingCart.id_address_invoice,
					id_customer: shoppingCart.customer.id,
					gift_message: shoppingCart.gift_message,
					date_from: shoppingCart.date_from,
					date_to: shoppingCart.date_to,
					promocode: shoppingCart.promocode,
					id_global_demand: shoppingCart.global_demand.id,
					products: shoppingCart.products,
					id_address_delivery: shoppingCart.otherMember !== null ? shoppingCart.otherMember.id : '',
					service_address: address
				};
				// create or update shopping cart
				if (shoppingCart.id === null) {
					// create
					API.createShoppingCart((res) => {
						// console.log(res);
						this.bindData(res, shoppingCart);
					}, param);
				} else {
					// update
					API.updateShoppingCart((res) => {
						// console.log(res);
						this.bindData(res, shoppingCart);
					}, param);
				}
			},
			bindData: function(data, shoppingCart) {
				uni.hideLoading();
				if (data && data.data && data.data.cart && data.data.cart.associations && data.data.cart.associations.cart_summary) {
					// bind data
					let total_demand = 0;
					let discount = 0;
					let total = 0;
					for (let cartSummary of data.data.cart.associations.cart_summary) {
						total_demand += Number(cartSummary.total_demand);
						discount += Number(cartSummary.total_discounts);
						total += Number(cartSummary.total_price);
					}
					if (data.data.cart.id && data.data.cart.id > 0 && total >= 0) {
						if (this.ycode && this.ycode !== '' && discount <= 0) {
							// promo code invalide
							shoppingCart.id = null;
							getApp().globalData.shoppingCart = shoppingCart;

							uni.showToast({
								title: "优惠码无效",
								image: "../../static/info-icon.png"
							});
							return;
						} else {
							// update shopping cart id
							shoppingCart.id = data.data.cart.id;
							shoppingCart.associations = data.data.cart.associations;
							getApp().globalData.shoppingCart = shoppingCart;
							//节日附加费
							let extraFee = shoppingCart.associations.feature_prices[0].feature_price_total_no_tax;

							let userName = 'aaaa';
							let url = '/pages/settlement/settlement?region=' + this.regions[this.regionIndex].name + '&ycode=' + this.ycode +
								'&title=' + this.title + '&total=' + this.total + '&service=' + this.service + '&start=' + this.dateStart +
								'&time=' + this.time + '&userName=' + userName + '&address=' + this.address + '&extraFee=' + extraFee;
							uni.navigateTo({
								url: url
							});
						}
					}
				} else {
					// update shopping cart id
					shoppingCart.id = null;
					getApp().globalData.shoppingCart = shoppingCart;

					uni.showToast({
						title: "订单错误请重试",
						image: "../../static/info-icon.png"
					});
					return;
				}
			}
		}
	}
</script>

<style>
	.page {
		background-color: #ffffff;
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
	}

	.page__title {
		height: 100rpx;
		font-weight: bold;
		font-size: large;
	}

	.dmark {
		float: left;
		display: block;
		margin-left: -80rpx;
		margin-top: -8rpx;
		padding: 10rpx;
	}

	.total {
		color: red;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 120rpx;
	}

	.weui-cell {
		padding: 18px 16px;
		position: relative;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;
		border-bottom: 1rpx solid rgba(0, 0, 0, .1);
	}

	.weui-cell:first-child:before {
		display: none;
	}

	.weui-cell:before {
		content: " ";
		position: absolute;
		left: 0;
		top: 0;
		right: 0;
		height: 1px;
		border-top: 0px;
		color: rgba(0, 0, 0, .1);
		left: 16px;
	}

	.mycells::before {
		border-top: 0rpx;
	}

	.weui-cell__bd {
		width: 456rpx;
	}

	.weui-cells__title {
		margin-top: 16px;
		margin-bottom: 3px;
		padding-left: 16px;
		padding-right: 16px;
		color: rgba(0, 0, 0, .5);
		font-size: 14px;
	}
</style>
