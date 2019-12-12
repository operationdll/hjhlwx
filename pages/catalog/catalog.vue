<template>
	<view class="page">
		<view class="page__bd">
			<view class="weui-panel weui-panel_access">
				<view class="weui-panel__hd" style="padding:0px">
					<image src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/topimg.jpg" style="width:100%;height: 380rpx;" />
				</view>
				<view class="weui-panel__bd">
					<view @click="bindCareTap(care1Service)" data-care="1">
						<view class="title-content">
							<view class="title-line"></view>
							<image class="title-img" src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/care1.png" />
							<view class="title-line"></view>
						</view>
						<view class="content">
							<view class="content-title">
								<image src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/fwtc.png" class="content-img"></image>
								<text class="content-txt">(#1-4按需要选取，5-6为服务基本内容)</text>
							</view>
							<view class="detail">
								<view class="detail-row1">
									<image src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/jcnr1.png" class="detail-img"></image>
									<image src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/jcnr2.png" class="detail-img"></image>
									<image src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/jcnr3.png" class="detail-img"></image>
									<image src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/jcnr4.png" class="detail-img"></image>
								</view>
								<view class="detail-row1">
									<view style="display:block;" class="detail-img"></view>
									<image src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/jcnr5.png" class="detail-img"></image>
									<image src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/jcnr6.png" class="detail-img"></image>
									<view style="display:block;" class="detail-img"></view>
								</view>
							</view>
						</view>
					</view>
					<view @click="bindCareTap(care2Service)" data-care="2">
						<view class="title-content">
							<view class="title-line"></view>
							<image class="title-img" src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/care2.png" />
							<view class="title-line"></view>
						</view>
						<view class="content">
							<view class="content-title">
								<image src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/fwtc.png" class="content-img"></image>
								<text class="content-txt">(#1-4按需要选取，5-6为服务基本内容)</text>
							</view>
							<view class="detail">
								<view class="detail-row1">
									<image src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/jcnr1-1.png" class="detail-img"></image>
									<image src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/jcnr2.png" class="detail-img"></image>
									<image src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/jcnr3.png" class="detail-img"></image>
									<image src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/jcnr4.png" class="detail-img"></image>
								</view>
								<view class="detail-row1">
									<view style="display:block;" class="detail-img"></view>
									<image src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/jcnr5.png" class="detail-img"></image>
									<image src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/jcnr6.png" class="detail-img"></image>
									<view style="display:block;" class="detail-img"></view>
								</view>
							</view>
						</view>
					</view>
					<view @click="bindCareTap(care3Service)" data-care="3">
						<view class="title-content">
							<view class="title-line" style="margin-bottom:-4rpx;"></view>
							<image class="title-img" src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/care3.png" />
							<view class="title-line" style="margin-bottom:-4rpx;"></view>
						</view>
						<view class="content" style="margin-top:4rpx;">
							<view class="content-title">
								<image src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/fwtc.png" class="content-img"></image>
								<text class="content-txt">(#1及2按需要选取，3为服务基本内容)</text>
							</view>
							<view class="detail">
								<view class="detail-row1">
									<image src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/yazhi.png" class="detail-img"></image>
									<image src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/shangkou.png" class="detail-img"></image>
									<image src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/jcnr6-1.png" class="detail-img"></image>
								</view>
							</view>
						</view>
					</view>
					<view style="display:block;height:60rpx;width:100%"></view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import Util from '@/common/util.js';
	
	export default {
		data() {
			return {
				// 基础护理
				care1Service: {id : 11, hotel_name : '基础护理'},
				// 临床护理
				care2Service: {id : 14, hotel_name : '临床护理'},
				// 特别护理
				care3Service: {id : 15, hotel_name : '特别护理'},
			}
		},
		onLoad() {
			//判断是否登录
			if(!Util.isLogin()){
				uni.redirectTo({
					url: '/pages/index/index'
				});
				return;
			}
			
			self = this;
			//绑定主服务
			let services = getApp().globalData.services;
			if (services && services.length > 0) {
				for (let service of services) {
					if (service.hotel_name === this.care1Service.hotel_name) {
						this.care1Service = service;
					} else if (service.hotel_name === this.care2Service.hotel_name) {
						this.care2Service = service;
					} else if (service.hotel_name === this.care3Service.hotel_name) {
						this.care3Service = service;
					}
				}
			}
		},
		methods: {
			//事件处理函数
			bindCareTap: function(selectedService) {
				//选中的按钮
				// let careDate = event.currentTarget.dataset.care;
				// set current selected service
				getApp().globalData.selectedService = selectedService;
				
				uni.navigateTo({
					url: '/pages/catalogSecond/catalogSecond'
				});
			}
		}
	}
</script>

<style>
	.weui-panel__hd:after {
		border-bottom: 0px;
	}

	.title-img {
		width: 220rpx;
		height: 220rpx;
	}

	.title-content {
		display: flex;
		width: 100%;
		flex-direction: row;
		align-items: flex-end;
		justify-content: center;
	}

	.title-line {
		display: block;
		width: 240rpx;
		height: 18rpx;
		margin-bottom: 6rpx;
		background-repeat: repeat-y;
		background-size: 100% 100%;
		-moz-background-size: 100% 100%;
		background-image: url('https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/ling.jpeg');
	}

	.weui-media-box:before {
		border: 0px;
	}

	.content {
		padding: 0rpx 50rpx;
		font-size: 30rpx;
		display: flex;
		flex-direction: column;
	}

	.content-title {
		padding: 0rpx 0rpx;
		font-size: 18rpx;
		display: flex;
		flex-direction: row;
		margin-top: 16rpx;
		align-items: flex-end;

	}

	.content-img {
		width: 360rpx;
		height: 100rpx;
		margin-left: -20rpx;
	}

	.content-txt {
		margin-bottom: 20rpx;
	}

	.detail {
		background: rgb(241, 241, 241);
		border-radius: 10rpx;
		-moz-border-radius: 10rpx;
		-webkit-border-radius: 10rpx;
		display: flex;
		flex-direction: column;
	}

	.detail-row1 {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		padding: 20rpx 0rpx;
	}

	.detail-img {
		width: 120rpx;
		height: 120rpx;
	}
</style>
