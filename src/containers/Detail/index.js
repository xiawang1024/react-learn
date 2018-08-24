import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userinfoActions from '../../store/actions/userinfo';

class Detail extends React.Component {
	componentDidMount() {
		console.log(this.props);
	}
	updateUserInfo() {
		let { userinfoActions } = this.props;
		userinfoActions.updateUserInfo({
			name: 'baodan',
			age: 0
		});
	}
	render() {
		let { match, userinfo } = this.props;
		return (
			<div>
				<p>Detail，url参数：{match.params.id}</p>
				<p>{userinfo.name}</p>
				<p>{userinfo.age}</p>
				<button onClick={this.updateUserInfo.bind(this)}>更新</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		userinfo: state.userinfo
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		userinfoActions: bindActionCreators(userinfoActions, dispatch)
	};
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Detail));
