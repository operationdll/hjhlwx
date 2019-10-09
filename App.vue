<script>
	import Util from '@/common/util.js';
	
	export default {
		globalData: {
			userInfo: null,
			regions: [],
			livings: ["独居", "与配偶同住", "与子女同住", "与保姆同住"],
			flats: ["私人屋苑", "宿舍楼(无电梯)", "平房"],
			diseases: ["健康良好", "长期病患", "曾施手术", "失明", "失聪", "其他"],
			scares: ["无", "有"],
			ifs: [{
				name: '鼻胃管',
				value: 0,
				checked: false
			}, {
				name: '留置导尿管',
				value: 1,
				checked: false
			}, {
				name: '长期氧气',
				value: 2,
				checked: false
			}, {
				name: '气管造口',
				value: 3,
				checked: false
			}, {
				name: '腹膜透析',
				value: 4,
				checked: false
			}, {
				name: '直肠造口',
				value: 5,
				checked: false
			}, {
				name: '压疮',
				value: 6,
				checked: false
			}, {
				name: '其他',
				value: 7,
				checked: false
			}],
			isNewUser: true, //是否新用户
			users: [{
				id: 0,
				lastname: '',
				firstname: '',
				sexes: 0,
				birthDate: Util.getToday(),
				phone: '',
				regions: 0,
				address: '',
				occupation: '',
				livings: 0,
				flats: 0,
				diseases: 0,
				scares: 0,
				ifs: [false, false, false, false, false, false, false, false],
				otherTxt: '',
				relationship: 0
			}, {
				id: 0,
				lastname: '',
				firstname: '',
				sexes: 0,
				birthDate: Util.getToday(),
				phone: '',
				regions: 0,
				address: '',
				occupation: '',
				livings: 0,
				flats: 0,
				diseases: 0,
				scares: 0,
				ifs: [false, false, false, false, false, false, false, false],
				otherTxt: '',
				relationship: 0
			}]
		},
		onLaunch: function() {
			// console.log('App Launch')
		},
		onShow: function() {
			// console.log('App Show')
		},
		onHide: function() {
			// console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
	/*设置按钮颜色*/
	uni-button[type=primary] {
		background-color: #179B16;
	}

	uni-button[disabled][type=primary] {
		background-color: rgba(23, 155, 22, .6);
	}

	.button-hover[type=primary] {
		background-color: #179B16;
	}

	.uni-icon-success {
		color: #07c160 !important;
	}

	.uni-icon-success_no_circle {
		color: #07c160;
	}
</style>
