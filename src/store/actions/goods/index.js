import * as types from '../../constants/actionTypes';

/*设置常量*/
// 每页个数
const PAGE_SIZE = 10

const fetchGoodsList = (currentPage) => {
  let params = {}
  params.currentPage = currentPage;
  params.pageSize = PAGE_SIZE;
  return http.get('/goods/getGoodsList', params)
}

export const getGoodsList = (currentPage) => {
  return (dispatch, getState) => {
    return fetchGoodsList(currentPage).then((res) => {
      if (res.status === 200) {
        let goodsList = {}
        if (currentPage === 1) {
          goodsList = res.data
        } else {
          goodsList.data = getState().goods.goodsList.data.concat(res.data.data)
          goodsList.pageTotal = parseInt(res.data.pageTotal)
          goodsList.currentPage = parseInt(res.data.currentPage)
          goodsList.pageSize = parseInt(res.data.pageSize)
        }
        dispatch(setGoodsList(goodsList));
      } else {
        alert(res)
      }
    });
  };
};

export const setGoodsList = (data) => {
  return {type: types.SET_GOODSLIST, data};
};
