import wx from 'weixin-js-sdk';
import axios from 'axios';
import weui from 'weui.js';
import Qs from 'qs';
import { WeChatConf } from './util';

const weChatConf = new WeChatConf();

weChatConf.init();

wx.ready(function() {
	wx.onMenuShareTimeline({
		title: weChatConf.title,
		link: weChatConf.link,
		imgUrl: weChatConf.img_url,
		success: function() {},
		cancel: function() {}
	});
	wx.onMenuShareAppMessage({
		title: weChatConf.title,
		desc: weChatConf.link,
		link: weChatConf.img_url,
		imgUrl: weChatConf.desc,
		type: '',
		dataUrl: '',
		success: function() {},
		cancel: function() {}
	});

	wx.onVoiceRecordEnd({
		// 录音时间超过一分钟没有停止的时候会执行 complete 回调
		complete: function(res) {
			const localId = res.localId;
			wx.playVoice({
				localId: localId // 需要播放的音频的本地ID，由stopRecord接口获得
			});
			weui.confirm('回听已录制的歌曲', {
				buttons: [
					{
						label: '重新录制',
						type: 'default',
						onClick: function() {
							console.log('no');
						}
					},
					{
						label: '确定上传',
						type: 'primary',
						onClick: function() {
							uploadVoice(localId);
						}
					}
				]
			});
		}
	});
});
function uploadVoice(voiceLocalId) {
	//调用微信的上传录音接口把本地录音先上传到微信的服务器
	//不过，微信只保留3天，而我们需要长期保存，我们需要把资源从微信服务器下载到自己的服务器
	wx.uploadVoice({
		localId: voiceLocalId, // 需要上传的音频的本地ID，由stopRecord接口获得
		isShowProgressTips: 1, // 默认为1，显示进度提示
		success: function(res) {
			const userInfo = weChatConf.getStorage('WXHNDTOPENID');
			const openId = JSON.parse(userInfo).openid;
			const songName = document.querySelector('#selectSong').html();
			//把录音在微信服务器上的id（res.serverId）发送到自己的服务器供下载。
			axios({
				method: 'get',
				url: 'https://a.weixin.hndt.com/boom/api/wx/radio/download',
				data: Qs.stringify({ mediaId: res.serverId, openId: openId, name: songName })
			}).then(() => {
				weui.toast('上传成功！');
			});
		}
	});
}
