import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../containers/Home';
import List from '../containers/List';
import Detail from '../containers/Detail';
import NotFound from '../containers/NotFound';

class Router extends Component {
	render() {
		return (
			<div>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/list" component={List} />
					<Route path="/detail/:id" component={Detail} />
					<Route path="*" component={NotFound} />
				</Switch>
			</div>
		);
	}
}

export default Router;
