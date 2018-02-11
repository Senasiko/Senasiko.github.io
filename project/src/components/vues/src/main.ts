import Vue, { Component } from 'vue'
import createVue from './creatVue';
import PostList from './components/PostList/PostList';
import './css/main.less'


Vue.config.productionTip = false;

window['setPostList'] = (document, options) => {
  const vm: Vue = createVue(PostList, options);
  vm.$mount(document);
  return vm;
};
