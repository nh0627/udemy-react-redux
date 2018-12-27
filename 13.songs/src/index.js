import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers';

// Create an instance of Provider and wrap our app component with it
// The store prop is going to be the result of calling create store and passing in our reducers.
// So in a typical redux application, we don't have to go directly to the store. The provider will take care of it. 
ReactDOM.render(
    <Provider store={createStore(reducers)}>
        <App />
    </Provider>,
    document.querySelector('#root'));