---
layout: post
title: react-native起步易错点记录
description: react-native起步易错点记录
share: true
tags: ['react-native']
date: 2017-07-26
---
#### 按照 [react-native中文文档](http://reactnative.cn/docs/0.46/getting-started.html) 起步

## 样式
- 建议使用 `StyleSheet.create` 来集中定义组件的样式
```js
const styles = StyleSheet.create({
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  red: {
    color: 'red',
  },
});
```

## 标签
- `<FlastList>` 中 `renderItem` 属性函数内部 `this` 指向 `window` ，所以要使用 this 请在 return 里使用       
- `<FlastList>` 的父元素**必须设置 `{flex: 1}`** **必须设置 `{flex: 1}`** **必须设置 `{flex: 1}`** 

## 资源

- require中的图片名字必须是一个静态字符串（不能使用变量！因为require是在编译时期执行，而非运行时期执行！）。
- 如果你需要动态缩放图片（例如，通过flex），你可能必须手动在style属性设置{ width: undefined, height: undefined }。
- 视频必须指定尺寸而不能使用flex样式。
- 边框圆角样式目前在iOS的图片组件上还不支持。

## 杂记
- 在iOS上使用http链接的图片地址可能不会显示，参见[这篇说明修改](https://segmentfault.com/a/1190000002933776)。
- 可以使用应用内的开发者菜单中的“FPS Monitor”工具来监控应用的帧率。
- android studio sdk配置必须6.0

## 常用网站
- [react-navigation使用技巧](http://www.jianshu.com/p/2f575cc35780)
