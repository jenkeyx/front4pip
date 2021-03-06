import ReactDOM from "react-dom";
import React, {useState} from "react";
import App from "./App";
import './styles/Common.css'

import rootReducer from './store/reducers';
import {Provider} from 'react-redux';
import {createStore} from "redux";

ReactDOM.render(
    <Provider store = {createStore(rootReducer)}>
        <App/>

    </Provider>
    , document.getElementById('root')
);




//todo сортировка точек
//todo обновление приложения вылетает из хоума
//todo точки туфикед
