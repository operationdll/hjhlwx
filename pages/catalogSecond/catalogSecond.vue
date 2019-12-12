<template>
	<view class="page">
		<image src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/topimg1.jpg" style="width:100%;height: 380rpx;" v-if='care==1' />
		<image src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/topimg2.jpg" style="width:100%;height: 380rpx;"
		 v-else-if='care==2' />
		<image src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/topimg3.jpg" style="width:100%;height: 380rpx;"
		 v-else />
		<view class="content" v-if='care==1'>
			<view class="v1">
				<view class="v1-txt">
					<view class="dot"></view>针对正常,半失能或失能老人提供护理服务
				</view>
				<view class="v1-txt">
					<view class="dot"></view>个人卫生及生活环境卫生管理 : 卧床擦浴, 洗头
				</view>
				<view class="v1-txt">
					<view class="dot" style="width:6rpx"></view>生活照顾: 喂食，安全扶抱及活动，简易复康训练，清楚测量及记录生命表征
				</view>
				<view class="v1-txt">
					<view class="dot"></view>执行医嘱: 提示服药，陪伴及协助运动，正确使用辅助工具
				</view>
				<view class="v1-txt">
					<view class="dot"></view>心理安抚: 亲切关怀，陪伴患者重新适应家居及社区生活
				</view>
				<view class="v1-txt">
					<view class="dot"></view>其他: 陪诊，离院照顾，紧急情况的护理及急救处理
				</view>
			</view>
		</view>
		<view class="content" v-else-if='care==2'>
			<view class="v1">
				<view class="v1-txt">
					<view class="dot"></view>针对病理, 手术后康复期的人士提供护理服务
				</view>
				<view class="v1-txt">
					<view class="dot"></view>个人卫生及生活环境卫生管理 : 卧床擦浴, 洗头
				</view>
				<view class="v1-txt">
					<view class="dot" style="width:6rpx"></view>生活照顾: 喂食,安全扶抱及活动，简易复康训练，清楚测量及记录生命表征
				</view>
				<view class="v1-txt">
					<view class="dot"></view>执行医嘱: 提示服药，陪伴及协助运动，正确使用辅助工具
				</view>
				<view class="v1-txt">
					<view class="dot"></view>心理安抚: 亲切关怀，陪伴患者重新适应家居及社区生活
				</view>
				<view class="v1-txt">
					<view class="dot"></view>其 他: 陪诊，离院照顾，紧急情况的护理及急救处理
				</view>
			</view>
		</view>
		<view class="content" v-else>
			<view class="v1">
				<view class="v1-txt">
					<view class="dot"></view>针对各种外科手术后需要进行伤口换药和拆线的人群
				</view>
				<view class="v1-txt">
					<view class="dot"></view>针对正常,半失能或失能老人或其他人群提供
				</view>
				<view class="v1-txt">
					<view class="dot"></view>个人卫生及生活环境卫生管理
				</view>
				<view class="v1-txt">
					<view class="dot"></view>压疮的风险预防、分级评估，初期压疮的护理、换药分局部皮肤的按摩
				</view>
				<view class="v1-txt">
					<view class="dot"></view>执行医嘱: 提示服药，陪伴及协助运动，正确使用辅助工具
				</view>
				<view class="v1-txt">
					<view class="dot"></view>心理安抚: 亲切关怀，陪伴患者重新适应家居及社区生活
				</view>
			</view>
		</view>
		<view class="content">
			<view class="line"></view>
		</view>
		<view class="content">
			<view class="v1-txt txt">
				<text>保障</text>
				<image src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/baozhang.png" class="bzImg"></image>
				<text>免费投保</text>
			</view>
		</view>
		<view class="content">
			<view class="line"></view>
		</view>
		<view class="content">
			<view class="content-title">
				<image src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/fwtc.png" class="content-img"></image>
				<text class="content-txt" v-if='care!=3'>(#1-4按需要选取，5-6为服务基本内容)</text>
				<text class="content-txt" v-else>(#1及2按需要选取，3为服务基本内容)</text>
			</view>
		</view>
		<view class="weui-cells weui-cells_checkbox weui-cells_after-title">
			<view class="weui-cell weui-check__label" :class="index==0 ? 'weui-cell-topLine' : ''" v-for="(item, index) in products"
			 v-bind:key="index" @click="productChange(index)">
				<view class="weui-cell__hd weui-check__hd_in-checkbox">
					<icon type="circle" v-if="!item.checked"></icon>
					<icon type="success" v-if="item.checked"></icon>
				</view>
				<view style="display: flex;flex-direction: row;">
					<view class="content-title" style="align-items: center;">
						<block v-if='care==1'>
							<image src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/jcnr1.png" class="detail-img" v-if='index==0'></image>
							<image src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/jcnr2.png" class="detail-img" v-else-if='index==1'></image>
							<image src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/jcnr3.png" class="detail-img" v-else-if='index==2'></image>
							<image src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/jcnr4.png" class="detail-img" v-else-if='index==3'></image>
							<image src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/jcnr5.png" class="detail-img" v-else-if='index==4'></image>
							<image src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/jcnr6.png" class="detail-img" v-else></image>
						</block>
						<block v-else-if='care==2'>
							<image src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/jcnr1-1.png" class="detail-img" v-if='index==0'></image>
							<image src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/jcnr2.png" class="detail-img" v-else-if='index==1'></image>
							<image src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/jcnr3.png" class="detail-img" v-else-if='index==2'></image>
							<image src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/jcnr4.png" class="detail-img" v-else-if='index==3'></image>
							<image src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/jcnr5.png" class="detail-img" v-else-if='index==4'></image>
							<image src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/jcnr6.png" class="detail-img" v-else></image>
						</block>
						<block v-else>
							<image src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/yazhi.png" class="detail-img" v-if='index==0'></image>
							<image src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/shangkou.png" class="detail-img" v-else-if='index==1'></image>
							<image src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/jcnr6-1.png" class="detail-img" v-else></image>
						</block>
						<view class="content" style="width:492rpx;">
							<view class="v1">
								<view class="v1-txt">{{item.content}}</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="content">
			<view class="line"></view>
		</view>
		<view style="display: flex;flex-direction: row;">
			<block v-if='care==1'>
				<view class="content" style="padding:0px;">
					<image src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/syrq1.png" class="title-img" style="width: 240rpx;height: 240rpx;" />
				</view>
				<view class="content" style="padding-left:0px;">
					<view class="v1" style="width: 480rpx;margin-top: 12rpx;">
						<view class="v1-txt">1.独居老人或子女长期不在身边</view>
						<view class="v1-txt">2.慢病老人或易患慢病中老年人群</view>
						<view class="v1-txt">3.行动不便, 长期卧床, 术后恢复期的患者</view>
						<view class="v1-txt">4.认知障碍(阿尔茲海默症)或残疾患者</view>
					</view>
				</view>
			</block>
			<block v-else-if='care==2'>
				<view class="content" style="padding:0px;">
					<image src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/syrq2.png" class="title-img" style="width: 240rpx;height: 240rpx;" />
				</view>
				<view class="content" style="padding-left:0px;">
					<view class="v1" style="width: 480rpx;margin-top: 12rpx;">
						<view class="v1-txt">1.病理, 术后恢复期的人士</view>
						<view class="v1-txt">2.行动不便, 长期卧床</view>
					</view>
				</view>
			</block>
			<block v-else>
				<view class="content" style="padding:0px;">
					<image src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/syrq3.png" class="title-img" style="width: 240rpx;height: 240rpx;" />
				</view>
				<view class="content" style="padding-left:0px;">
					<view class="v1" style="width: 480rpx;margin-top: 12rpx;">
						<view class="v1-txt">1.外科手术后需要进行伤口换药和拆线的人</view>
						<view class="v1-txt">2.因行动不便, 长期卧床导致压疮的病患</view>
					</view>
				</view>
			</block>
		</view>
		<view class="content">
			<view class="line"></view>
		</view>
		<view class="content">
			<image src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/liucheng.png" class="title-img" style="width: 700rpx;height: 440rpx;" />
		</view>
		<view class="content">
			<view class="line"></view>
		</view>
		<block v-if='care==1'>
			<view class="content">
				<view class="content-title">
					<image src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/fwqts.png" class="content-img"></image>
					<text class="content-txt"></text>
				</view>
			</view>
			<view class="content" style="padding-left:80rpx;">
				<view class="v1">
					<view class="v1-txt">1.了解病情，近期服用药物的情况</view>
					<view class="v1-txt">2.诊前需准备所有的物品（医保卡、身份证、检查结果)</view>
					<view class="v1-txt">3.必须让客户自备护理需用到的一些物品及药物</view>
				</view>
			</view>
		</block>
		<block v-else-if='care==2'>
			<view class="content">
				<view class="content-title">
					<image src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/fwqts.png" class="content-img"></image>
					<text class="content-txt"></text>
				</view>
			</view>
			<view class="content" style="padding-left:80rpx;">
				<view class="v1">
					<view class="v1-txt">1.了解病情，近期服用药物的情况</view>
					<view class="v1-txt">2.诊前需准备所有的物品（医保卡、身份证、检查结果)</view>
					<view class="v1-txt">3.必须让客户自备护理需用到的一些物品及药物</view>
				</view>
			</view>
		</block>
		<block v-else>
			<view class="content">
				<view class="content-title">
					<image src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/ycfwqts.png" class="content-img" style="width:500rpx"></image>
					<text class="content-txt"></text>
				</view>
			</view>
			<view class="content" style="padding-left:80rpx;">
				<view class="v1">
					<view class="v1-txt">1.用户须自备药品，护士只提供压疮护理技术服务</view>
					<view class="v1-txt">2.护士上门一次可为患者提供三个部位的护理服务，每个部位护理面积不超过10*10cm，如超出规定范围，按30元/3个部位收取费用</view>
					<view class="v1-txt">3.根据压疮具体情况分期，采取不同的护理措施</view>
				</view>
			</view>
			<view class="content">
				<view class="content-title">
					<image src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/skfwqts.png" class="content-img" style="width:500rpx"></image>
					<text class="content-txt"></text>
				</view>
			</view>
			<view class="content" style="padding-left:80rpx;">
				<view class="v1">
					<view class="v1-txt">1.用户须上传换药部位情况及上一次维护记录</view>
					<view class="v1-txt">2.年龄不满5岁者不提供上门服务</view>
					<view class="v1-txt">3.如换药部位有感染倾向，不提供上门服务</view>
					<view class="v1-txt">4.伤口严重感染或坏死、大量活动性出血这不提供上门换药服务</view>
					<view class="v1-txt">5.伤口缝线大于10针, 或位置多于5处, 需要进行评估及另收服务费用</view>
				</view>
			</view>
		</block>
		<view class="content">
			<view class="content-title">
				<image src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/fwhtx.png" class="content-img"></image>
				<text class="content-txt"></text>
			</view>
		</view>
		<view class="content" style="padding-left:80rpx;">
			<view class="v1">
				<view class="v1-txt">查询、复诊、预约等其他检查项目</view>
			</view>
		</view>
		<view class="content">
			<view class="content-title">
				<image src="https://iservice.oss-cn-beijing.aliyuncs.com/ihuli/1/fwxz.png" class="content-img"></image>
				<text class="content-txt"></text>
			</view>
		</view>
		<view class="content" v-if='care==1' style="padding-left:80rpx;">
			<view class="v1">
				<view class="v1-txt">1.客服接单后会主动与您联系，沟通患者基本情况、挂号情况及就诊科室，约定服务行程。</view>
				<view class="v1-txt">2.服务当日，护理人员将提前到达医院为您规划就诊流程并在您预约的医院进行面对面陪诊服务。</view>
				<view class="v1-txt">3.护理人员会在与您见面时，或到达预约时间后，点击定位打卡。</view>
				<view class="v1-txt">4.服务过程中如遇到任何问题及建议请联系i护理客服电话，我们会及时为您处理。</view>
				<view class="v1-txt">5.本服务不包含代挂号，请您先挂号后预约本服务或预约本服务后由护理人员协助您挂号。</view>
				<view class="v1-txt" style="color:red;">6.特別日期或假日则需另付30%作为行政费用。否则可以拒绝提供服务</view>
				<view class="v1-txt">7.本项目由陪诊经验丰富的护士为你服务。</view>
				<view class="v1-txt">8.本项不提供接送服务，请您按时到达所选位置。</view>
			</view>
		</view>
		<view class="content" v-else-if='care==2' style="padding-left:80rpx;">
			<view class="v1">
				<view class="v1-txt">1.客服接单后会主动与您联系，沟通患者基本情况、挂号情况及就诊科室，约定服务行程。</view>
				<view class="v1-txt">2.服务当日，护理人员将提前到达医院为您规划就诊流程并在您预约的医院进行面对面陪诊服务。</view>
				<view class="v1-txt">3.护理人员会在与您见面时，或到达预约时间后，点击定位打卡。</view>
				<view class="v1-txt">4.服务过程中如遇到任何问题及建议请联系i护理客服电话，我们会及时为您处理。</view>
				<view class="v1-txt">5.本服务不包含代挂号，请您先挂号后预约本服务或预约本服务后由护理人员协助您挂号。</view>
				<view class="v1-txt" style="color:red;">6.特別日期或假日则需另付30%作为行政费用。否则可以拒绝提供服务</view>
				<view class="v1-txt">7.本项目由陪诊经验丰富的护士为你服务。</view>
				<view class="v1-txt">8.本项不提供接送服务，请您按时到达所选位置</view>
			</view>
		</view>
		<view class="content" v-else style="padding-left:80rpx;">
			<view class="v1">
				<view class="v1-txt">1.客服接单后会主动与您联系，沟通患者基本情况、挂号情况及就诊科室，约定服务行程。</view>
				<view class="v1-txt">2.本服务不包含较大创伤及术后的伤口拆线，如有伤口拆线需求，请与客服联系</view>
				<view class="v1-txt">3.耗材需患者自备：一次性无菌换药盘，无菌纱布，绷带，生理盐水如无法提供所需耗材，可由护士代买, 需要支付相关耗材费用；耗材存在任何质量问题平台概不负责</view>
				<view class="v1-txt">4.由专业人员评估患者整体情况，并在双方签署知情同 意书的情况下方可执行</view>
				<view class="v1-txt">5.受限于客观条件：具有攻击性，易产生过激反应，具有传染病患者不在服务范围内</view>
				<view class="v1-txt">6.此护理项目需家属陪同，如家属无法陪同请慎用此护理服务</view>
				<view class="v1-txt">7.本服务只提供相关技术，不提供耗材</view>
				<view class="v1-txt">8.护理人员会在与您见面时，或到达预约时间后，点击定位打卡。</view>
				<view class="v1-txt">9.服务过程中如遇到任何问题及建议请联系i护理客服电话，我们会及时为您处理。</view>
				<view class="v1-txt" style="color:red;">10.特別日期或假日则需另付30%作为行政费用。否则可以拒绝提供服务</view>
				<view class="v1-txt">11.本项目由陪诊经验丰富的护士为你服务。</view>
			</view>
		</view>
		<view style="display:block;background:white;height:140rpx;width:100%;"></view>
		<view class="bntView">
			<button class="btn1" @click="bindCareTap($event)" data-care="1">
				当天下单
			</button>
			<button class="btn1" @click="bindCareTap($event)" data-care="2">
				预约下单
			</button>
		</view>
	</view>
