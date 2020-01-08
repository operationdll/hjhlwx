const API_URL = "https://icare.easyiservice.com/api";
const KEY = "G56HG9LL8J51Q76SFWILWV972QD9JXF1";

//API公用方法
const baseAPI = (url, method, callback, param = {}) => {
	//调用api
	uni.showLoading({
		title: '加载中',
		mask: true
	});
	uni.request({
		url: API_URL + url + "?output_format=JSON" + "&ws_key=" + KEY,
		method: method,
		sslVerify: false,
		data: param,
		success: (res) => {
			if (callback) {
				callback(res);
			}

		},
		fail: function(res) {
			console.log(res);
			uni.showToast({
				title: "请求错误",
				image: "../../static/info-icon.png"
			});
		}
	});
}

//APIPostXMl数据
const baseXML = (url, method, callback, xml) => {
	//调用api
	uni.showLoading({
		title: '加载中',
		mask: true
	});
	uni.request({
		url: API_URL + url + "?output_format=JSON" + "&ws_key=" + KEY,
		method: method,
		data: xml,
		sslVerify: false,
		header: {
			'content-type': 'text/xml'
		},
		success: (res) => {
			callback(res);
		},
		fail: function(res) {
			console.log(res);
			uni.showToast({
				title: "请求错误",
				image: "../../static/info-icon.png"
			});
		}
	});
}

//根据code获取用户信息
const getCustomer = (callback, param) => {
	baseAPI('/customers', 'GET', callback, param);
}

//创建用户信息
const createCustomer = (callback, param) => {
	let xml =
		`<?xml version="1.0" encoding="UTF-8"?>
            <prestashop xmlns:xlink="http://www.w3.org/1999/xlink">
                <customer>
                <active required="true" format="isBool">1</active>
                    <lastname required="true" maxSize="32" format="isName">` +
		param.lastname + `</lastname>
                    <firstname required="true" maxSize="32" format="isName">` + param.firstname +
		`</firstname>
                    <email required="true" maxSize="128" format="isEmail">email@icare.com</email>
                    <passwd required="true" maxSize="32" format="isPasswd">passwdpasswd</passwd>
                    <id_gender format="isUnsignedId">` +
		param.id_gender + `</id_gender>
                    <birthday format="isBirthDate">` + param.birthday +
		`</birthday>
                    <user_name maxSize="200">` + param.user_name +
		`</user_name>
                    <phone required="true" maxSize="200">` + param.phone +
		`</phone>
                    <occupation required="true" maxSize="3000">` + param.occupation +
		`</occupation>
                    <living_status required="true" maxSize="200">` + param.living_status +
		`</living_status>
                    <home_type required="true" maxSize="200">` + param.home_type +
		`</home_type>
                    <health_status required="true" maxSize="200">` + param.health_status +
		`</health_status>
					<health_status_detail required="true" maxSize="200">` + param.health_status_detail +
		`</health_status_detail>
                    <special_care required="true" maxSize="200">` + param.special_care +
		`</special_care>
                    <special_care_detail maxSize="3000">` + param.special_care_detail +
		`</special_care_detail>
                    <id_global_demand required="true">` + param.id_global_demand +
		`</id_global_demand>
                    <login_type>1</login_type>
                    <address required="true">` +
		param.address + `</address>
		<wx_nick_name required="true">` +
		param.nickName + `</wx_nick_name>
                </customer>
            </prestashop>`;
	baseXML('/customers', 'POST', callback, xml);
}

