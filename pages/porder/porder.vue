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
							<view class="uni-input">{{regions[regionIndex].name}}</view>
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
			<view class="weui-cells__title" style="border-bottom: 1rpx solid rgba(0,0,0,.1);">服务价格</view>
			<view class="weui-cells weui-cells_after-title">
				<radio-group bindchange="radioChange">
					<label class="weui-cell weui-check__label" v-for="(item, index) in radioItems" v-bind:key="index" @click="radioChange(index)">
						<view class="weui-cell__bd">{{item.name}}</view>
						<view class="weui-cell__ft weui-cell__ft_in-radio" v-if="item.checked">
							<icon class="weui-icon-radio" type="success_no_circle" size="16"></icon>
						</view>
					</label>
				</radio-group>
			</view>
			<block v-if="care!=1">
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
						<picker mode="time" :value="time" start="11:00" end="19:00" @change="bindTimeChange">
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
	import Util from '@/common/util.js';
	
	let that;
	export default {
		data() {
			return {
				care: 0,
				flag: true,
				radioItems: [{
						name: '500/4小时',
						value: '0',
						total: 500,
						checked: true
					},
					{
						name: '280/2小时',
						value: '1',
						total: 280,
						checked: false
					}
				],
				dateStart: Util.dateAddDay(1),
				start: Util.dateAddDay(1),
				end: Util.dateAddDay(31),
				total: 500,
				regions: getApp().globalData.regions,
				regionIndex: 0,
				ycode: '',
				title: '',
				service: '4小时',
				time: '11:00',
				titles1: '',
				titles2: '',
				infoUsers: ["本人"],
				infoUserIndex: 0,
				address: '',
				bntDis: false
			}
		},
		onLoad(options) {
			that = this;
			let titles1 = '当天下单';
			let titles2 = '当天服务';
			if (options.care != 1) {
				titles1 = '预约下单';
				titles2 = '预订时间服务';
			} else {
				//设置16点之后就不能预订当天服务
				let now = new Date();
				if (now.getHours() > 15) {
					this.bntDis = true;
				}
				this.dateStart = Util.getToday();
			}
			this.care = options.care;
			this.title = options.title;
			this.titles1 = titles1;
			this.titles2 = titles2;
			//添加信息人
			let users = getApp().globalData.users;
			if (users.length > 2) {
			  for (let i = 2; i < users.length; i++) {
				let name = users[i].lastname + users[i].firstname;
				this.infoUsers.push(name);
			  }
			}
			console.log(this.regions)
		},
		methods: {
			radioChange: function(index) {
				for (let i = 0; i < this.radioItems.length; i++) {
					if (index == i) {
						this.radioItems[i].checked = true;
					} else {
						this.radioItems[i].checked = false;
					}
				}
			},
			bindInfoUserChange: function(e) {
				this.infoUserIndex = e.target.value;
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
				//当天下单需要判断时间
				if (this.care == 1) {
					let date1 = new Date();
					let date2 = new Date(Util.getToday() + ' ' + this.time);
					let s1 = date1.getTime(),
						s2 = date2.getTime();
					let total = s2 - s1;
					let timeSpanStr = Math.round((total / (1000 * 60)));
					if (timeSpanStr < 180) {
						uni.showToast({
							title: "服务需提前3小时预订",
							image: "../../static/info-icon.png",
							duration: 2000
						});
						return;
					}
				}
				let userName = 'aaaa';
				let url = '/pages/settlement/settlement?region=' + this.regions[this.regionIndex] + '&ycode=' + this.ycode +
					'&title=' + this.title + '&total=' + this.total + '&service=' + this.service + '&start=' + this.dateStart +
					'&time=' + this.time + '&userName=' + userName + '&address=' + this.address;
				uni.navigateTo({
					url: url
				});
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
