import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="Home">
				<h1>Home</h1>
				<Link to="/list">列表</Link>
			</div>
		);
	}
}

export default Home;
