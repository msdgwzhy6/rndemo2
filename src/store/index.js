import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import getReducers from './reducers';

//thunk为异步action的一个中间件。少了会报个异步的错误。
export default function getStore(navReducer) {
    return createStore(
        getReducers(navReducer),
        undefined,
        applyMiddleware(thunk)
    );
}