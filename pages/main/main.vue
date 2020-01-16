<template>
	<view>
		<web-view src="https://mp.weixin.qq.com/s/C33_ynmAUTv-NRnq14O0ow"></web-view>
	</view>
</template>

<script>
	
	
	export default {
		data() {
			return {
				 
			}
		},
		onLoad(options) {
			//开启分享功能
			wx.showShareMenu();
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
