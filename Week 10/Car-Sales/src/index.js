import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from "redux"
import { Provider } from "react-redux"
import { carFeatureReducer } from "./reducers"

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(carFeatureReducer)

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>
, rootElement);
