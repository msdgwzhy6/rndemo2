import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

// 引入action
import * as goodsAction from '../../store/actions/goods';

// 常量设置
const INITIAL_PAGE = 1;

class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    const {actions} = this.props;
    actions.getGoodsList(INITIAL_PAGE)
  }
  render() {
    console.log(this.props.goodsList.data)
    return (
      <View>
        <Text>主页</Text>
      </View>
    );
  }
}

// 同步store中的state，状态改变，实时更新
const mapStateToProps = state => {
  return {goodsList: state.goods.goodsList};
}
// 同步store中的action
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(goodsAction, dispatch),
  dispatch: dispatch
});

export default connect(mapStateToProps, mapDispatchToProps)(Home)