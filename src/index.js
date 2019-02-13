import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Routing from './Routes';
import React from 'react';

ReactDOM.render(<Routing />, document.getElementById('root'));

serviceWorker.unregister();
