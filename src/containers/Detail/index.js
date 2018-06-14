import React from 'react';
import { withRouter } from 'react-router-dom';

class Detail extends React.Component {
	componentDidMount() {
		console.log(this.props);
	}
	render() {
		let { match } = this.props;
		return <p>Detail，url参数：{match.params.id}</p>;
	}
}

export default withRouter(Detail);
