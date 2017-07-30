---
layout: post
title: react-navigation 结合 redux 使用之后 state 和 action 无法传递
tags: ['react-native', 'redux', 'navigation']
share: true
date: 2017-07-28
---

### 解决过程

1. 去掉navigation
成功传递state和action

2. 添加combineReducers，只添加视图的reducer，看是否是combineReducers的问题
``` js
import Home from './modules/home/views/Home'
// 合并所有的reducer
const reducer = combineReducers({
    home: home.reducer
});
// 连接redux和组件
const StoreApp = connect(mapStateToProps, mapActionToProps)(Home);
// 生成store
const store = applyMiddleware(thunk)(createStore)(reducer);
```
成功传递state
3. 添加navigation的reducer，看是否是这个的问题
```js
//注册路由reducer
export const stackReducer = (state,action) => {
    const newState = StackRouter.router.getStateForAction(action, state);
    return newState || state;
};

// 合并所有的reducer
const reducer = combineReducers({
    router: stackReducer,
    home: home.reducer
});
```
没问题，router的数据也有取到
4. 添加bindActionCreators
```js
// 合并所有的action到props
const mapActionToProps = (dispatch) => {
    return {
        homeaction: bindActionCreators(home.actions, dispatch)
    }
};
```
木有问题，action成功传递到，正常使用
5. 把connect()(Home)改为connect()(StackRouter)，看是否是路由视图影响
```js
//建立路由组件
class RouterApp extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <StackRouter/>
        )
    }
}
const StoreApp = connect(mapStateToProps, mapActionToProps)(Home);
```
state和action都没有传递，确定是路由组件的问题
6. 修改路由组件，查找失败原因
7. 找了一天半找不到原因，去提问吧_(:зゝ∠)_
解决问题 [stackoverflow](https://stackoverflow.com/questions/45396088/redux-state-dont-send-when-use-react-navigation)
### 原因解释
该问题是因为navigation组件的加入导致store的数据无法向下传递。在navigation加入之前仅需把根组件和store connect就好，但是加入之后就不行了。     
解决办法有两个：    
1. 把store加入screenProps
```js
<StackRouter navigation={addNavigationHelpers({
                 state: this.props.router
             })} screenProps = {this.props}
```
但是这种办法会把整个state都传递给所有的子组件
2. 给每个组件connect
在子组件的view.js里导出connect后的组件
```js

export default connect(
    (state) => ({
        home: state.home
    }),
    (dispatch) => ({
        actions: bindActionCreators(actions, dispatch)
    })
)(Home);
```
**ps: redux 中 connect之后的也是一个组件，这个没理解好导致问题没有很快解决** 