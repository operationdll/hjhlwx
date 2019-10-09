<template>
	<view class="section">
		<view class="section__title weui-panel__hd">我的预定</view>
		<view class="weui-media-box weui-media-box_appmsg" @click="submitForm">
			<view class="weui-media-box__hd weui-media-box__hd_in-appmsg">
				<image class="weui-media-box__thumb" src="../../static/order.png" />
			</view>
			<view class="weui-media-box__bd weui-media-box__bd_in-appmsg">
				<view class="weui-media-box__title title-state">
					<view>老人护理</view>
					<view style="color:red">已完成</view>
				</view>
				<view class="weui-media-box__desc" style="color:#179B16;">预订日期：2019-10-10 时间:14:20</view>
			</view>
		</view>
		<view class="weui-media-box weui-media-box_appmsg" @click="submitForm">
			<view class="weui-media-box__hd weui-media-box__hd_in-appmsg">
				<image class="weui-media-box__thumb" src="../../static/order.png" />
			</view>
			<view class="weui-media-box__bd weui-media-box__bd_in-appmsg">
				<view class="weui-media-box__title title-state">
					<view>晚晴关怀</view>
					<view style="color:red">已完成</view>
				</view>
				<view class="weui-media-box__desc" style="color:#179B16;">预订日期：2019-10-19 时间:15:00</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			submitForm: function(event) {
				let url =
					'/pages/settlement/settlement?region=盐田区&ycode=sddf&title=晚晴关怀&total=500&service=4小时&butBol=false&start=2019-10-19&time=15:00&userName=李四&address=地址2';
				uni.navigateTo({
					url: url
				});
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
