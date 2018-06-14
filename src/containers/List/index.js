import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
class List extends Component {
	gotoDetail(item) {
		this.props.history.push(`/detail/${item}`);
	}
	render() {
		const arr = [ 1, 2, 3 ];
		return (
			<ul>
				{arr.map((item, index) => {
					return (
						<li key={index} onClick={this.gotoDetail.bind(this, item)}>
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
