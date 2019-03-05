/* REACT */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer from './Reducers'
import middleware from './middleware'

/* REDUX */
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(reducer, middleware)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);