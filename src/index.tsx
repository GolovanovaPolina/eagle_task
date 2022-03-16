import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "regenerator-runtime/runtime"
// @ts-ignore
import React from "react";
import { render } from "react-dom";
import { combineReducers } from 'redux'
// @ts-ignore
import store from "./store/store.tsx";
import {Provider} from "react-redux";


export default combineReducers({})

render(
    <Provider store={store}>
        <React.StrictMode>
        <App />
    </React.StrictMode>
    </Provider>,

  document.getElementById('root')
);

reportWebVitals();
