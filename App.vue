<script>
	import Util from '@/common/util.js';
	// import Stomp from '@/common/stomp.min.js';

	export default {
		globalData: {
			appId: 'wx29f4f1fbbae60fd8',
			wx_pay_key: '12Rw98f08vL28Id76SZ88hj52Y36H4jk',
			nickName: '',
			userInfo: null,
			regions: [],
			livings: ["独居", "与配偶同住", "与子女同住", "与保姆同住", "与父母同住"],
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
				diseasesDetail:'',
				scares: 0,
				ifs: [false, false, false, false, false, false, false, false],
				otherTxt: '',
				relationship: 0
			},{
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
				diseasesDetail:'',
				scares: 0,
				ifs: [false, false, false, false, false, false, false, false],
				otherTxt: '',
				relationship: 0
			}],
			services: [],
			selectedService: {},
			shoppingCart: {
				id: null,
				id_address_delivery: '',
				id_address_invoice: '',
				id_currency: 1,
				customer: null,
				otherMember: null,
				id_lang: 3,
				gift: 1,
				gift_message: '',
				date_from: '',
				date_to: '',
				reference: 1,
				promocode: '',
				global_demand: '',

				products: []
			},
			shoppingCartDefaultValue: {
				id_currency: 1,
				id_lang: 3,
				gift: 1,
				reference: 1
			},
			selectedOrderItem: {
				id: 0,
				orderStateName: '',
				reference: '',
				date_upd: '',
				gift_message: '',
				associations: {
					order_rows: [{
						id: '',
						product_name: ''
					}],
				},
				orderName: ''
			},
			orderStates: [{
					id: 0,
					name: '等待处理'
				},
				{
					id: 1,
					name: '开始服务'
				},
				{
					id: 2,
					name: '订单受理'
				},
				{
					id: 3,
					name: '派单中'
				},
				{
					id: 4,
					name: '服务进行中'
				},
				{
					id: 5,
					name: '服务完结'
				},
				{
					id: 6,
					name: '订单未能受理'
				},
				{
					id: 7,
					name: '产品退货'
				},
				{
					id: 8,
					name: '付款错误'
				},
				{
					id: 9,
					name: '继续跟进'
				},
				{
					id: 10,
					name: '等待银行电汇付款'
				},
				{
					id: 11,
					name: '等待PayPal付款'
				},
				{
					id: 12,
					name: '指派医护人员出发'
				},
				{
					id: 13,
					name: '延期交货（未付款）'
				},
				{
					id: 14,
					name: '成功接收支付'
				},

			]
		},
		onLaunch: function() {
			// console.log('App Launch')
		},
		onShow: function() {
			// console.log('App Show')
			
			// wx.connectSocket({
			//   url: 'https://icare.easyiservice.com'
			// })
			// console.log(Stomp);
			//显示消息提示
			// wx.showTabBarRedDot({
			// 	index: 2
			// });
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
