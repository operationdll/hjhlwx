<template>
	<view class="text">
		<view class="gbmask">
			<view class="content">
				<view class="brand">{{selectedCare.hotel_name}}</view>
				<view class="intro">
					<text>护理人:</text>
					<text>{{userName}}</text>
				</view>
				<view class="intro">
					<text>服务区域:</text>
					<text>{{region}}</text>
				</view>
				<view class="intro">
					<text style="width: 300rpx;">服务地址:</text>
					<text>{{address}}</text>
				</view>
				<view class="intro">
					<text>区域附加费:</text>
					<text>{{total_demand}}</text>
				</view>
				<view class="intro" v-if="extraFee>0">
					<text>节日附加费:</text>
					<text>{{extraFee}}</text>
				</view>
				<view class="intro">
					<text>优惠码:</text>
					<text>{{ycode}}</text>
				</view>
				<view class="intro">
					<text>优惠金额:</text>
					<text>{{discount}}元</text>
				</view>
				<view class="intro">
					<text>服务:</text>
					<text>{{service}}</text>
				</view>
				<view class="intro">
					<text>预订时间:</text>
					<text>{{start}}</text>
				</view>
				<view class="intro">
					<text>总金额:</text>
					<text>{{total}}元</text>
				</view>
			</view>
			<view class="bntView" v-if="butBol">
				<button type="primary" @click="bindSubmit" style="width: 660rpx;">
					提交
				</button>
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	import API from '@/common/api.js';
	import Util from '@/common/util.js';
	import cj from '../../node_modules/crypto-js/crypto-js.js'


	let that;
	export default {
		data() {
			return {
				region: '',
				ycode: '',
				start: '',
				title: '',
				flag: true,
				total: 0,
				discount: 0,
				service: '',
				butBol: false,
				userName: '',
				address: '',
				total_demand: 0,
				selectedCare: {
					hotel_name: ''
				},
				extraFee:0,
			}
		},
		onLoad: function(options) {
			//开启分享功能
			wx.showShareMenu();
			
			that = this;
			if (undefined != options.butBol) {
				this.butBol = false;
			}
			this.region = options.region;
			this.ycode = options.ycode;
			this.title = options.title;
			this.address = options.address;

			this.selectedCare = getApp().globalData.selectedService;
			// get saved shopping cart
			let shoppingCart = getApp().globalData.shoppingCart;

			// show data
			this.start = shoppingCart.date_from;
			this.service = '';
			for(let product of shoppingCart.products){
				this.service += ' ' + product.name;
			}
			
			this.userName = shoppingCart.otherMember.lastname + ' ' + shoppingCart.otherMember.firstname;

			// create or update shopping cart
			this.bindData(shoppingCart);
			//节日附加费
			this.extraFee = options.extraFee;

		},
		methods: {
			bindSubmit: function() {
				let shoppingCart = getApp().globalData.shoppingCart;
				////TODO: 验证购物车
				if(shoppingCart.id === null){
					uni.showToast({
						title: "购物车无效",
						image: "../../static/info-icon.png"
					});
					return;
				}
				
				
				uni.showModal({
					title: '确认支付',
					content: '总价:' + this.total + '元,是否提交订单？',
					success: (res) => {
						if (res.confirm) {
							this.callWxPayment(shoppingCart);
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			bindData: function(shoppingCart) {
				

				if (shoppingCart.id && shoppingCart.id > 0 && shoppingCart.associations && shoppingCart.associations.cart_summary) {
					// bind data
					let total_demand = 0;
					let discount = 0;
					let total = 0;
					for (let cartSummary of shoppingCart.associations.cart_summary) {
						total_demand += Number(cartSummary.total_demand);
						discount += Number(cartSummary.total_discounts);
						total += Number(cartSummary.total_price);
					}
					
					this.total_demand = total_demand;
					this.discount = discount;
					this.total = total;
					
					this.butBol = true;
					
				}else{
					// update shopping cart id
					getApp().globalData.shoppingCart.id = null;
					this.butBol = false;
					uni.showToast({
						title: "订单错误请重试",
						image: "../../static/info-icon.png"
					});
				}
			},
			callWxPayment: function(shoppingCart){
				// 挂起微信支付服务
				if(shoppingCart 
					&& shoppingCart.associations 
					&& shoppingCart.associations.cart_summary 
					&& shoppingCart.associations.cart_summary.length > 0
					&& shoppingCart.associations.cart_summary[0].wx_payment_info)
					{
						let timeStamp = new Date().getTime().toString();
						let nonceStr = shoppingCart.associations.cart_summary[0].wx_payment_info.nonce_str;
						let prepay_id = shoppingCart.associations.cart_summary[0].wx_payment_info.prepay_id;
						let appid = getApp().globalData.appId;
						let wx_pay_key = getApp().globalData.wx_pay_key;
						
						let paySign = cj.MD5('appId='+ appid +'&nonceStr='+ nonceStr +'&package=prepay_id='+ prepay_id +'&signType=MD5&timeStamp='+ timeStamp +'&key=' + wx_pay_key);
						paySign = paySign.toString().toUpperCase();
						if(Number(this.total) > 0&& shoppingCart.associations.cart_summary[0].wx_payment_info.prepay_id
					&& shoppingCart.associations.cart_summary[0].wx_payment_info.nonce_str){
							wx.requestPayment(
							{
								'timeStamp': timeStamp, //时间戳从1970年1月1日00:00:00至今的秒数,即当前的时间
								'nonceStr': nonceStr, //随机字符串，长度为32个字符以下。
								'package': 'prepay_id=' + prepay_id, //统一下单接口返回的 prepay_id 参数值
								'signType': 'MD5',
								'paySign': paySign,
								'success':(res) => {
									//TODO: 支付成功 将购物车生成订单
									this.paymentCallBack(shoppingCart);
								},
								'fail':(res) => {
									uni.showModal({
									    title: '提示',
									    content: '支付失败请重试！',
										showCancel:false,
										confirmColor:'#07c160'
									});
								}
							});
						}else{
							//TODO: 支付成功 将购物车生成订单
							this.paymentCallBack(shoppingCart);
						}
					}else {
						uni.showModal({
						    title: '提示',
						    content: '支付失败请重试！',
							showCancel:false,
							confirmColor:'#07c160'
						});
					}
			},
			paymentCallBack: function(shoppingCart){
				let wxPaymentCode = 'wx';
				
				if(shoppingCart
					&& shoppingCart.associations 
					&& shoppingCart.associations.cart_summary 
					&& shoppingCart.associations.cart_summary.length > 0
					&& shoppingCart.associations.cart_summary[0].wx_out_trade_no){
						wxPaymentCode +=  shoppingCart.associations.cart_summary[0].wx_out_trade_no;
					}
				// set data
				let param = {
					id_cart: shoppingCart.id,
					id_customer: shoppingCart.customer.id,
					total_paid: this.total,
					total_paid_real: this.total,
					wx_code: wxPaymentCode
				};
				// create order
				API.createOrder((response) => {
					uni.hideLoading();			
										
					// clear shopping cart
					getApp().globalData.shoppingCart.id = null;
					uni.showToast({
						title: "提交成功",
						image: "../../static/info-icon.png",
						duration:3000,
						success: () => {
							// back to order page
							wx.switchTab({
								url: '/pages/order/order'
							});
						}
					});
				}, param);
			}
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
