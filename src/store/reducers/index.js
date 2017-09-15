import { combineReducers } from 'redux';

import goods from './goods'

const reducers = {
  goods
};

//和导航相关的reducer通过从调用出传递进来
export default function getReducers(navReducer) {
    return combineReducers({
        ...reducers,
        nav: navReducer
    });
}