</template>

<script>
	let that;
	export default {
		data() {
			return {
				flag: true,
				title: '',
				care: 1,
				selectedCareId: 11,
				products: [],

				// 基础护理
				care1Service: {
					id: 11,
					hotel_name: '基础护理',
					care: 1
				},
				// 临床护理
				care2Service: {
					id: 14,
					hotel_name: '临床护理',
					care: 2
				},
				// 特别护理
				care3Service: {
					id: 15,
					hotel_name: '特别护理',
					care: 3
				},
			}
		},
		onLoad(options) {
			that = this;

			// load service 临时方法
			
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

			this.selectedCareId = getApp().globalData.selectedService.id;

			if (this.selectedCareId === this.care1Service.id) {
				this.care = 1;
			} else if (this.selectedCareId === this.care2Service.id) {
				this.care = 2;
			} else if (this.selectedCareId === this.care3Service.id) {
				this.care = 3;
			}

			this.care = Number(this.care);

			// 临时方法结束
	
			let title = '';
			let products = [];
			let catalog = {};
			if (this.care === 1 || this.care === 2 ) {
				if (this.care === 1) {
					title = '基础护理';
					catalog = {
						value: 1,
						content: '老人照护(针对失能或半失能老人提供卧床擦浴、洗头等基本生活护理、及日常照护和营养指导、心理疏导、用药指导)',
						name: '老人照护',
						checked: false
					};
					products.push(catalog);
				} else {
					title = '临床护理';
					catalog = {
						value: 2,
						content: '病患照护(针对因病患者离开医院回家休养康复提供卧床擦浴、洗头等基本生活护理、及日常照护和营养指导、心理疏导、灵性关怀)',
						name: '病患照护',
						checked: false
					};
					products.push(catalog);
				}
				catalog = {
					value: 3,
					content: '晚晴关怀(生活护理与指导;心理疏导;专业护理和指导;疼痛护理和指导;灵性关怀)',
					name: '晚晴关怀',
					checked: false
				};
				products.push(catalog);
				catalog = {
					value: 4,
					content: '陪诊陪护(全程陪诊、协助挂号、取药、帮组梳理病情、给予用药指导)',
					name: '陪诊陪护',
					checked: false
				};
				products.push(catalog);
				catalog = {
					value: 5,
					content: '康复护理(协助功能锻炼、肢体康复按摩)',
					name: '康复护理',
					checked: false
				};
				products.push(catalog);
				catalog = {
					value: 6,
					content: '慢病管理(高血压、糖尿病、肺心病等患者生命体征测量和记录，整理常规用药及并发症的预防指导)',
					name: '慢病管理',
					checked: true
				};
				products.push(catalog);
			} else if (this.care === 3) {
				title = '特别护理';
				catalog = {
					value: 8,
					content: '压疮护理(压仓的风险预防、分级评估;初期压疮的护理、换药及局部皮肤的按摩)',
					name: '压疮护理',
					checked: false
				};
				products.push(catalog);
				catalog = {
					value: 9,
					content: '伤口换药(上门观察伤口情況, 作相应处理; 保持创面清洁, 清除伤口異物, 保持和防止伤口受损和外來感染。促进组织生长伤口愈合)',
					name: '伤口换药',
					checked: false
				};
				products.push(catalog);
			}
			catalog = {
				value: 7,
				content: '健康规划(个性化护理记录，检测健康进度，提供健康规划指导)',
				name: '健康规划',
				checked: true
			};
			products.push(catalog);

			this.title = title;
			this.products = products;
			//this.care = options.care;
		},
		methods: {
			productChange: function(index) {
				if (this.care != 3) {
					if (index == 4 || index == 5) {
						return;
					} else {
						this.products[index].checked = !this.products[index].checked;
					}
				} else {
					if (index == 2) {
						return;
					} else {
						this.products[index].checked = !this.products[index].checked;
					}
				}
			},
			bindCareTap: function(event) {
				//选中的按钮
				let careDate = event.currentTarget.dataset.care;
				let selectedProductItems = [];
				for(let product of this.products){
					if(product.checked === true){
						selectedProductItems.push(product.name);
					}
				}
				
				getApp().globalData.selectedService.productItems = selectedProductItems;
				
				wx.navigateTo({
					url: '/pages/porder/porder?orderType=' + careDate
				});
			}
		}
	}
