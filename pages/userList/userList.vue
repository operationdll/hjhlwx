<template>
	<view>
		<view class="example-title">人员列表</view>
		<uni-list>
			<view @click="updateUser($event,index)" v-for="(item, index) in userList" v-bind:key="index"  style="border-bottom: 1px #f5f5f5 solid;">
				<view class="cont" v-if="index==0">本人信息</view>
				<view class="cont" v-else>{{item.lastname}}{{item.firstname}}</view>
			</view>
		</uni-list>
		<view style="width: 100%;display: flex;justify-content: center;padding-top: 5px;" v-if="showBnt">
			<button class="weui-btn" type="primary" @click="addMember" style="width:700rpx;">新增成员</button>
		</view>
	</view>
</template>

<script>
	import Util from '@/common/util.js';
	import uniList from '@/components/uni-list/uni-list.vue';
	
	export default {
		components: {
			uniList
		},
		data() {
			return {
				userList: [],
				showBnt: false
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
			//判断是否注册过用户信息
			let id = getApp().globalData.users[0].id;
			if(id == 0){
				uni.showToast({
					title: "请先注册用户信息",
					image: "../../static/info-icon.png"
				});
				setTimeout(function(){
					uni.navigateTo({
						url: '/pages/user/user?userIndex=0'
					});
				},1500);
			}
		},
		onShow: function() {
			this.userList = JSON.parse(JSON.stringify(getApp().globalData.users));
			if (!getApp().globalData.isNewUser) {
				this.showBnt = true;
			}
		},
		methods: {
			updateUser(e, v) {
				uni.navigateTo({
					url: '/pages/user/user?userIndex=' + v
				});
			},
			addMember() {
				uni.navigateTo({
					url: '/pages/user/user?userIndex=1'
				});
			}
		}
	}
</script>

<style>
	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #efeff4
	}

	view {
		font-size: 28upx;
		line-height: inherit
	}

	.example {
		padding: 0 30upx 30upx
	}

	.example-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 32upx;
		color: #464e52;
		padding: 30upx 30upx 30upx 50upx;
		margin-top: 20upx;
		position: relative;
		background-color: #fdfdfd;
		border-bottom: 1px #f5f5f5 solid;
	}

	.example-title__after {
		position: relative;
		color: #031e3c
	}

	.example-title:after {
		content: '';
		position: absolute;
		left: 30upx;
		margin: auto;
		top: 0;
		bottom: 0;
		width: 6upx;
		height: 32upx;
		background-color: #ccc
	}

	.example .example-title {
		margin: 40upx 0
	}

	.example-body {
		padding: 30upx;
		background: #fff
	}

	.example-info {
		padding: 30upx;
		color: #3b4144;
		background: #fff
	}

	.cont {
		height: 90upx;
		line-height: 90upx;
		padding: 0 30upx;
		position: relative;
		background: #fff;
	}

	.cont::before {
		position: absolute;
		z-index: 3;
		left: 0;
		right: 0;
		top: 0;
		height: 1px;
		content: '';
		transform: scaleY(0.5);
		background-color: $uni-border-color;
	}

	.cont::after {
		position: absolute;
		z-index: 3;
		left: 0;
		right: 0;
		bottom: 0;
		height: 1px;
		content: '';
		transform: scaleY(0.5);
		background-color: $uni-border-color;
	}

	.example-body {
		display: flex;
		flex-direction: row;
		justify-content: center;
		padding: 20upx 0;
	}

	/* .button-view {
		display: flex;
		flex-direction: row;
		justify-content: center;
		padding: 20upx 0;
		background: #fff;
	} */

	.button {
		border: 1px solid #E7E7E7;
		padding: 8upx 16upx;
		border-radius: 8upx;
	}
</style>
