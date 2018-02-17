import Vue, { Component } from 'vue';
import store from './store';

interface Options {
  created?: () => void;
  mounted?: () => void;
  data?: object;
}

export const createVue: (mComponent: Component, options?: Options) => Vue =
  (mComponent, options={}): Vue => {
    const vm = new Vue({
      store,
      render: h => (<m-component ref={'mComponent'} data={options.data}/>),
      components: { mComponent },
      mounted: function() {
        this.$nextTick(() => {
          options.mounted && options.mounted();
        })
      }
    });
    // get ref
    vm['getRef'] = () => vm.$refs['mComponent'];
    return vm;
  };

export default createVue;
