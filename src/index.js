import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore.js';

import './index.scss';
import App from './App';
// import './weChat/index';
import registerServiceWorker from './registerServiceWorker';

document.body.addEventListener('touchstart', () => {});

const store = configureStore();
ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
