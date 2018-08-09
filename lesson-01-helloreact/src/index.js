import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import Mycomponent from './components/mycomponent/mycomponent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Mycomponent />, document.getElementById('root'));
registerServiceWorker();
