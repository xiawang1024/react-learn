import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import './weChat/index';
import registerServiceWorker from './registerServiceWorker';

document.body.addEventListener('touchstart', () => {});

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
