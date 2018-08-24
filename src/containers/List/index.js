import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as userinfoActions from '../../store/actions/userinfo';

class List extends Component {
	gotoDetail(item) {
		// this.props.history.push(`/detail/${item}`);
		this.props.userinfoActions.updateUserInfo({ name: 'gyy', age: 26 });
		console.log('------------------------------------');
		console.log(this.props.userinfo);
		console.log('------------------------------------');
	}
	render() {
		const arr = [ 1, 2, 3 ];
		return (
			<ul>
				<li />
				{arr.map((item, index) => {
					return (
						<li
							key={index}
							onClick={this.gotoDetail.bind(this, item)}
							style={{ lineHeight: 2, cursor: 'pointer' }}
						>
							js jump to {item}
						</li>
					);
				})}
			</ul>
		);
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
