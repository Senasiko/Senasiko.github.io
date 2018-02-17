import Vue, { Component } from 'vue'
import createVue from './creatVue';
import './css/main.less'

import PostList from './components/PostList/PostList';
import UserMsg from './components/UserMsg/UserMsg.vue';


Vue.config.productionTip = false;

const vueCom = window['vueCom']= {};
vueCom['postList'] = (document, options={}) => {
  const vm: Vue = createVue(PostList, options);
  vm.$mount(document);
  return vm;
};

vueCom['userMsg'] = (document, options={}) => {
  const vm: Vue = createVue(UserMsg, options);
  vm.$mount(document);
  return vm;
};