//创建亲戚信息
const addCustomer = (callback, param) => {
	let xml =
		`<?xml version="1.0" encoding="UTF-8"?>
            <prestashop xmlns:xlink="http://www.w3.org/1999/xlink">
                <address>
                    <id_customer required="true" format="isNullOrUnsignedId">` +
		param.id +
		`</id_customer>
                    <id_country required="true" format="isUnsignedId">5</id_country>
                    <alias required="true" maxSize="32" format="isGenericName">email@icare.com</alias>
                    <lastname required="true" maxSize="32" format="isName">` +
		param.lastname + `</lastname>
                    <firstname required="true" maxSize="32" format="isName">` + param.firstname +
		`</firstname>
                    <address1 required="true" maxSize="128" format="isAddress">` + param.address +
		`</address1>
                    <phone maxSize="32" format="isPhoneNumber">` + param.phone +
		`</phone>
                    <phone_mobile maxSize="32" format="isPhoneNumber">phone_mobile</phone_mobile>
                    <id_gender required="true">` +
		param.id_gender + `</id_gender>
                    <birthday required="true" format="isDate">` + param.birthday +
		`</birthday>
                    <id_global_demand required="true">` + param.id_global_demand +
		`</id_global_demand>
                    <occupation maxSize="3000">` + param.occupation +
		`</occupation>
                    <living_status maxSize="200">` + param.living_status +
		`</living_status>
                    <home_type maxSize="200">` + param.home_type +
		`</home_type>
                    <health_status maxSize="200">` + param.health_status +
		`</health_status>
                    <health_status_detail maxSize="3000">` + param.health_status_detail +
		`</health_status_detail>
                    <special_care maxSize="200">` +
		param.special_care + `</special_care>
                    <special_care_detail maxSize="3000">` + param.special_care_detail +
		`</special_care_detail>
                    <relationship maxSize="200">` + param.relationship +
		`</relationship>
                </address>
            </prestashop>`;
	baseXML('/addresses', 'POST', callback, xml);
}

//获取区域信息
const getArea = (callback, param) => {
	baseAPI('/global_demand', 'GET', callback, param);
}

//获取主服务和主服务可选时间
const getMainServiceAndAvailableTimeList = (callback, param) => {
	baseAPI('/hotels', 'GET', callback, param);
}

//删除亲属信息
const deleteUser = (callback, param) => {
	baseAPI('/addresses/' + param.id, 'DELETE', callback);
}

//修改本人信息
const updateUser = (callback, param) => {
	let xml =
		`<?xml version="1.0" encoding="UTF-8"?>
<prestashop xmlns:xlink="http://www.w3.org/1999/xlink">
    <customer>
    	<id required="true">` +
		param.id + `</id>
        <lastname required="true" maxSize="32" format="isName">` + param.lastname +
		`</lastname>
        <firstname required="true" maxSize="32" format="isName">` + param.firstname +
		`</firstname>
        <id_gender format="isUnsignedId">` + param.id_gender +
		`</id_gender>
        <birthday format="isBirthDate">` + param.birthday +
		`</birthday>
        <phone required="true" maxSize="3000">` + param.phone +
		`</phone>
        <occupation required="true" maxSize="3000">` + param.occupation +
		`</occupation>
        <living_status required="true" maxSize="200">` + param.living_status +
		`</living_status>
        <home_type required="true" maxSize="200">` + param.home_type +
		`</home_type>
        <health_status required="true" maxSize="200">` + param.health_status +
		`</health_status>
        <health_status_detail maxSize="3000">` + param.health_status_detail + `</health_status_detail>       
		<special_care required="true" maxSize="200">` +
		param.special_care + `</special_care>
        <special_care_detail maxSize="3000">` + param.special_care_detail +
		`</special_care_detail>
        <id_global_demand required="true">` + param.id_global_demand +
		`</id_global_demand>
		<address required="true">` + param.address +
		`</address>
        <login_type>1</login_type>
    </customer>
</prestashop>
`;
	baseXML('/customers', 'PUT', callback, xml);
}

