import React from 'react';
import {render} from 'react-dom';
import './index.css';
import App from './App';
import "react-toastify/dist/ReactToastify.css";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux";
import store from './store/store';


render(
    <Provider store={store}>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    </Provider>
    ,document.getElementById("root"));

