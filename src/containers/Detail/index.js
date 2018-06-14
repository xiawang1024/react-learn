import React from 'react';
import { withRouter } from 'react-router-dom';

class Detail extends React.Component {
	componentDidMount() {
		console.log(this.props);
	}
	render() {
		return <p>Detail，url参数：{this.props.match.params.id}</p>;
	}
}

export default withRouter(Detail);
