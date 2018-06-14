import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
<<<<<<< HEAD
=======
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
>>>>>>> e2c8a8e66e1226b66cbc223213382fa541870820
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
<<<<<<< HEAD
						<li key={index} onClick={this.clickHandler.bind(this, item)}>
=======
						<li key={index} onClick={this.gotoDetail.bind(this, item)}>
>>>>>>> e2c8a8e66e1226b66cbc223213382fa541870820
							js jump to {item}
						</li>
					);
				})}
			</ul>
		);
	}
	clickHandler(item) {
		console.log(this.props);
		this.props.history.push('/detail/' + item);
	}
}

<<<<<<< HEAD
export default withRouter(List);
=======
const mapStateToProps = (state) => {
	return {
		userinfo: state.userinfo
	};
};

const mapDispatchToProps = (dispatch) => {
	return { userinfoActions: bindActionCreators(userinfoActions, dispatch) };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(List));
>>>>>>> e2c8a8e66e1226b66cbc223213382fa541870820
