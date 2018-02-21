import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router,
        Route,
        Link,
        Switch,
        Redirect
    } from 'react-router-dom'

import {Provider} from 'react-redux';
import { createStore } from "redux";

import './index.scss'

import {rootReducer} from '../common/reducers/index.js';
import Container from '../common/container/index.js';

const store = createStore(rootReducer);

// 创建监听state函数，监听state状态的改变
let unsubscribe = store.subscribe(()=>console.log(store.getState()));
unsubscribe();
// react渲染
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Route to='/' component={Container}/>
        </Router>
    </Provider>
    ,document.getElementById('app'));
