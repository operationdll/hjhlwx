<template>
	<view class="text">
		<view class="gbmask">
			<view class="content">
				<view class="brand">{{title}}</view>
				<view class="intro">
					<text>护理人:</text>
					<text>{{userName}}</text>
				</view>
				<view class="intro">
					<text>服务区域:</text>
					<text>{{region}}</text>
				</view>
				<view class="intro">
					<text>服务地址:</text>
					<text>{{address}}</text>
				</view>
				<view class="intro">
					<text>区域附加费:</text>
					<text>50元</text>
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
					<text>预订日期:</text>
					<text>{{start}}</text>
				</view>
				<view class="intro">
					<text>预订时间:</text>
					<text>{{time}}</text>
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
	let that;
	export default {
		data() {
			return {
				region: '',
				ycode: '',
				start: '',
				title: '',
				flag: true,
				total: '',
				discount: 0,
				service: '',
				butBol: true,
				time: '',
				userName: '',
				address: '',
			}
		},
		onLoad: function(options) {
			that = this;
			if (undefined != options.butBol) {
				that.butBol = false;
			}
			let discount = 0;
			if (options.ycode != '') {
				discount = 50;
			}
			let total = Number(options.total);
			total = total + 50 - discount;
			that.start = options.start;
			that.region = options.region;
			that.ycode = options.ycode;
			that.title = options.title;
			that.total = total;
			that.discount = discount;
			that.service = options.service;
			that.time = options.time;
			that.userName = options.userName;
			that.address = options.address;
		},
		methods: {
			bindSubmit: function() {
				let total = that.total;
				uni.showModal({
				    title: '提示',
				    content: '总价:' + total + '元,是否提交订单？',
				    success: function (res) {
				        if (res.confirm) {
				            uni.showToast({
				                title: "提交成功",
				            	image:"../../static/info-icon.png"
				            });
				        } else if (res.cancel) {
				            console.log('用户点击取消');
				        }
				    }
				});
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
		background-image: url('https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/orderbg.jpeg');
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
