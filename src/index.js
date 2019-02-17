import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Routing from './Routes';
import React from 'react';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import addCardReducer from './reducers/addCardReducer';

const store = createStore(addCardReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Provider store={store}><Routing /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