</script>

<style>
	.content {
		padding: 0rpx 30rpx;
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

	.v1 {
		background: rgb(241, 241, 241);
		color: rgb(95, 95, 95);
		border-radius: 10rpx;
		-moz-border-radius: 10rpx;
		-webkit-border-radius: 10rpx;
		padding: 10rpx 0rpx;
	}

	.v1-txt {
		padding: 0rpx 20rpx;
		display: flex;
		flex-direction: row;
		font-size: 26rpx;
	}

	.dot {
		width: 5rpx;
		height: 5rpx;
		border-radius: 50%;
		-moz-border-radius: 50%;
		-webkit-border-radius: 50%;
		background: rgb(95, 95, 95);
		margin-right: 10rpx;
		margin-top: 18rpx;
	}

	.line {
		display: block;
		width: 100%;
		height: 3rpx;
		background: rgb(160, 160, 160);
		margin: 26rpx 0px;
	}

	.bzImg {
		width: 30px;
		height: 30px;
		margin-left: 5px;
		margin-right: 10px;
		margin-top: -10px;
	}

	.content-center {
		align-items: center;
	}

	.title-img {
		width: 65px;
		height: 75px;
	}

	.btn1 {
		width: 350rpx;
		background: rgb(250, 109, 63);
		color: white;
	}

	.bntView {
		position: fixed;
		left: 0;
		bottom: 5rpx;
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	.weui-cells::after {
		border-bottom: 0px;
	}

	.detail-img {
		width: 120rpx;
		height: 120rpx;
	}

	.weui-cell {
		padding: 16px;
		position: relative;
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;
	}

	.weui-cells_checkbox .weui-check__label:before {
		left: 55px;
	}

	.weui-cell:before {
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

	.weui-cell-topLine:before {
		border-top: 0px;
	}
</style>
