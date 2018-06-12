import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class List extends Component {
	render() {
		const arr = [ 1, 2, 3 ];
		return (
			<ul>
				{arr.map((item, index) => {
					return <li key={index}>js jump to {item}</li>;
				})}
			</ul>
		);
	}
}

export default List;
