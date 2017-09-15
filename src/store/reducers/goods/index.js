import * as types from '../../constants/actionTypes';
import goodsState from '../../states/goods';

export default function goods(state = goodsState, action) {
  switch (action.type) {
    case types.SET_GOODSLIST:
      return {
        ...state,
        goodsList: action.data
      };
    case types.SET_GOODS:
      return {
        ...state,
        goods: action.data
      };
    default:
      return state;
  }
}