//修改亲属信息
const updateMember = (callback, param) => {
	let xml =
		`<?xml version="1.0" encoding="UTF-8"?>
<prestashop xmlns:xlink="http://www.w3.org/1999/xlink">
    <address>
        <id required="true" format="isNullOrUnsignedId">` +
		param.id + `</id>
        <id_customer required="true" format="isNullOrUnsignedId">` + param.main +
		`</id_customer>
        <alias required="true" >email@icare.com</alias>
        <id_country required="true" format="isUnsignedId">5</id_country>
        <lastname required="true" maxSize="32" format="isName">` +
		param.lastname + `</lastname>
        <firstname required="true" maxSize="32" format="isName">` + param.firstname +
		`</firstname>
        <address1 required="true" maxSize="128" format="isAddress">` + param.address +
		`</address1>
        <phone maxSize="32" format="isPhoneNumber">` + param.phone +
		`</phone>
        <phone_mobile maxSize="32" format="isPhoneNumber">phone_mobile111</phone_mobile>
        <id_gender required="true">` +
		param.id_gender + `</id_gender>
        <birthday required="true" format="isDate">` + param.birthday +
		`</birthday>
        <id_global_demand required="true">` + param.id_global_demand +
		`</id_global_demand>
        <occupation maxSize="3000">` + param.occupation +
		`</occupation>
        <living_status maxSize="200">` + param.living_status +
		`</living_status>
        <home_type maxSize="200">` + param.home_type +
		`</home_type>
        <health_status maxSize="200">` + param.health_status +
		`</health_status>
        <health_status_detail maxSize="3000">` + param.health_status_detail +
		`</health_status_detail>
        <special_care maxSize="200">` +
		param.special_care + `</special_care>
        <special_care_detail maxSize="3000">` + param.special_care_detail +
		`</special_care_detail>
        <relationship maxSize="200">` + param.relationship +
		`</relationship>
    </address>
</prestashop>`;
	baseXML('/addresses', 'PUT', callback, xml);
}



// 新建购物车
const createShoppingCart = (callback, param) => {
	let xml =
		`<?xml version="1.0" encoding="UTF-8"?>
		<prestashop xmlns:xlink="http://www.w3.org/1999/xlink">
			<cart>
				<!--亲属账户ID 如果选择主账户为服务对象则留空-->
				<id_address_delivery format="isUnsignedId">` +
		param.id_address_delivery +
		`</id_address_delivery>
				<!--亲属账户ID 如果选择主账户为服务对象则留空-->
				<id_address_invoice format="isUnsignedId">` + param.id_address_invoice +
		`</id_address_invoice>
				<id_currency required="true" format="isUnsignedId">1</id_currency>
				<!--主账户ID-->
				<id_customer format="isUnsignedId">` +
		param.id_customer +
		`</id_customer>
				<id_lang required="true" format="isUnsignedId">3</id_lang>
				<gift format="isBool">1</gift>
				<!--具体产品信息 字符串-->
				<gift_message format="isMessage">` +
		param.gift_message + `</gift_message>
				<!--服务时间 yyyy-mm-dd -->
				<date_from format="isDate" required="true">` +
		param.date_from + `</date_from>
				<delivery_option format="string" required="true">` +
						param.date_from + `</delivery_option>
				<date_to format="isDate" required="true">` + param.date_to +
		`</date_to>
				<reference format="int" required="true">1</reference>
				<promocode format="string" >` + param.promocode +
		`</promocode>
				<id_global_demand>` + param.id_global_demand +
		`</id_global_demand>
				<service_address>` 
				+ param.service_address +
			   `</service_address>
				<associations>
					<cart_rows nodeType="cart_row" virtualEntity="true">
						`;

	for (let product of param.products) {
		xml +=
			`
					<cart_row>
						<!--产品ID-->
						<id_product xlink:href="http://icare.easyiservice.com/api/products/" required="true">` +
			product.id +
			`</id_product>
						<!--留空-->
						<id_product_attribute xlink:href="http://icare.easyiservice.com/api/combinations/" required="true"></id_product_attribute>
						<!--留空-->
						<id_address_delivery xlink:href="http://icare.easyiservice.com/api/addresses/" required="true"></id_address_delivery>
						<!--预订服务数量 最少为1  最终数量 = 预订天数 x 预订服务数量-->
						<quantity>1</quantity>
					</cart_row>
		`;
	}


	xml += `		</cart_rows>
				</associations>
			</cart>
		</prestashop>`;

	baseXML('/carts', 'POST', callback, xml);
}


