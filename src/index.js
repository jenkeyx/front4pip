import ReactDOM from "react-dom";
import React from "react";
import App from "./App";

import rootReducer from './store/reducers';
import {Provider} from 'react-redux';
import {createStore} from "redux";

ReactDOM.render(
    <Provider store = {createStore(rootReducer)}>
        <App/>
    </Provider>
    , document.getElementById('root')
);