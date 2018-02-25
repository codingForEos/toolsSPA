import React from 'react';
import ReactDOM from 'react-dom';

import {Router,
        Route,
        Link,
        Switch,
        Redirect
    } from 'react-router-dom'

import {Provider} from 'react-redux';
import { createStore } from "redux";

import history from '../common/utils/history.js';

import './index.scss'

import {rootReducer} from '../common/reducers/index.js';
import {Container} from '../common/container/index.js';

const store = createStore(rootReducer);

// 创建监听state函数，监听state状态的改变
let unsubscribe = store.subscribe(()=>console.log(store.getState()));
unsubscribe();
ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Switch className="Router">
                <Route  path='/' component={Container}/>
            </Switch>
        </Router>
    </Provider>
    ,document.getElementById('app'));
