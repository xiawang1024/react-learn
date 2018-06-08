// var weChat = {
// 	getQueryString: function(name) {
// 		var url = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
// 		var newUrl = window.location.search.substr(1).match(url);
// 		if (newUrl != null) {
// 			return unescape(newUrl[2]);
// 		} else {
// 			return false;
// 		}
// 	},
// 	redirectUrl: function() {
// 		return (
// 			weChatConf.baseUrl +
// 			'appid=' +
// 			weChatConf.appId +
// 			'&redirect_uri=' +
// 			encodeURIComponent(weChatConf.redirect_uri) +
// 			'&response_type=' +
// 			weChatConf.response_type +
// 			'&scope=' +
// 			weChatConf.scope +
// 			'&state=' +
// 			weChatConf.state +
// 			weChatConf.weChat_Redirect
// 		);
// 	},
// 	getOpenId: function(code) {},
// 	getStorage: function(name) {
// 		return localStorage.getItem(name);
// 	},
// 	setStorage: function(name, value) {
// 		return localStorage.setItem(name, value);
// 	}
// };
// var weChatConf = {
// 	baseUrl: 'https://open.weixin.qq.com/connect/oauth2/authorize?',
// 	appId: 'wx5f789dea59c6c2c5',
// 	redirect_uri: 'https://a.weixin.hndt.com/h5/test/index.html?cid=' + weChat.getQueryString('cid'),
// 	response_type: 'code',
// 	scope: 'snsapi_userinfo', //snsapi_base 只获取openId ， snsapi_userinfo 获取用户信息
// 	state: Date.parse(new Date()),
// 	weChat_Redirect: '#wechat_redirect'
// };

class WeChat {
	constructor() {
		this.baseUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize?';
		this.appId = 'wx5f789dea59c6c2c5';
		this.redirect_uri = 'https://a.weixin.hndt.com/h5/test/index.html?cid=' + this.getQueryString('cid');
		this.response_type = 'code';
		this.scope = 'snsapi_userinfo'; //snsapi_base 只获取openId ， snsapi_userinfo 获取用户信息;
		this.state = Date.parse(new Date());
		this.weChat_Redirect = '#wechat_redirect';
	}
	getQueryString(name) {
		var url = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
		var newUrl = window.location.search.substr(1).match(url);
		if (newUrl != null) {
			return unescape(newUrl[2]);
		} else {
			return false;
		}
	}
	redirectUrl() {
		return (
			this.baseUrl +
			'appid=' +
			this.appId +
			'&redirect_uri=' +
			encodeURIComponent(this.redirect_uri) +
			'&response_type=' +
			this.response_type +
			'&scope=' +
			this.scope +
			'&state=' +
			this.state +
			this.weChat_Redirect
		);
	}
	getStorage(name) {
		return localStorage.getItem(name);
	}
	setStorage(name, value) {
		return localStorage.setItem(name, value);
	}
}

export default WeChat;
