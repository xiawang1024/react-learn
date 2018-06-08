import axios from 'axios';
import Qs from 'qs';
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
		let url =
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
			this.weChat_Redirect;
		window.location = url;
	}
	hasCode() {
		if (!this.getQueryString('code')) {
			this.redirectUrl();
		} else {
			this.getOpenId();
		}
	}
	getOpenId() {
		axios({
			method: 'post',
			url: 'https://a.weixin.hndt.com/boom/api/token/access/redirect2',
			data: Qs.stringify({ code: this.getQueryString('code'), cate: this.appId })
		})
			.then((res) => {
				let data = res.data;
				if (data.status == 'ok') {
					this.setStorage('WXHNDTOPENID', JSON.stringify(data.data));
				} else {
					this.redirectUrl();
				}
			})
			.catch(() => {
				this.redirectUrl();
			});
	}
	getStorage(name) {
		return localStorage.getItem(name);
	}
	setStorage(name, value) {
		return localStorage.setItem(name, value);
	}
}

export default WeChat;
