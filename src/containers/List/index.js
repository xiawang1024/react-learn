import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
class List extends Component {
	constructor(props) {
		super();
	}
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

export default withRouter(List);
