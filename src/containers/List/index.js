import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
class List extends Component {
	render() {
		const arr = [ 1, 2, 3 ];
		return (
			<ul>
				{arr.map((item, index) => {
					return (
						<li key={index} onClick={this.clickHandler.bind(this, item)}>
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

export default withRouter(List);
