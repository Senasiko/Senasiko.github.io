---
layout: post
title: react-native开发过程中遇到的问题
description: react-native开发过程中遇到的问题记录
share: true
tags: ['react-native']
date: 2017-08-04
---
## 使用 `react-native-video` ，安装app报错
### 原因
版本问题：`"react-native-video": "^1.2.0",` 和 `"react-native": "^0.47.0",`
### 解决办法
参照 [这里](https://github.com/react-native-community/react-native-video/pull/718/files)

## 使用reducer组件不更新
### 原因
reducer 中 newState 不能指向 state，指向的话会认为没有变化。
### 解决办法
`newState = {...state}`
ps: 在 `switch case` 中 `default` 必须返回原 state，即
```
switch(action.type){
...
default: return state;break;
}
```
