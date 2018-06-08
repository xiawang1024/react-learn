import React, { Component } from 'react';
import banner from './banner.png';
import './index.scss';
import weui from 'weui.js';
import wx from 'weixin-js-sdk';
const SONG_LIST = [
	{ value: '01', label: '爱我中华' },
	{ value: '02', label: '不忘初心' },
	{ value: '03', label: '草原上升起不落的太阳' },
	{ value: '04', label: '唱支山歌给党听' },
	{ value: '05', label: '春天的故事' },
	{ value: '06', label: '党啊,亲爱的党' },
	{ value: '07', label: '歌唱祖国' },
	{ value: '08', label: '红旗飘飘' },
	{ value: '09', label: '红星照我去战斗' },
	{ value: '10', label: '洪湖水浪打浪' },
	{ value: '11', label: '解放区的天' },
	{ value: '12', label: '没有共产党就没有新中国' },
	{ value: '13', label: '美丽的中国梦' },
	{ value: '14', label: '七月的鲜花献给党' },
	{ value: '15', label: '亲爱的中国我爱你' },
	{ value: '16', label: '少年中国' },
	{ value: '17', label: '十送红军' },
	{ value: '18', label: '松花江上' },
	{ value: '19', label: '颂歌献给亲爱的党' },
	{ value: '20', label: '童心向党' },
	{ value: '21', label: '团结就是力量' },
	{ value: '22', label: '我爱你中国' },
	{ value: '23', label: '我的中国心' },
	{ value: '24', label: '我的祖国' },
	{ value: '25', label: '五星红旗' },
	{ value: '26', label: '绣红旗' },
	{ value: '27', label: '映山红' },
	{ value: '28', label: '永远跟党走' },
	{ value: '29', label: '知心的话儿对党说' },
	{ value: '30', label: '走进新时代' }
];
class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedSongName: '',
			songList: SONG_LIST
		};
		this.selectedSong = this.selectedSong.bind(this);
		this.startRecord = this.startRecord.bind(this);
	}

	selectedSong() {
		weui.picker(this.state.songList, {
			defaultValue: [ 1 ],
			onConfirm: (result) => {
				this.setState({
					selectedSongName: result[0].label
				});
			}
		});
	}

	startRecord() {
		if (!this.state.selectedSongName) {
			weui.topTips('请先选择歌曲！');
		}
		if (!localStorage.rainAllowRecord || localStorage.rainAllowRecord !== 'true') {
			wx.startRecord({
				success: function() {
					localStorage.rainAllowRecord = 'true';
					wx.stopRecord();
				},
				cancel: function() {
					alert('用户拒绝授权录音');
				}
			});
		}
	}
	render() {
		return (
			<div className="home">
				<div className="hd" />
				<div className="aspectratio w-16-9">
					<img className="aspectratio-content" src={banner} alt="" />
				</div>

				<div className="g-form">
					<div className="para">
						<p className="order">第一步：选择您要录制的歌曲名</p>
						<div className="wrap">
							<span className="label" id="selectSong" onClick={this.selectedSong}>
								{this.state.selectedSongName || '点击选择歌曲'}
							</span>
						</div>
					</div>
					<div className="para">
						<p className="order">
							第二步：开始录制您的歌曲
							<span className="red">（最长录制时间60s）</span>
						</p>
						<div className="wrap">
							<span className="talk_btn" id="talk_btn" onTouchStart={this.startRecord}>
								按住开始录音
							</span>
						</div>
					</div>
					<div className="para">
						<p className="order">第三步：查看您的录制记录</p>
						<div className="wrap">
							<span className="go-song-list" id="goSongList">
								点击进入您的歌库
							</span>
						</div>
					</div>
				</div>
				<div className="g-download">
					<a href="http://www.hndt.com/app/download/index.html" className="down">
						下载河南广播APP
					</a>
					<p className="desc">关注身边发生的事 河南人自己的APP</p>
				</div>
				<div className="g-ft">
					<div className="m-version">
						<a href="http://www.hndt.com/index.mb.html">触摸版</a> |
						<a href="http://www.hndt.com">电脑版</a> |
						<a href="http://www.hndt.com/index.mb.html">APP版</a>
					</div>
					<div className="m-copyright">手机河南广播网 ICP：豫ICP备14003020号</div>
				</div>
			</div>
		);
	}
}

export default Home;
