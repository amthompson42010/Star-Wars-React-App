import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore } from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers';

const store = createStore(rootReducer);

const Main = () => (
	<Provider store={store}>
		<App />
	</Provider>
)

ReactDOM.render(<Main />, document.getElementById('root'));
registerServiceWorker();
