<template>
	<view class="page">
		<button class='btn1' @click="bindCallUser" style="margin-top: -250rpx;">
			<image class='btnImg' src='../../static/calluser.png'></image>
			<view>联系客服</view>
		</button>
		<!-- #ifdef MP-WEIXIN -->
		<button open-type="contact" class='btn1'>
			<image class='btnImg' src='../../static/weichat.jpg'></image>
			<view>客服微信</view>
		</button>
		<!-- #endif -->
		<!-- #ifdef  H5 || APP-PLUS -->
		<button @click="bindCustomer" class='btn1'>
			<image class='btnImg' src='../../static/weichat.jpg'></image>
			<view>客服微信</view>
		</button>
		<uni-popup ref="popup" type="center">
			正在开发中
			<button @click="closePopup">关闭弹出层</button>
		</uni-popup>
		<!-- #endif -->
	</view>
</template>

<script>
	import uniPopup from "@/components/uni-popup/uni-popup.vue"

	export default {
		data() {
			return {

			}
		},
		methods: {
			bindCallUser(e) {
				uni.makePhoneCall({
					phoneNumber: '4008386681'
				});
			},
			bindCustomer() {
				this.$refs.popup.open()
			},
			closePopup() {
				this.$refs.popup.close()
			}
		},
		components: {
			uniPopup
		}
	}
</script>

<style>
	.btn1 {
		width: 200rpx;
		height: 200rpx;
		margin-top: 100rpx;
		color: black;
		border-radius: 0rpx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		font-size: 35rpx;
		background-color: rgba(255, 255, 255, 0.5);
	}

	.btnImg {
		width: 100rpx;
		height: 100rpx;
	}

	.btn1::after {
		border: 0;
	}

	.page {
		position: fixed;
		height: 100%;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		/*垂直居中*/
		justify-content: center;
		/*水平居中*/
		background-repeat: no-repeat;
		background-size: 100% 100%;
		background-image: url('https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/sharebg.jpeg');
	}
</style>
