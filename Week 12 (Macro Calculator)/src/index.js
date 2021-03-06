import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Router } from "react-router-dom";
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { Provider } from "react-redux"

import { userReducer } from "./store/reducers"
import history from "./history"

export const store = createStore(userReducer, applyMiddleware(thunk))
ReactDOM.render(
<Provider store={store}>
    <Router history={history}>
        <App />
    </Router>
</Provider>
, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
