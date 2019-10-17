import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './store/';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './stylesheets/scss/index.scss';
import logger from 'redux-logger';

const middleware = compose(applyMiddleware(thunk), applyMiddleware(logger))

const store = createStore(rootReducer, middleware)

ReactDOM.render(<BrowserRouter><Provider store={store}>
    <App />
</Provider></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
