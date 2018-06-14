import React from 'react';
import { withRouter } from 'react-router-dom';

class Detail extends React.Component {
	componentDidMount() {
		console.log(this.props);
	}
	render() {
<<<<<<< HEAD
		return <p>Detail，url参数：{this.props.match.params.id}</p>;
=======
		let { match } = this.props;
		return <p>Detail，url参数：{match.params.id}</p>;
>>>>>>> e2c8a8e66e1226b66cbc223213382fa541870820
	}
}

export default withRouter(Detail);
