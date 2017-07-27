---
layout: post
title: weex使用过程中遇到的问题
description: 这两周调研weex，总结使用过程中遇到的问题
---
# weex遇到的问题
## 1. 开发环境
目前官方提供的工具为 [weex-toolkit](https://github.com/weexteam/weex-toolkit) 按照文档即可完成环境搭建。     
另一个可以用的开发环境 [weex-hackernews](https://github.com/weexteam/weex-hackernews)
## 2. 开发过程
- 官方提供的标签过少。
- 不支持 z-index。
- `<div>` 不支持 overflow-y。
- `<slide>` 轮播图标签中 `<indicator>` 指示器点的样式没有成功修改过。
- `<transition>` 标签在多个试图切换过程中会出现混乱的情况(**是 weex 的问题还是 vue 的问题待调查**)。
- 调用 android 和 ios 系统功能的 api 几乎没有。大部分都要通过自己封装原生的代码来实现功能。
## 3. 多终端调试及编译
- web 可以实现正常的调试，并且有 [vue-devtools](https://github.com/vuejs/vue-devtools) 工具来方便调试。
- native 端只能用 `weex-toolkit` 进行单页调试，无法调试整个应用。
- [集成 Devtools 到 Android](https://weex.incubator.apache.org/cn/references/advanced/integrate-devtool-to-android.html) 也没成功。
- 各终端的兼容性不好，在 web 端正常显示的程序编译后往往会出现兼容性问题，且因为无法调试整个系统导致修改起来极其麻烦。
- `weex-toolkit` 可以直接通过命令行编译生成 apk 等 native 文件。
## 4. 社区
官方文档真的太少、太简单了。  
github相关源码的issue也很少。
---
#### ps: [关于weex的一些issue汇总](https://github.com/alibaba/weex/issues/1494)
