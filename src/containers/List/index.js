import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userinfoActions from '../../store/actions/userinfo';
class List extends Component {
	gotoDetail(item) {
		this.props.history.push(`/detail/${item}`);
	}
	updateUserInfo() {
		let { userinfoActions, userinfo } = this.props;
		let { age } = userinfo;
		age++;
		userinfoActions.login({
			name: 'gyy',
			age
		});
	}
	render() {
		const arr = [ 1, 2, 3 ];
		let { userinfo } = this.props;
		return (
			<div>
				<ul>
					{arr.map((item, index) => {
						return (
							<li key={index} onClick={this.gotoDetail.bind(this, item)}>
								js jump to {item}
							</li>
						);
					})}
				</ul>
				<p>{userinfo.name}</p>
				<p>{userinfo.age}</p>
				<button onClick={this.updateUserInfo.bind(this)}>修改</button>
			</div>
		);
	}
	clickHandler(item) {
		console.log(this.props);
		this.props.history.push('/detail/' + item);
	}
}

const mapStateToProps = (state) => {
	return {
		userinfo: state.userinfo
	};
};

const mapDispatchToProps = (dispatch) => {
	return { userinfoActions: bindActionCreators(userinfoActions, dispatch) };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(List));