// 更新购物车
const updateShoppingCart = (callback, param) => {
	let xml =
		`<?xml version="1.0" encoding="UTF-8"?>
		<prestashop xmlns:xlink="http://www.w3.org/1999/xlink">
			<cart>
			    <!--购物车ID-->
			    <id format="isUnsignedId">`+ param.id +`</id>
				<!--亲属账户ID 如果选择主账户为服务对象则留空-->
				<id_address_delivery format="isUnsignedId">` +
		param.id_address_delivery +
		`</id_address_delivery>
				<!--亲属账户ID 如果选择主账户为服务对象则留空-->
				<id_address_invoice format="isUnsignedId">` + param.id_address_invoice +
		`</id_address_invoice>
				<id_currency required="true" format="isUnsignedId">1</id_currency>
				<!--主账户ID-->
				<id_customer format="isUnsignedId">` +
		param.id_customer +
		`</id_customer>
				<id_lang required="true" format="isUnsignedId">3</id_lang>
				<gift format="isBool">1</gift>
				<!--具体产品信息 字符串-->
				<gift_message format="isMessage">` +
		param.gift_message + `</gift_message>
				<!--服务时间 yyyy-mm-dd -->
				<date_from format="isDate" required="true">` +
		param.date_from + `</date_from>
				<date_to format="isDate" required="true">` + param.date_to +
		`</date_to>
				<reference format="int" required="true">1</reference>
				<promocode format="string" >` + param.promocode +
		`</promocode>
				<id_global_demand>` + param.id_global_demand +
		`</id_global_demand>
				<service_address>`
								+ param.service_address +
			   `</service_address>
				<associations>
					<cart_rows nodeType="cart_row" virtualEntity="true">
						`;

	for (let product of param.products) {
		xml +=
			`
					<cart_row>
						<!--产品ID-->
						<id_product xlink:href="http://icare.easyiservice.com/api/products/" required="true">` +
			product.id +
			`</id_product>
						<!--留空-->
						<id_product_attribute xlink:href="http://icare.easyiservice.com/api/combinations/" required="true"></id_product_attribute>
						<!--留空-->
						<id_address_delivery xlink:href="http://icare.easyiservice.com/api/addresses/" required="true"></id_address_delivery>
						<!--预订服务数量 最少为1  最终数量 = 预订天数 x 预订服务数量-->
						<quantity>1</quantity>
					</cart_row>
		`;
	}


	xml += `		</cart_rows>
				</associations>
			</cart>
		</prestashop>`;

	baseXML('/carts', 'PUT', callback, xml);
}


// create order
const createOrder = (callback, param) => {
	let xml =
		`<?xml version="1.0" encoding="UTF-8"?>
		<prestashop xmlns:xlink="http://www.w3.org/1999/xlink">
			<order>
				<id_cart required="true" format="isUnsignedId">`+ param.id_cart +`</id_cart>
				<id_currency required="true" format="isUnsignedId">1</id_currency>
				<id_lang required="true" format="isUnsignedId">3</id_lang>
				<id_customer required="true" format="isUnsignedId">`+ param.id_customer +`</id_customer>
				<id_carrier required="true" format="isUnsignedId">0</id_carrier>
				<module required="true" format="isModuleName">wx</module>
				<payment required="true">`+ param.wx_code +`</payment>
				<total_paid required="true" format="isPrice">`+ param.total_paid +`</total_paid>
				<total_paid_real required="true" format="isPrice">`+ param.total_paid_real +`</total_paid_real>
			</order>
		</prestashop>`;
	baseXML('/orders', 'POST', callback, xml);
}


// get order by main customer id
const getOrderList = (callback, param) => {
	baseAPI('/orders', 'GET', callback, param);
}


module.exports = {
	getCustomer,
	createCustomer,
	getArea,
	addCustomer,
	deleteUser,
	updateUser,
	updateMember,
	getMainServiceAndAvailableTimeList,
	createShoppingCart,
	updateShoppingCart,
	createOrder,
	getOrderList
}
