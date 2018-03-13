import "babel-polyfill";
import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose   } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { asyncLocalStorage } from 'redux-persist/storages';
import thunk from 'redux-thunk';
import Root from './js/Root';
import combineStore from './js/reducers/combineStore';
import restService from './ApiMiddleware/api/HttpService';
import apiMiddleware from './ApiMiddleware/ApiMiddleware';

const middleware = [ thunk ];

let store = compose(
    applyMiddleware(...middleware, apiMiddleware),
    autoRehydrate()
)(createStore)(combineStore);
persistStore(store, {storage: asyncLocalStorage});

restService.setHttpService('/SmartIndiaHackathon');

render(
    <Root store={store}/>,
    document.getElementById('root')
);
