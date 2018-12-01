import React, { Component,lazy,Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

// import Home from '../containers/Home';
// import List from '../containers/List';
// import Detail from '../containers/Detail';
// import NotFound from '../containers/NotFound';

const Home = lazy(() => import('../containers/Home'))
const List = lazy(() => import('../containers/List'))
const Detail = lazy(() => import('../containers/Detail'))
const NotFound = lazy(() => import('../containers/NotFound'))

class Router extends Component {
	render() {
		return (
			<div>
				<Suspense fallback={<div>Loading...</div>}>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/list' component={List} />
						<Route path='/detail/:id' component={Detail} />
						<Route path='*' component={NotFound} />
					</Switch>
				</Suspense>
			</div>
		);
	}
}



export default Router;
