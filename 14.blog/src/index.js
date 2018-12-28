import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

// Anytime that we dispatch an action, the action will be first sent to redux thunk as the middleware and
// then after redux thunked, the action will be sent off to all of our different reducers.
// when we wired up redux thunk it changed the rules of our action creators.
const store = createStore(reducers, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root'));