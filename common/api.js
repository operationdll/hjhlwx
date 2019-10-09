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
		data: param,
		success: (res) => {
			callback(res);
		},
		fail: function(res) {
			console.log(res);
			uni.showToast({
				title: "请求错误",
				image: "../../static/info-icon.png",
				duration: 2000
			});
		},
		complete: function() {
			uni.hideLoading();
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
				image: "../../static/info-icon.png",
				duration: 2000
			});
		},
		complete: function() {
			uni.hideLoading();
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
                    <special_care required="true" maxSize="200">` + param.special_care +
		`</special_care>
                    <special_care_detail maxSize="3000">` + param.special_care_detail +
		`</special_care_detail>
                    <id_global_demand required="true">` + param.id_global_demand +
		`</id_global_demand>
                    <login_type>1</login_type>
                    <address required="true">` +
		param.address + `</address>
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
                    <health_status_detail maxSize="3000">health_status_detail</health_status_detail>
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
        <health_status_detail maxSize="3000"> ["长期病患", "长期病患1", "长期病患2", "长期病患3"] </health_status_detail>       
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
        <health_status_detail maxSize="3000">health_status_detail111</health_status_detail>
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

module.exports = {
	getCustomer,
	createCustomer,
	getArea,
	addCustomer,
	deleteUser,
	updateUser,
	updateMember
}
